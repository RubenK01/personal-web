# 📧 Configuración de Lambda para Notificaciones por Email

## 🚀 Despliegue rápido

### 1. Crear función Lambda

```bash
# Crear el ZIP
cd lambda
zip -r contact-form-handler.zip contact-form-handler.py

# Subir a AWS Lambda via CLI
aws lambda create-function \
  --function-name contact-form-handler \
  --runtime python3.9 \
  --role arn:aws:iam::TU-ACCOUNT-ID:role/lambda-execution-role \
  --handler contact-form-handler.lambda_handler \
  --zip-file fileb://contact-form-handler.zip \
  --timeout 30 \
  --memory-size 128
```

### 2. Variables de entorno (obligatorias)

En la consola de Lambda, configurar:

```
RECIPIENT_EMAIL = rcasadodev@gmail.com
SENDER_EMAIL = noreply@rcasado.cloud  # Debe estar verificado en SES
AWS_REGION = eu-west-1
```

### 3. Configurar Amazon SES

#### Verificar emails en SES:
```bash
# Verificar email de destino
aws ses verify-email-identity --email-address rcasadodev@gmail.com

# Verificar email de origen
aws ses verify-email-identity --email-address noreply@rcasado.cloud
```

#### Si estás en modo Sandbox:
- Solo puedes enviar a emails verificados
- Para producción, solicita salir del sandbox en la consola SES

### 4. Permisos IAM

Crear rol con estas políticas:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

### 5. Conectar con API Gateway

#### Crear API REST:
1. **API Gateway** → **Create API** → **REST API**
2. **Actions** → **Create Resource** → `/contact`
3. **Actions** → **Create Method** → **POST**
4. **Integration type**: Lambda Function
5. **Lambda Function**: `contact-form-handler`
6. **Enable CORS**: Sí

#### Configurar CORS:
```json
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token
Access-Control-Allow-Methods: POST,OPTIONS
```

### 6. Obtener URL del endpoint

Después del deploy en API Gateway:
```
https://tu-api-id.execute-api.eu-west-1.amazonaws.com/prod/contact
```

## 🔧 Integración con el frontend

### ✅ Formularios ya conectados

Los formularios en `Hero.tsx` y `Contact.tsx` ya están configurados para usar tu Lambda.

### Configurar URL del endpoint

Después de crear tu API Gateway, actualiza la variable de entorno:

```bash
# En tu archivo .env.local o .env.development
NEXT_PUBLIC_LAMBDA_ENDPOINT=https://TU-API-GATEWAY-URL.execute-api.eu-west-1.amazonaws.com/prod/contact
```

### Ejemplo de configuración:

```bash
# .env.local
NEXT_PUBLIC_LAMBDA_ENDPOINT=https://abc123def.execute-api.eu-west-1.amazonaws.com/prod/contact
```

## 📧 Ejemplo de email que recibirás

**Asunto:** 🔔 Nueva consulta desde tu web - Juan Pérez

**Contenido HTML formateado con:**
- 📋 Datos del contacto organizados
- 💬 Mensaje del cliente
- ⚡ Call-to-action para responder rápido
- 🎨 Diseño profesional con tus colores corporativos

## 🐛 Solución de problemas

### Error "MessageRejected":
- Verificar que `SENDER_EMAIL` esté verificado en SES

### Error "MailFromDomainNotVerified":
- Verificar dominio en SES o usar email verificado

### CORS errors:
- Verificar configuración CORS en API Gateway
- Asegurar que está habilitado para POST y OPTIONS

### Testing local:
```python
# Probar la función directamente
python3 -c "
import contact_form_handler
event = {
  'body': '{\"name\":\"Test\",\"email\":\"test@test.com\",\"company\":\"Test Co\",\"message\":\"Test message\"}'
}
print(contact_form_handler.lambda_handler(event, {}))
"
```

### 🧪 Testing en AWS Lambda Console

He creado un archivo `test-events.json` con eventos de prueba. En la consola de Lambda:

1. **Ir a tu función** → **Test**
2. **Create new test event**
3. **Usar uno de estos eventos**:

#### Evento básico (copia y pega):
```json
{
  "body": "{\"name\":\"Juan Pérez\",\"email\":\"juan.perez@example.com\",\"company\":\"Tech Solutions SL\",\"message\":\"Hola, estoy interesado en sus servicios de migración a AWS.\"}",
  "headers": {
    "Content-Type": "application/json",
    "Origin": "https://rcasado.cloud"
  },
  "httpMethod": "POST",
  "path": "/contact"
}
```

#### Evento alternativo (si el anterior falla):
```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com", 
  "company": "Tech Solutions SL",
  "message": "Hola, estoy interesado en sus servicios de migración a AWS."
}
```

#### Evento desde Hero (formulario principal):
```json
{
  "body": "{\"name\":\"María García\",\"email\":\"maria.garcia@startup.com\",\"company\":\"No especificado\",\"message\":\"Solicitud de auditoría gratuita desde el formulario principal.\"}",
  "headers": {
    "Content-Type": "application/json"
  },
  "httpMethod": "POST",
  "path": "/contact"
}
```

#### Evento para probar validación (email inválido):
```json
{
  "body": "{\"name\":\"Test User\",\"email\":\"email-sin-dominio\",\"company\":\"Test Company\",\"message\":\"Test con email inválido\"}",
  "headers": {
    "Content-Type": "application/json"
  },
  "httpMethod": "POST",
  "path": "/contact"
}
```

Ver archivo `test-events.json` para más casos de prueba.

## 💡 Características incluidas

✅ **Validación de datos** de entrada  
✅ **Formateo HTML** profesional del email  
✅ **Configuración CORS** para frontend  
✅ **Manejo de errores** completo  
✅ **Reply-To** automático al email del cliente  
✅ **Logging** para debugging  
✅ **Response** JSON estructurado  
✅ **Diseño responsive** del email  

## 🔄 Próximos pasos opcionales

1. **Slack notifications**: Integrar webhook de Slack
2. **Database storage**: Guardar consultas en DynamoDB
3. **Auto-responder**: Email automático al cliente
4. **Analytics**: Tracking de conversiones
5. **Rate limiting**: Prevenir spam
