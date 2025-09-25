const sections = [
  {
    title: '1. Responsable del Tratamiento',
    content: [
      'Titular: Rubén Casado Domínguez ("el Responsable").',
      'NIF: Disponible previa solicitud.',
      'Correo electrónico de contacto: rcasadodev@gmail.com.',
      'Teléfono: +34 664 656 038.',
      'Dirección: Madrid, España.'
    ]
  },
  {
    title: '2. Datos Personales Tratados',
    content: [
      'Información identificativa y de contacto (nombre, apellidos, correo electrónico, número de teléfono).',
      'Datos profesionales asociados a la empresa u organización desde la que se realiza la consulta.',
      'Información técnica derivada del uso del sitio web (dirección IP, identificadores de cookies o logs de acceso). No se crean perfiles comerciales automatizados.'
    ]
  },
  {
    title: '3. Finalidades y Base Jurídica',
    content: [
      'Gestionar consultas y solicitudes de servicios realizadas a través de los formularios del sitio web. Base jurídica: consentimiento del interesado (art. 6.1.a GDPR).',
      'Mantener comunicaciones comerciales relacionadas con los servicios profesionales ofrecidos cuando el usuario haya facilitado su contacto. Base jurídica: interés legítimo en dar respuesta a solicitudes (art. 6.1.f GDPR).',
      'Cumplir obligaciones legales aplicables en materia fiscal, contable y de protección de datos. Base jurídica: cumplimiento de obligaciones legales (art. 6.1.c GDPR).'
    ]
  },
  {
    title: '4. Conservación de los Datos',
    content: [
      'Los datos se conservarán durante el tiempo necesario para atender la consulta o prestación del servicio solicitado y, posteriormente, durante los plazos legales de prescripción que resulten de aplicación.',
      'Los datos de carácter comercial se mantendrán mientras exista una relación profesional activa o el interesado no solicite su supresión.'
    ]
  },
  {
    title: '5. Comunicación y Transferencias',
    content: [
      'No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la ejecución de un servicio solicitado por el interesado.',
      'En caso de subcontratar proveedores tecnológicos situados fuera del Espacio Económico Europeo, se garantizará que ofrezcan un nivel de protección equiparable mediante cláusulas contractuales tipo, normas corporativas vinculantes u otras garantías reconocidas por el GDPR.'
    ]
  },
  {
    title: '6. Derechos de las Personas Interesadas',
    content: [
      'Acceso, rectificación, supresión y oposición.',
      'Limitación del tratamiento y portabilidad de los datos en los supuestos previstos en el GDPR.',
      'Revocación del consentimiento otorgado sin carácter retroactivo.',
      'Para ejercer estos derechos, se puede dirigir una comunicación escrita a rcasadodev@gmail.com adjuntando un documento acreditativo de identidad.'
    ]
  },
  {
    title: '7. Seguridad de la Información',
    content: [
      'El Responsable aplica medidas técnicas y organizativas razonables para proteger los datos personales frente a destrucción accidental o ilícita, pérdida, alteración, divulgación o acceso no autorizado.',
      'Estas medidas se revisan periódicamente atendiendo al estado de la técnica, la naturaleza de los datos y los riesgos identificados.'
    ]
  },
  {
    title: '8. Cookies y Tecnologías Similares',
    content: [
      'Este sitio puede utilizar cookies técnicas necesarias para el funcionamiento y la seguridad de la web.',
      'Cualquier uso de cookies analíticas o de marketing se realizará previa obtención del consentimiento informado y detallando su finalidad específica en una política de cookies independiente.'
    ]
  },
  {
    title: '9. Reclamaciones ante la Autoridad de Control',
    content: [
      'Las personas interesadas pueden presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideran que el tratamiento de datos personales infringe la normativa vigente.',
      'Antes de recurrir a la autoridad de control, se recomienda contactar con el Responsable para buscar una solución amistosa.'
    ]
  },
  {
    title: '10. Cambios en la Política de Privacidad',
    content: [
      'La presente política podrá actualizarse para adaptarse a novedades legislativas o a cambios en los tratamientos realizados.',
      'Cuando la actualización implique cambios sustanciales, se notificará a los usuarios por los canales de contacto disponibles.'
    ]
  }
];

interface PrivacyPolicyProps {
  lastUpdatedLabel?: string;
}

export default function PrivacyPolicy({ lastUpdatedLabel }: PrivacyPolicyProps) {
  const lastUpdated = lastUpdatedLabel ?? new Date().toLocaleDateString('es-ES');

  return (
    <section className="bg-dark-950 text-gray-300 pt-32 pb-16">
      <div className="container-custom px-4 space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Política de Privacidad</h1>
          <p className="text-gray-400 max-w-3xl">
            Esta política informa sobre cómo se recogen, utilizan y protegen los datos personales de los usuarios que
            contactan o contratan los servicios de Rubén Casado Domínguez, de conformidad con el Reglamento (UE) 2016/679
            (GDPR) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
        </header>

        <div>
          <a href="/" className="btn-secondary inline-flex items-center gap-2">
            Volver a la página principal
          </a>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <ul className="space-y-2 list-disc list-inside text-gray-400">
                {section.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="text-gray-500 text-sm">
          Última actualización: {lastUpdated}
        </footer>
      </div>
    </section>
  );
}

export { sections as privacyPolicySections };
