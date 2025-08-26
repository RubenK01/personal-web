import json
import boto3
import os
from datetime import datetime
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    """
    Función Lambda para procesar formularios de contacto y enviar notificaciones por email
    
    Variables de entorno requeridas:
    - RECIPIENT_EMAIL: Email donde recibir las notificaciones
    - SENDER_EMAIL: Email verificado en SES para enviar
    - AWS_REGION: Región de AWS (ej: eu-west-1)
    """
    
    # Configuración
    recipient_email = os.environ.get('RECIPIENT_EMAIL', 'rcasadodev@gmail.com')
    sender_email = os.environ.get('SENDER_EMAIL', 'noreply@rcasado.cloud')  # Usar dominio propio
    aws_region = os.environ.get('AWS_REGION', 'eu-west-1')
    
    try:
        # Debug: imprimir el evento completo
        print(f"Evento recibido: {json.dumps(event, indent=2)}")
        
        # Parsear el body del evento
        if 'body' in event:
            if isinstance(event['body'], str):
                print(f"Body como string: {event['body']}")
                body = json.loads(event['body'])
            else:
                print(f"Body como objeto: {event['body']}")
                body = event['body']
        else:
            print("No hay 'body' en el evento, usando evento completo")
            body = event
            
        # Extraer datos del formulario
        name = body.get('name', 'No especificado')
        email = body.get('email', 'No especificado')
        company = body.get('company', 'No especificado')
        message = body.get('message', 'No especificado')
        
        # Debug logging
        print(f"Datos recibidos: name={name}, email={email}, company={company}")
        
        # Validación básica mejorada
        if not email or email == 'No especificado' or '@' not in email or '.' not in email:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST'
                },
                'body': json.dumps({
                    'success': False,
                    'message': 'Email inválido'
                })
            }
        
        # Configurar cliente SES
        ses_client = boto3.client('ses', region_name=aws_region)
        
        # Timestamp
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Debug info
        print(f"📧 Preparando email:")
        print(f"  Para: {recipient_email}")
        print(f"  De: {sender_email}")
        print(f"  Asunto: 🔔 Nueva consulta desde tu web - {name}")
        
        # Construir el email (asunto sin emojis para evitar SPAM)
        subject = f"Nueva consulta web de {name} - rcasado.cloud"
        
        html_body = f"""
        <html>
        <head></head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #ef4444; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
                    Nueva consulta desde rcasado.cloud
                </h2>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #0f172a;">Datos del contacto:</h3>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Nombre:</td>
                            <td style="padding: 8px 0;">{name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                            <td style="padding: 8px 0;"><a href="mailto:{email}" style="color: #ef4444;">{email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Empresa:</td>
                            <td style="padding: 8px 0;">{company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">Fecha:</td>
                            <td style="padding: 8px 0;">{timestamp}</td>
                        </tr>
                    </table>
                </div>
                
                <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #0f172a;">Mensaje:</h3>
                    <p style="white-space: pre-wrap; margin: 0;">{message}</p>
                </div>
                
                <div style="margin-top: 30px; padding: 15px; background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 4px;">
                    <p style="margin: 0; font-size: 14px; color: #7f1d1d;">
                        <strong>Acción recomendada:</strong> Responde en las próximas 24h para maximizar la conversión.
                    </p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="font-size: 12px; color: #6b7280;">
                        Enviado desde el formulario de contacto de rcasado.cloud<br>
                        Este email fue generado automáticamente en respuesta a una consulta web.<br>
                        DevOps & Cloud Engineering Services
                    </p>
                </div>
            </div>
        </body>
        </html>
        """
        
        text_body = f"""
        NUEVA CONSULTA DESDE TU WEB
        ==========================
        
        Datos del contacto:
        - Nombre: {name}
        - Email: {email}
        - Empresa: {company}
        - Fecha: {timestamp}
        
        Mensaje:
        {message}
        
        ---
        Responde pronto para maximizar la conversión.
        """
        
        # Enviar email
        response = ses_client.send_email(
            Destination={
                'ToAddresses': [recipient_email],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': 'UTF-8',
                        'Data': html_body,
                    },
                    'Text': {
                        'Charset': 'UTF-8',
                        'Data': text_body,
                    },
                },
                'Subject': {
                    'Charset': 'UTF-8',
                    'Data': subject,
                },
            },
            Source=sender_email,
            ReplyToAddresses=[email],  # Para que puedas responder directamente
        )
        
        print(f"✅ Email enviado exitosamente. MessageId: {response['MessageId']}")
        
        # Respuesta exitosa
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Gracias. Te contactaremos en menos de 24h.',
                'messageId': response['MessageId']
            })
        }
        
    except ClientError as e:
        print(f"Error de AWS SES: {e}")
        error_code = e.response['Error']['Code']
        
        if error_code == 'MessageRejected':
            error_msg = 'Email rechazado. Verifica que el email de origen esté verificado en SES.'
        elif error_code == 'MailFromDomainNotVerified':
            error_msg = 'Dominio de origen no verificado en SES.'
        else:
            error_msg = f'Error de SES: {error_code}'
            
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            'body': json.dumps({
                'success': False,
                'message': 'Error al enviar el mensaje. Inténtalo de nuevo.',
                'error': error_msg
            })
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            'body': json.dumps({
                'success': False,
                'message': 'Formato JSON inválido'
            })
        }
        
    except Exception as e:
        print(f"Error inesperado: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST'
            },
            'body': json.dumps({
                'success': False,
                'message': 'Error interno del servidor'
            })
        }
