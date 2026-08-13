// Documentos legales públicos de devifly.dev
//
// Fuente única de verdad para /legal/*. El texto vive aquí (no en i18n) porque
// son documentos largos y versionados: cambiar una cláusula debe verse como un
// diff legible, no perdido entre strings de UI.
//
// Cada documento se renderiza con src/views/Legal.vue.
// Si cambias una cláusula, actualiza `updatedEs` / `updatedEn`.

export const legalEntity = {
  legalName: 'Héctor Alejandro Cruz Solís',
  brand: 'Devifly (devifly.dev)',
  rfc: 'CUSH011107NH8',
  regime: 'Persona física · Régimen Simplificado de Confianza (RESICO)',
  regimeEn: 'Individual · Simplified Trust Regime (RESICO), Mexico',
  address: 'Prolongación Morelos 189, Valle Dorado, C.P. 53690, Naucalpan de Juárez, Estado de México, México',
  addressEn: 'Prolongación Morelos 189, Valle Dorado, ZIP 53690, Naucalpan de Juárez, State of Mexico, Mexico',
  jurisdiction: 'Estado de México, México',
  email: 'devifly.dev@gmail.com',
}

export const legalDocs = [
  // ==========================================================================
  // 1. TÉRMINOS Y CONDICIONES
  // ==========================================================================
  {
    slug: 'terminos',
    key: 'terms',
    icon: 'file-text',
    titleEs: 'Términos y Condiciones de Servicio',
    titleEn: 'Terms and Conditions of Service',
    summaryEs:
      'Las reglas bajo las que contratamos, construimos y entregamos. Aplican a todo proyecto salvo que un contrato firmado diga otra cosa.',
    summaryEn:
      'The rules under which we contract, build, and deliver. They apply to every project unless a signed agreement says otherwise.',
    updatedEs: 'Última actualización: 12 de agosto de 2026',
    updatedEn: 'Last updated: August 12, 2026',
    sections: [
      {
        titleEs: '1. Quién presta el servicio',
        titleEn: '1. Who provides the service',
        bodyEs: [
          'Los servicios de devifly.dev son prestados por Héctor Alejandro Cruz Solís, persona física con actividad empresarial bajo el Régimen Simplificado de Confianza (RESICO), con RFC CUSH011107NH8 y domicilio en Prolongación Morelos 189, Valle Dorado, C.P. 53690, Naucalpan de Juárez, Estado de México (en adelante, "Devifly", "nosotros").',
          'Al solicitar una cotización, aceptar una propuesta o realizar un pago, aceptas estos Términos. Si contratas a nombre de una empresa, declaras tener facultades para obligarla.',
        ],
        bodyEn: [
          'devifly.dev services are provided by Héctor Alejandro Cruz Solís, an individual with business activity under Mexico\'s Simplified Trust Regime (RESICO), tax ID (RFC) CUSH011107NH8, domiciled at Prolongación Morelos 189, Valle Dorado, ZIP 53690, Naucalpan de Juárez, State of Mexico (hereinafter "Devifly", "we").',
          'By requesting a quote, accepting a proposal, or making a payment, you accept these Terms. If you contract on behalf of a company, you represent that you have authority to bind it.',
        ],
      },
      {
        titleEs: '2. Cómo se contrata un proyecto',
        titleEn: '2. How a project is contracted',
        bodyEs: [
          'Todo proyecto sigue la misma secuencia. Nada se da por entendido de palabra:',
        ],
        bodyEn: ['Every project follows the same sequence. Nothing is agreed by word of mouth alone:'],
        listEs: [
          'Discovery sin costo: entendemos el objetivo, el alcance y las restricciones.',
          'Propuesta escrita: entregables, plan elegido, precio, plazos y supuestos.',
          'Aceptación: confirmas por escrito (correo o WhatsApp es válido) y pagas el anticipo.',
          'Anexo de alcance (SOW): para proyectos a medida se firma un anexo que detalla funcionalidades, criterios de aceptación e hitos.',
          'Ejecución por entregas iterativas, con demo publicada y revisable.',
        ],
        listEn: [
          'Free discovery: we map the goal, the scope, and the constraints.',
          'Written proposal: deliverables, chosen plan, price, timeline, and assumptions.',
          'Acceptance: you confirm in writing (email or WhatsApp counts) and pay the deposit.',
          'Statement of Work (SOW): custom projects add a signed annex detailing features, acceptance criteria, and milestones.',
          'Execution in iterative deliveries, with a live, reviewable demo.',
        ],
      },
      {
        titleEs: '3. Precios, impuestos y forma de pago',
        titleEn: '3. Pricing, taxes, and payment',
        bodyEs: [
          'Los precios publicados en el sitio son de referencia y están expresados en pesos mexicanos (MXN). El precio final es el de la propuesta aceptada y se mantiene fijo durante la vigencia del proyecto, salvo cambios de alcance (cláusula 6).',
          'A los precios se les añade IVA (16%) cuando se requiere factura (CFDI). Los precios en dólares ya incluyen el procesamiento de pago internacional y la facturación en dólares, y se cobran al tipo de cambio del día del pago.',
          'Esquema estándar: 50% de anticipo para iniciar y 50% contra entrega para publicación. En proyectos de más de seis semanas, el pago se divide por hitos. El sitio no se publica en el dominio final hasta que el saldo esté liquidado.',
          'Los pagos se realizan por transferencia SPEI o los medios electrónicos que se indiquen en la propuesta. Cualquier comisión de la pasarela de pago corre por cuenta de quien elige ese medio.',
        ],
        bodyEn: [
          'Prices published on the site are for reference and expressed in Mexican pesos (MXN). The final price is the one in the accepted proposal and stays fixed for the life of the project, except for scope changes (clause 6).',
          'VAT (16%) is added when a Mexican tax invoice (CFDI) is required. USD prices already include international payment processing and USD invoicing, and are charged at the exchange rate on the payment date.',
          'Standard terms: 50% deposit to start, 50% on delivery before publication. Projects longer than six weeks are split into milestones. The site is not published on the final domain until the balance is settled.',
          'Payments are made by SPEI transfer or the electronic methods stated in the proposal. Any payment-gateway fee is borne by whoever chooses that method.',
        ],
      },
      {
        titleEs: '4. Plazos y qué necesitamos de ti',
        titleEn: '4. Timelines and what we need from you',
        bodyEs: [
          'Los plazos publicados (1-2, 2-3 o 3-5 semanas según el plan) se cuentan en días hábiles a partir de que se cumplen dos condiciones: recibimos el anticipo y recibimos el material completo (textos, logos, fotos, accesos).',
          'Necesitamos tu retroalimentación en un máximo de 5 días hábiles por entrega. Si no la recibimos, el plazo se recorre día por día. No es una penalización: es la única forma de sostener una fecha honesta.',
          'Si el proyecto queda detenido por falta de materiales o respuesta durante más de 30 días naturales, entra en pausa conforme a la Política de cancelación y reembolsos.',
        ],
        bodyEn: [
          'Published timelines (1-2, 2-3, or 3-5 weeks depending on plan) count in business days from the moment two conditions are met: we receive the deposit and we receive the complete material (copy, logos, photos, access credentials).',
          'We need your feedback within 5 business days per delivery. If we do not receive it, the timeline shifts day for day. This is not a penalty — it is the only way to hold an honest date.',
          'If the project stalls for lack of materials or response for more than 30 calendar days, it enters paused status under the Cancellation and Refund Policy.',
        ],
      },
      {
        titleEs: '5. Revisiones incluidas',
        titleEn: '5. Included revisions',
        bodyEs: [
          'Cada entrega incluye una ronda de retroalimentación. Los ajustes de diseño, texto y contenido dentro del alcance acordado no tienen costo adicional y no tienen un tope artificial de "3 cambios": trabajamos hasta que la entrega cumpla lo acordado.',
          'Lo que sí se cotiza aparte es el cambio de alcance: funcionalidad nueva, rediseño completo después de aprobar una dirección, o secciones que no estaban en la propuesta.',
        ],
        bodyEn: [
          'Every delivery includes one feedback round. Design, copy, and content adjustments within the agreed scope carry no extra cost and are not capped at an artificial "3 revisions" — we work until the delivery matches what was agreed.',
          'What is quoted separately is a scope change: new functionality, a full redesign after a direction was approved, or sections that were not in the proposal.',
        ],
      },
      {
        titleEs: '6. Cambios de alcance',
        titleEn: '6. Scope changes',
        bodyEs: [
          'Si pides algo fuera del alcance, no lo hacemos en silencio ni te sorprendemos con la factura. Emitimos una Orden de Cambio por escrito con el costo y el impacto en la fecha de entrega. El trabajo adicional inicia solo cuando la apruebas.',
          'Puedes rechazar la orden de cambio: el proyecto continúa con el alcance original, sin penalización.',
        ],
        bodyEn: [
          'If you ask for something outside scope, we neither do it silently nor surprise you on the invoice. We issue a written Change Order stating cost and impact on the delivery date. Additional work starts only once you approve it.',
          'You may reject the change order: the project continues with the original scope, no penalty.',
        ],
      },
      {
        titleEs: '7. Entrega, aceptación y garantía',
        titleEn: '7. Delivery, acceptance, and warranty',
        bodyEs: [
          'Al concluir el proyecto entregamos el sitio publicado, el repositorio, los accesos y la documentación de uso. Dispones de 7 días naturales para revisar y reportar discrepancias contra el alcance acordado. Transcurrido ese plazo sin observaciones, la entrega se considera aceptada.',
          'Garantía de corrección: durante 30 días naturales después de la publicación corregimos sin costo cualquier error, falla o comportamiento que no corresponda a lo especificado. La garantía cubre defectos de nuestro trabajo; no cubre cambios de contenido, funcionalidad nueva, ni fallas causadas por modificaciones hechas por terceros o por el propio cliente.',
          'Los planes Pro y Premium incluyen además soporte post-lanzamiento de 30 y 90 días respectivamente, para dudas de uso y ajustes menores.',
        ],
        bodyEn: [
          'On completion we hand over the published site, the repository, all access credentials, and usage documentation. You have 7 calendar days to review and report discrepancies against the agreed scope. After that period without objections, the delivery is deemed accepted.',
          'Defect warranty: for 30 calendar days after publication we fix, at no cost, any error, failure, or behavior that does not match the specification. The warranty covers defects in our work; it does not cover content changes, new functionality, or failures caused by modifications made by third parties or by the client.',
          'Pro and Premium plans additionally include 30 and 90 days of post-launch support respectively, for usage questions and minor adjustments.',
        ],
      },
      {
        titleEs: '8. Hosting, dominio y renovación',
        titleEn: '8. Hosting, domain, and renewal',
        bodyEs: [
          'Todos los planes incluyen hosting y dominio durante el primer año, sin costo adicional. En el plan Esencial el dominio es un subdominio .devifly.dev; en Pro y Premium se incluye un dominio personalizado (.com / .mx) registrado a tu nombre.',
          'El dominio incluido tiene un tope de $800 MXN anuales, monto que cubre con holgura cualquier dominio estándar .com, .mx, .com.mx o equivalente. Sobre ese tope aplican las siguientes reglas:',
        ],
        bodyEn: [
          'Every plan includes hosting and a domain for the first year at no extra cost. On the Essential plan the domain is a .devifly.dev subdomain; Pro and Premium include a custom domain (.com / .mx) registered in your name.',
          'The included domain is capped at $800 MXN per year, an amount that comfortably covers any standard .com, .mx, .com.mx, or equivalent domain. The following rules apply to that cap:',
        ],
        listEs: [
          'Si el dominio que eliges cuesta más de $800 MXN al año — por ser un dominio premium, de reventa o de mercado secundario, o una extensión de precio elevado — la diferencia corre por tu cuenta. Te la cobramos a precio de registrador, sin margen ni comisión, y siempre te la informamos y la autorizas por escrito antes de registrar nada.',
          'Si ya cuentas con un dominio propio, lo conectamos y configuramos DNS, registros de correo y certificado SSL sin costo adicional. El precio del plan no se reduce ni se bonifica por no usar el dominio incluido: el dominio es un insumo del servicio, no una partida deducible del precio.',
          'La disponibilidad de un dominio depende del registrador y no podemos garantizarla. Si el que quieres está ocupado, te ayudamos a elegir una alternativa sin costo.',
          'A partir del segundo año la renovación cuesta $199 MXN/mes o $1,999 MXN/año, e incluye hosting, certificado SSL y la renovación del dominio hasta $800 MXN anuales. Los dominios cuya renovación exceda ese tope se facturan por separado a costo de registrador.',
          'Te avisamos con al menos 30 días de anticipación antes de cada renovación. La renovación no es automática sin tu confirmación de pago, y la falta de pago puede provocar la suspensión del sitio y, si el dominio expira, su pérdida. No respondemos por dominios perdidos por falta de pago tras haberte notificado.',
        ],
        listEn: [
          'If the domain you choose costs more than $800 MXN per year — because it is a premium, resale, or aftermarket domain, or a high-priced extension — the difference is on you. We charge it at registrar cost, with no markup or commission, and we always inform you and obtain your written approval before registering anything.',
          'If you already own a domain, we connect it and configure DNS, mail records, and the SSL certificate at no extra cost. The plan price is not reduced or credited for not using the included domain: the domain is an input to the service, not a deductible line item.',
          'Domain availability depends on the registrar and cannot be guaranteed. If the one you want is taken, we help you choose an alternative at no cost.',
          'From year two, renewal costs $199 MXN/month or $1,999 MXN/year and includes hosting, SSL certificate, and domain renewal up to $800 MXN per year. Domains renewing above that cap are billed separately at registrar cost.',
          'We notify you at least 30 days before each renewal. Renewal is not automatic without your payment confirmation, and non-payment may suspend the site and, if the domain expires, cause its loss. We are not liable for domains lost to non-payment after we have notified you.',
        ],
        body2Es: [
          'Si decides no renovar, puedes llevarte el sitio a tu propia infraestructura: te entregamos el código, la configuración de despliegue y la guía de migración sin costo. Conservamos una copia de respaldo durante 60 días después del vencimiento y luego la eliminamos.',
        ],
        body2En: [
          'If you choose not to renew, you can take the site to your own infrastructure: we hand over the code, deployment configuration, and a migration guide at no cost. We keep a backup copy for 60 days after expiry, then delete it.',
        ],
      },
      {
        titleEs: '9. Tus obligaciones como cliente',
        titleEn: '9. Your obligations as a client',
        bodyEs: [],
        bodyEn: [],
        listEs: [
          'Entregar información veraz y materiales sobre los que tengas derechos de uso.',
          'Ser titular o contar con licencia de los textos, imágenes, logos, música y tipografías que nos proporciones. Respondes por el contenido que nos entregas.',
          'No usar el sitio para actividades ilícitas, fraudulentas o que infrinjan derechos de terceros.',
          'Resguardar las contraseñas y accesos que te entregamos.',
          'Cubrir los pagos en las fechas acordadas.',
        ],
        listEn: [
          'Provide truthful information and materials you hold usage rights to.',
          'Own or be licensed for the copy, images, logos, music, and fonts you supply. You are responsible for the content you hand us.',
          'Not use the site for unlawful or fraudulent activity, or activity that infringes third-party rights.',
          'Safeguard the passwords and credentials we hand over.',
          'Meet payments on the agreed dates.',
        ],
      },
      {
        titleEs: '10. Propiedad intelectual',
        titleEn: '10. Intellectual property',
        bodyEs: [
          'Al liquidar el proyecto, el código, el diseño y los contenidos producidos para ti son tuyos. Las condiciones exactas, lo que se cede y lo que no, están en nuestra Política de propiedad del código y entregables, que forma parte integral de estos Términos.',
        ],
        bodyEn: [
          'On final payment, the code, design, and content produced for you are yours. The exact terms — what transfers and what does not — are set out in our Code and Deliverables Ownership Policy, which forms an integral part of these Terms.',
        ],
      },
      {
        titleEs: '11. Confidencialidad',
        titleEn: '11. Confidentiality',
        bodyEs: [
          'Tratamos como confidencial toda información no pública que nos compartas: estrategia, precios, bases de datos, credenciales, procesos internos y planes de producto. No la divulgamos ni la usamos para otro fin que ejecutar tu proyecto.',
          'La obligación se mantiene durante el proyecto y por 3 años después de su terminación. Para proyectos sensibles firmamos un NDA formal antes del discovery, sin costo.',
        ],
        bodyEn: [
          'We treat as confidential all non-public information you share: strategy, pricing, databases, credentials, internal processes, and product plans. We neither disclose it nor use it for any purpose other than executing your project.',
          'The obligation holds during the project and for 3 years after termination. For sensitive projects we sign a formal NDA before discovery, at no cost.',
        ],
      },
      {
        titleEs: '12. Limitación de responsabilidad',
        titleEn: '12. Limitation of liability',
        bodyEs: [
          'Respondemos por la calidad y el funcionamiento de lo que construimos, dentro de lo especificado y durante la garantía. No respondemos por: caídas o cambios de política de servicios de terceros (hosting, pasarelas de pago, APIs, redes sociales); pérdidas derivadas de contenido que tú publiques; ni por lucro cesante o daños indirectos.',
          'En cualquier caso, nuestra responsabilidad máxima acumulada se limita al monto total efectivamente pagado por el proyecto en cuestión.',
          'Nada en esta cláusula limita la responsabilidad por dolo o negligencia grave, ni los derechos que te correspondan como consumidor conforme a la Ley Federal de Protección al Consumidor.',
        ],
        bodyEn: [
          'We are responsible for the quality and functioning of what we build, within specification and during the warranty period. We are not responsible for: outages or policy changes at third-party services (hosting, payment gateways, APIs, social networks); losses arising from content you publish; or lost profits and indirect damages.',
          'In any case, our maximum aggregate liability is limited to the total amount actually paid for the project in question.',
          'Nothing in this clause limits liability for willful misconduct or gross negligence, nor any rights you hold as a consumer under Mexico\'s Federal Consumer Protection Law.',
        ],
      },
      {
        titleEs: '13. Fuerza mayor',
        titleEn: '13. Force majeure',
        bodyEs: [
          'Ninguna de las partes es responsable por incumplimientos causados por hechos fuera de su control razonable: desastres naturales, cortes prolongados de energía o internet, actos de autoridad, conflictos sociales o enfermedad grave. El plazo se suspende mientras dura el evento y se reanuda al cesar.',
        ],
        bodyEn: [
          'Neither party is liable for failures caused by events beyond its reasonable control: natural disasters, prolonged power or internet outages, acts of authority, civil unrest, or serious illness. Timelines are suspended while the event lasts and resume once it ends.',
        ],
      },
      {
        titleEs: '14. Terminación',
        titleEn: '14. Termination',
        bodyEs: [
          'Cualquiera de las partes puede terminar el proyecto por escrito. Las consecuencias económicas, los reembolsos y lo que se entrega en cada caso están detallados en la Política de cancelación y reembolsos.',
        ],
        bodyEn: [
          'Either party may terminate the project in writing. The financial consequences, refunds, and what gets handed over in each case are detailed in the Cancellation and Refund Policy.',
        ],
      },
      {
        titleEs: '15. Cambios a estos Términos',
        titleEn: '15. Changes to these Terms',
        bodyEs: [
          'Podemos actualizar estos Términos. La versión aplicable a tu proyecto es la vigente al momento de aceptar la propuesta, y no cambia a mitad del proyecto. Los cambios se publican en esta página con su fecha de actualización.',
        ],
        bodyEn: [
          'We may update these Terms. The version applicable to your project is the one in force when you accepted the proposal, and it does not change mid-project. Changes are published on this page with their update date.',
        ],
      },
      {
        titleEs: '16. Ley aplicable y jurisdicción',
        titleEn: '16. Governing law and jurisdiction',
        bodyEs: [
          'Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes del Estado de México, renunciando a cualquier otro fuero.',
          'Antes de acudir a tribunales nos comprometemos a intentar una solución directa de buena fe durante al menos 15 días naturales. Si contratas como consumidor, conservas el derecho de acudir a la PROFECO.',
        ],
        bodyEn: [
          'These Terms are governed by the laws of the United Mexican States. For any dispute, the parties submit to the competent courts of the State of Mexico, waiving any other venue.',
          'Before going to court we commit to attempting a direct, good-faith resolution for at least 15 calendar days. If you contract as a consumer, you retain the right to file with PROFECO.',
        ],
      },
    ],
  },

  // ==========================================================================
  // 2. AVISO DE PRIVACIDAD
  // ==========================================================================
  {
    slug: 'privacidad',
    key: 'privacy',
    icon: 'shield',
    titleEs: 'Aviso de Privacidad',
    titleEn: 'Privacy Notice',
    summaryEs:
      'Qué datos personales recabamos, para qué los usamos y cómo puedes ejercer tus derechos ARCO. Conforme a la LFPDPPP.',
    summaryEn:
      'What personal data we collect, what we use it for, and how you can exercise your ARCO rights. Compliant with Mexico\'s LFPDPPP.',
    updatedEs: 'Última actualización: 12 de agosto de 2026',
    updatedEn: 'Last updated: August 12, 2026',
    sections: [
      {
        titleEs: '1. Responsable de tus datos',
        titleEn: '1. Data controller',
        bodyEs: [
          'Héctor Alejandro Cruz Solís, con RFC CUSH011107NH8, domicilio en Prolongación Morelos 189, Valle Dorado, C.P. 53690, Naucalpan de Juárez, Estado de México, y correo devifly.dev@gmail.com, es el responsable del tratamiento de tus datos personales, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.',
        ],
        bodyEn: [
          'Héctor Alejandro Cruz Solís, tax ID (RFC) CUSH011107NH8, domiciled at Prolongación Morelos 189, Valle Dorado, ZIP 53690, Naucalpan de Juárez, State of Mexico, email devifly.dev@gmail.com, is the controller responsible for processing your personal data under Mexico\'s Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations.',
        ],
      },
      {
        titleEs: '2. Qué datos recabamos',
        titleEn: '2. What data we collect',
        bodyEs: ['Recabamos únicamente lo necesario para cotizar, ejecutar y facturar un proyecto:'],
        bodyEn: ['We collect only what is necessary to quote, execute, and invoice a project:'],
        listEs: [
          'Identificación y contacto: nombre, correo electrónico, teléfono/WhatsApp, empresa y puesto.',
          'Datos del proyecto: la información que nos compartes sobre tu negocio, productos y objetivos.',
          'Datos fiscales: RFC, razón social, domicilio fiscal y régimen, solo si solicitas factura.',
          'Datos técnicos de navegación: dirección IP aproximada, tipo de dispositivo, navegador, páginas visitadas y origen del tráfico, recabados de forma agregada mediante herramientas de analítica.',
        ],
        listEn: [
          'Identification and contact: name, email, phone/WhatsApp, company, and role.',
          'Project data: the information you share about your business, products, and goals.',
          'Tax data: RFC, legal name, tax address, and regime — only if you request an invoice.',
          'Technical browsing data: approximate IP address, device type, browser, pages visited, and traffic source, collected in aggregate via analytics tools.',
        ],
      },
      {
        titleEs: '3. No recabamos datos sensibles',
        titleEn: '3. We do not collect sensitive data',
        bodyEs: [
          'No solicitamos ni tratamos datos personales sensibles (origen racial o étnico, estado de salud, información genética, creencias religiosas o filosóficas, afiliación sindical, opiniones políticas o preferencia sexual). Si un proyecto llegara a requerir el tratamiento de este tipo de datos, se te informará y se recabará tu consentimiento expreso y por escrito antes de hacerlo.',
        ],
        bodyEn: [
          'We do not request or process sensitive personal data (racial or ethnic origin, health status, genetic information, religious or philosophical beliefs, union membership, political opinions, or sexual preference). If a project were to require processing such data, you will be informed and your express written consent obtained beforehand.',
        ],
      },
      {
        titleEs: '4. Para qué usamos tus datos',
        titleEn: '4. What we use your data for',
        bodyEs: ['Finalidades primarias, necesarias para la relación de servicio:'],
        bodyEn: ['Primary purposes, necessary for the service relationship:'],
        listEs: [
          'Responder tu solicitud de contacto y elaborar una cotización.',
          'Ejecutar, dar seguimiento y entregar el proyecto contratado.',
          'Emitir comprobantes fiscales y cumplir obligaciones contables y legales.',
          'Brindar soporte técnico, garantía y mantenimiento.',
        ],
        listEn: [
          'Respond to your contact request and prepare a quote.',
          'Execute, follow up on, and deliver the contracted project.',
          'Issue tax receipts and comply with accounting and legal obligations.',
          'Provide technical support, warranty, and maintenance.',
        ],
        body2Es: [
          'Finalidades secundarias, que no son necesarias y a las que puedes oponerte en cualquier momento sin que ello afecte tu servicio: enviarte novedades, contenidos o promociones de Devifly, y medir el desempeño del sitio para mejorarlo. Para oponerte basta un correo a devifly.dev@gmail.com con el asunto "Baja de comunicaciones".',
        ],
        body2En: [
          'Secondary purposes, which are not necessary and which you may object to at any time without affecting your service: sending you Devifly news, content, or promotions, and measuring site performance to improve it. To object, email devifly.dev@gmail.com with the subject "Unsubscribe".',
        ],
      },
      {
        titleEs: '5. Con quién compartimos datos',
        titleEn: '5. Who we share data with',
        bodyEs: [
          'No vendemos, rentamos ni comercializamos tus datos personales. Los compartimos únicamente con proveedores que nos permiten prestar el servicio, y solo en la medida necesaria:',
        ],
        bodyEn: [
          'We do not sell, rent, or trade your personal data. We share it only with providers that enable us to deliver the service, and only to the extent necessary:',
        ],
        listEs: [
          'Proveedores de hosting e infraestructura, para alojar y desplegar tu sitio.',
          'Herramientas de analítica web, en forma agregada y seudonimizada.',
          'Plataformas de mensajería y correo, cuando eres tú quien inicia el contacto por ese medio.',
          'Pasarelas de pago, si el proyecto incluye cobros en línea. Nunca almacenamos datos completos de tarjetas.',
          'Autoridades fiscales o judiciales, cuando exista requerimiento fundado y motivado.',
        ],
        listEn: [
          'Hosting and infrastructure providers, to host and deploy your site.',
          'Web analytics tools, in aggregated and pseudonymized form.',
          'Messaging and email platforms, when you are the one initiating contact through them.',
          'Payment gateways, if the project includes online payments. We never store full card data.',
          'Tax or judicial authorities, upon a duly founded and motivated request.',
        ],
        body2Es: [
          'Algunos de estos proveedores operan servidores fuera de México. Estas transferencias se realizan al amparo del artículo 37 de la LFPDPPP, por ser necesarias para el cumplimiento del contrato que tenemos contigo, y bajo acuerdos que obligan al proveedor a proteger tus datos.',
        ],
        body2En: [
          'Some of these providers operate servers outside Mexico. Such transfers are made under article 37 of the LFPDPPP, as they are necessary to perform our contract with you, and under agreements that bind the provider to protect your data.',
        ],
      },
      {
        titleEs: '6. Tus derechos ARCO',
        titleEn: '6. Your ARCO rights',
        bodyEs: [
          'Tienes derecho a Acceder a tus datos, Rectificarlos si son inexactos, Cancelarlos cuando consideres que no se requieren, y Oponerte a su uso para fines específicos. También puedes revocar el consentimiento que nos otorgaste.',
          'Para ejercer cualquiera de estos derechos envía un correo a devifly.dev@gmail.com con el asunto "Derechos ARCO" incluyendo: tu nombre completo y medio de contacto, una identificación oficial que acredite tu identidad, la descripción clara de los datos y del derecho que deseas ejercer, y cualquier documento que sustente tu solicitud.',
          'Responderemos en un plazo máximo de 20 días hábiles con la determinación adoptada y, de ser procedente, la haremos efectiva dentro de los 15 días hábiles siguientes. El ejercicio de estos derechos es gratuito; solo podrán cobrarse los gastos justificados de envío o reproducción.',
          'Si consideras que tu derecho a la protección de datos fue vulnerado, puedes acudir ante la autoridad garante en materia de protección de datos personales.',
        ],
        bodyEn: [
          'You have the right to Access your data, Rectify it if inaccurate, Cancel it when you consider it unnecessary, and Object to its use for specific purposes. You may also revoke the consent you granted us.',
          'To exercise any of these rights, email devifly.dev@gmail.com with the subject "ARCO Rights" including: your full name and contact method, official ID proving your identity, a clear description of the data and the right you wish to exercise, and any supporting documents.',
          'We will respond within a maximum of 20 business days with our determination and, where applicable, make it effective within the following 15 business days. Exercising these rights is free; only justified shipping or reproduction costs may be charged.',
          'If you believe your data protection rights have been violated, you may file a complaint with Mexico\'s competent data protection authority.',
        ],
      },
      {
        titleEs: '7. Cookies y tecnologías de rastreo',
        titleEn: '7. Cookies and tracking technologies',
        bodyEs: [
          'Este sitio utiliza almacenamiento local del navegador para recordar tus preferencias (idioma y tema claro/oscuro) y cookies de analítica para entender de forma agregada cómo se usa el sitio. Estas últimas no te identifican personalmente.',
          'Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Hacerlo no impide el uso del sitio, aunque puede afectar la persistencia de tus preferencias.',
        ],
        bodyEn: [
          'This site uses browser local storage to remember your preferences (language and light/dark theme) and analytics cookies to understand site usage in aggregate. The latter do not identify you personally.',
          'You can block or delete cookies from your browser settings. Doing so does not prevent use of the site, though it may affect the persistence of your preferences.',
        ],
      },
      {
        titleEs: '8. Seguridad y conservación',
        titleEn: '8. Security and retention',
        bodyEs: [
          'Aplicamos medidas administrativas, técnicas y físicas razonables para proteger tus datos: repositorios privados, accesos con autenticación de dos factores, cifrado en tránsito (HTTPS) y principio de mínimo privilegio.',
          'Conservamos tus datos mientras dure la relación de servicio y, después, durante los plazos que exige la legislación fiscal y mercantil mexicana (hasta 5 años para documentación contable). Cumplido ese plazo, los datos se eliminan o se anonimizan.',
        ],
        bodyEn: [
          'We apply reasonable administrative, technical, and physical safeguards: private repositories, two-factor authenticated access, encryption in transit (HTTPS), and least-privilege access.',
          'We retain your data for the duration of the service relationship and thereafter for the periods required by Mexican tax and commercial law (up to 5 years for accounting records). Once that period elapses, data is deleted or anonymized.',
        ],
      },
      {
        titleEs: '9. Cambios a este aviso',
        titleEn: '9. Changes to this notice',
        bodyEs: [
          'Cualquier modificación a este Aviso de Privacidad se publicará en esta misma página, indicando la fecha de la última actualización. Si el cambio es sustancial, te lo notificaremos por correo electrónico.',
        ],
        bodyEn: [
          'Any modification to this Privacy Notice will be published on this same page, indicating the date of the last update. If the change is substantial, we will notify you by email.',
        ],
      },
    ],
  },

  // ==========================================================================
  // 3. POLÍTICA DE CANCELACIÓN Y REEMBOLSOS
  // ==========================================================================
  {
    slug: 'cancelaciones',
    key: 'cancellation',
    icon: 'refresh-cw',
    titleEs: 'Política de Cancelación y Reembolsos',
    titleEn: 'Cancellation and Refund Policy',
    summaryEs:
      'Qué pasa si cancelas a la mitad, cuánto se devuelve y qué te llevas. Sin letra chica y sin depender de la buena fe.',
    summaryEn:
      'What happens if you cancel midway, how much is refunded, and what you take with you. No fine print, no reliance on good faith.',
    updatedEs: 'Última actualización: 12 de agosto de 2026',
    updatedEn: 'Last updated: August 12, 2026',
    sections: [
      {
        titleEs: '1. Principio general',
        titleEn: '1. Guiding principle',
        bodyEs: [
          'Puedes cancelar tu proyecto en cualquier momento. No usamos cláusulas de permanencia ni penalizaciones por salir.',
          'La regla es simple: pagas por el trabajo realizado y te llevas todo lo que ese trabajo produjo. El anticipo es una cuenta a tu favor, no una multa que se pierde.',
        ],
        bodyEn: [
          'You can cancel your project at any time. We use no lock-in clauses and no exit penalties.',
          'The rule is simple: you pay for the work performed and you take everything that work produced. The deposit is a credit in your favor, not a forfeit.',
        ],
      },
      {
        titleEs: '2. Cómo cancelar',
        titleEn: '2. How to cancel',
        bodyEs: [
          'Envía un aviso por escrito a devifly.dev@gmail.com o por WhatsApp al número publicado, indicando el proyecto y la fecha en que deseas detenerlo. La cancelación surte efecto el día que recibimos el aviso.',
          'Dentro de los 5 días hábiles siguientes te entregamos un corte de proyecto: qué hitos se completaron, qué porcentaje de avance representan, el monto liquidado y el saldo a favor o en contra.',
        ],
        bodyEn: [
          'Send written notice to devifly.dev@gmail.com or via WhatsApp to the published number, stating the project and the date you want it stopped. Cancellation takes effect on the day we receive the notice.',
          'Within the following 5 business days we deliver a project statement: which milestones were completed, what percentage of progress they represent, the amount settled, and the balance in your favor or against.',
        ],
      },
      {
        titleEs: '3. Cuánto se reembolsa',
        titleEn: '3. How much is refunded',
        bodyEs: [
          'El reembolso se calcula sobre el avance real, medido por hitos completados y aceptados, no por días transcurridos:',
        ],
        bodyEn: [
          'The refund is calculated on actual progress, measured by completed and accepted milestones, not by elapsed days:',
        ],
        listEs: [
          'Antes de iniciar el discovery: devolución del 100% del anticipo.',
          'Durante el discovery, sin entregables producidos: devolución del 80%. Retenemos el 20% por el tiempo de análisis y planeación ya invertido.',
          'Con el diseño aprobado y desarrollo iniciado: devolución del anticipo menos el porcentaje de avance certificado en el corte de proyecto.',
          'Con el proyecto entregado y aceptado: no aplica reembolso, pero conservas todos los derechos y entregables.',
        ],
        listEn: [
          'Before discovery starts: 100% of the deposit refunded.',
          'During discovery, with no deliverables produced: 80% refunded. We retain 20% for the analysis and planning time already invested.',
          'With design approved and development started: the deposit minus the progress percentage certified in the project statement.',
          'With the project delivered and accepted: no refund applies, but you keep all rights and deliverables.',
        ],
        body2Es: [
          'Si el avance es mayor al anticipo pagado, te facturamos únicamente la diferencia trabajada. Los reembolsos se procesan dentro de los 10 días hábiles siguientes al corte, al mismo medio de pago que usaste.',
        ],
        body2En: [
          'If progress exceeds the deposit paid, we invoice only the worked difference. Refunds are processed within 10 business days of the statement, to the same payment method you used.',
        ],
      },
      {
        titleEs: '4. Qué te entregamos al cancelar',
        titleEn: '4. What we hand over on cancellation',
        bodyEs: [
          'Independientemente del momento en que canceles, y una vez liquidado el trabajo realizado, recibes todo lo producido hasta esa fecha:',
        ],
        bodyEn: [
          'Regardless of when you cancel, and once the work performed is settled, you receive everything produced up to that date:',
        ],
        listEs: [
          'El código fuente en el estado en que se encuentre, en un repositorio transferido a tu cuenta.',
          'Los archivos de diseño y los recursos gráficos producidos para ti.',
          'Los textos, contenidos y estructura de información elaborados.',
          'Las credenciales, dominios y accesos que estén a tu nombre.',
          'Un documento breve del estado del proyecto y qué faltaría para concluirlo, para que otro equipo pueda continuar sin arrancar de cero.',
        ],
        listEn: [
          'The source code in whatever state it is in, in a repository transferred to your account.',
          'Design files and graphic assets produced for you.',
          'The copy, content, and information architecture developed.',
          'Credentials, domains, and access that are in your name.',
          'A short project-status document describing what remains, so another team can continue without starting from zero.',
        ],
        body2Es: [
          'No retenemos entregables como medida de presión. Lo único que condicionamos a la liquidación es la cesión formal de derechos patrimoniales, conforme a la Política de propiedad del código.',
        ],
        body2En: [
          'We do not withhold deliverables as leverage. The only thing conditioned on settlement is the formal assignment of economic rights, per the Code Ownership Policy.',
        ],
      },
      {
        titleEs: '5. La demo de 21 días',
        titleEn: '5. The 21-day demo',
        bodyEs: [
          'La demo de validación de $999 MXN cubre trabajo de producción real y no es reembolsable una vez publicada. A cambio, su monto se acredita íntegramente al precio del proyecto si decides continuar dentro de los 60 días siguientes.',
          'Si decides no continuar, la demo queda publicada durante 21 días para que puedas evaluarla y no adquieres ninguna obligación adicional.',
        ],
        bodyEn: [
          'The $999 MXN validation demo covers real production work and is non-refundable once published. In exchange, its full amount is credited against the project price if you decide to continue within the following 60 days.',
          'If you decide not to continue, the demo stays live for 21 days so you can evaluate it, and you take on no further obligation.',
        ],
      },
      {
        titleEs: '6. Proyectos en pausa',
        titleEn: '6. Paused projects',
        bodyEs: [
          'Si el proyecto se detiene por falta de materiales, accesos o respuesta de tu parte, aplicamos esta escalera antes de cancelar nada:',
        ],
        bodyEn: [
          'If the project stalls for lack of materials, access, or response on your side, we apply this ladder before cancelling anything:',
        ],
        listEs: [
          'Día 15 sin respuesta: recordatorio por correo y WhatsApp.',
          'Día 30: el proyecto entra en pausa formal. Conservamos todo el trabajo y la fecha de entrega se recalcula al reactivarlo.',
          'Día 90: si no hay reactivación, el proyecto se cierra administrativamente. Te entregamos lo producido y liquidamos conforme a la cláusula 3.',
        ],
        listEn: [
          'Day 15 without response: reminder by email and WhatsApp.',
          'Day 30: the project enters formal pause. We keep all work and the delivery date is recalculated on reactivation.',
          'Day 90: with no reactivation, the project is administratively closed. We hand over what was produced and settle per clause 3.',
        ],
        body2Es: [
          'Reactivar un proyecto en pausa dentro de los primeros 90 días no tiene costo. Después de ese plazo puede requerir un ajuste de precio si cambiaron las condiciones técnicas o de mercado.',
        ],
        body2En: [
          'Reactivating a paused project within the first 90 days is free. After that, it may require a price adjustment if technical or market conditions changed.',
        ],
      },
      {
        titleEs: '7. Suscripciones: hosting y mantenimiento',
        titleEn: '7. Subscriptions: hosting and maintenance',
        bodyEs: [
          'Los planes de hosting y mantenimiento son mensuales y sin permanencia mínima. Puedes cancelarlos avisando con 30 días naturales de anticipación.',
          'El mes en curso ya iniciado no se reembolsa, pero el servicio se mantiene activo hasta el final del periodo pagado. Los planes anuales cancelados a mitad se reembolsan de forma proporcional por los meses completos no consumidos.',
          'Al cancelar el hosting te entregamos el código, la configuración de despliegue y una guía de migración, sin costo. Mantenemos un respaldo durante 60 días y después lo eliminamos de forma segura.',
        ],
        bodyEn: [
          'Hosting and maintenance plans are monthly with no minimum term. You can cancel with 30 calendar days\' notice.',
          'The current month already started is not refunded, but service stays active through the end of the paid period. Annual plans cancelled midway are refunded pro rata for full unused months.',
          'On hosting cancellation we hand over the code, deployment configuration, and a migration guide, at no cost. We keep a backup for 60 days and then securely delete it.',
        ],
      },
      {
        titleEs: '8. Cancelación de nuestra parte',
        titleEn: '8. Cancellation on our side',
        bodyEs: [
          'Excepcionalmente podemos terminar un proyecto si: el pago acumula más de 30 días de atraso; se nos solicita construir algo ilícito, fraudulento o que infrinja derechos de terceros; o si existe trato abusivo hacia el equipo.',
          'En los dos últimos supuestos, y salvo la falta de pago, devolvemos el saldo no devengado y entregamos todo lo producido. Nunca dejamos a un cliente sin acceso a su propio proyecto.',
        ],
        bodyEn: [
          'Exceptionally, we may terminate a project if: payment is more than 30 days overdue; we are asked to build something unlawful, fraudulent, or infringing third-party rights; or there is abusive treatment toward the team.',
          'In the latter two cases, and except for non-payment, we refund the unearned balance and hand over everything produced. We never leave a client without access to their own project.',
        ],
      },
      {
        titleEs: '9. Falta de pago',
        titleEn: '9. Non-payment',
        bodyEs: [
          'Si un pago acumula 15 días de atraso, pausamos el desarrollo y te lo notificamos. A los 30 días podemos suspender el servicio de hosting, previo aviso de 5 días hábiles para que puedas descargar tu información.',
          'La suspensión no elimina tu derecho sobre los entregables ya pagados, y se reactiva de inmediato al regularizar el pago.',
        ],
        bodyEn: [
          'If a payment is 15 days overdue, we pause development and notify you. At 30 days we may suspend hosting, with 5 business days\' prior notice so you can download your information.',
          'Suspension does not remove your rights over already-paid deliverables, and service is reinstated immediately once payment is regularized.',
        ],
      },
    ],
  },

  // ==========================================================================
  // 4. PROPIEDAD DEL CÓDIGO Y ENTREGABLES
  // ==========================================================================
  {
    slug: 'propiedad-del-codigo',
    key: 'ownership',
    icon: 'code',
    titleEs: 'Propiedad del Código y Entregables',
    titleEn: 'Code and Deliverables Ownership',
    summaryEs:
      'Al liquidar tu proyecto, el código es tuyo: repositorio, dominio, accesos y documentación. Aquí está exactamente qué se cede y qué no.',
    summaryEn:
      'On final payment, the code is yours: repository, domain, credentials, and documentation. Here is exactly what transfers and what does not.',
    updatedEs: 'Última actualización: 12 de agosto de 2026',
    updatedEn: 'Last updated: August 12, 2026',
    sections: [
      {
        titleEs: '1. El principio',
        titleEn: '1. The principle',
        bodyEs: [
          'Al liquidar el proyecto, el código, el diseño y los contenidos que produjimos para ti pasan a ser tuyos. Te transferimos el repositorio, el dominio y todos los accesos.',
          'No usamos licencias que te aten a nosotros, no dejamos código ofuscado y no nos quedamos con la llave de tu negocio. Si mañana quieres cambiar de proveedor, puedes hacerlo sin pedirnos permiso ni pagar un rescate.',
        ],
        bodyEn: [
          'On final payment, the code, design, and content we produced for you become yours. We transfer the repository, the domain, and every access credential.',
          'We use no licensing that ties you to us, we leave no obfuscated code, and we never hold the keys to your business. If tomorrow you want to switch providers, you can — without asking our permission or paying a ransom.',
        ],
      },
      {
        titleEs: '2. Qué se cede exactamente',
        titleEn: '2. What exactly transfers',
        bodyEs: [
          'Una vez cubierto el pago total, te cedemos de forma exclusiva, definitiva y sin límite territorial ni temporal los derechos patrimoniales sobre:',
        ],
        bodyEn: [
          'Once full payment is covered, we assign to you — exclusively, permanently, and with no territorial or time limit — the economic rights over:',
        ],
        listEs: [
          'El código fuente escrito específicamente para tu proyecto.',
          'El diseño de interfaz, la maquetación y los recursos gráficos creados a la medida.',
          'Los textos y la arquitectura de contenidos que redactamos para ti.',
          'La configuración de despliegue, esquemas de base de datos y documentación técnica del proyecto.',
        ],
        listEn: [
          'The source code written specifically for your project.',
          'The interface design, layout, and custom-created graphic assets.',
          'The copy and content architecture we wrote for you.',
          'Deployment configuration, database schemas, and the project\'s technical documentation.',
        ],
        body2Es: [
          'La cesión se formaliza en el contrato de servicios y, si lo necesitas para tu contabilidad o para una due diligence, emitimos un convenio de cesión de derechos patrimoniales por separado, sin costo.',
        ],
        body2En: [
          'The assignment is formalized in the services agreement and, if you need it for accounting or due diligence, we issue a separate assignment-of-rights instrument at no cost.',
        ],
      },
      {
        titleEs: '3. Qué NO se cede',
        titleEn: '3. What does NOT transfer',
        bodyEs: [
          'Ser transparentes aquí evita conflictos después. No forman parte de la cesión:',
        ],
        bodyEn: [
          'Being transparent here prevents conflict later. The following are not part of the assignment:',
        ],
        listEs: [
          'Nuestro conocimiento, metodología y experiencia general. Aprender de un proyecto no es propiedad de nadie.',
          'Los componentes, librerías internas y plantillas base preexistentes de Devifly. Sobre estos recibes una licencia perpetua, mundial, irrevocable y libre de regalías para usarlos, modificarlos y sublicenciarlos como parte de tu proyecto. En la práctica puedes hacer lo que quieras con tu sitio; lo que no puedes es revender nuestra librería base como producto independiente.',
          'El software de terceros y las dependencias de código abierto, que conservan sus propias licencias (MIT, Apache, etc.) y cuyos términos te transmitimos íntegros.',
          'Los servicios de terceros bajo suscripción (hosting, APIs, fuentes tipográficas o imágenes con licencia), que deberás contratar o transferir a tu nombre.',
        ],
        listEn: [
          'Our know-how, methodology, and general experience. Learning from a project is nobody\'s property.',
          'Devifly\'s pre-existing components, internal libraries, and base templates. Over these you receive a perpetual, worldwide, irrevocable, royalty-free license to use, modify, and sublicense them as part of your project. In practice you can do whatever you want with your site; what you cannot do is resell our base library as a standalone product.',
          'Third-party software and open-source dependencies, which keep their own licenses (MIT, Apache, etc.) and whose terms we pass through to you in full.',
          'Third-party subscription services (hosting, APIs, licensed fonts or images), which you must contract or transfer into your own name.',
        ],
      },
      {
        titleEs: '4. Cómo se hace la entrega',
        titleEn: '4. How the handover works',
        bodyEs: [
          'La transferencia no es un correo con un archivo .zip. Al cierre del proyecto ejecutamos una entrega formal que incluye:',
        ],
        bodyEn: [
          'The transfer is not an email with a .zip file. At project close we run a formal handover that includes:',
        ],
        listEs: [
          'Transferencia de la propiedad del repositorio Git a tu cuenta u organización, con todo el historial de commits.',
          'Transferencia del dominio y del control de los registros DNS.',
          'Entrega de credenciales, variables de entorno y accesos a los servicios utilizados.',
          'Documentación de instalación, despliegue y operación, suficiente para que otro equipo continúe.',
          'Acta de entrega firmada por ambas partes, que deja constancia de la fecha y del inventario de lo entregado.',
        ],
        listEn: [
          'Transfer of Git repository ownership to your account or organization, with the full commit history.',
          'Transfer of the domain and control of DNS records.',
          'Delivery of credentials, environment variables, and access to the services used.',
          'Installation, deployment, and operations documentation, sufficient for another team to continue.',
          'A handover record signed by both parties, evidencing the date and the inventory of what was delivered.',
        ],
      },
      {
        titleEs: '5. Antes de la liquidación',
        titleEn: '5. Before final payment',
        bodyEs: [
          'Mientras el proyecto no esté liquidado, conservamos la titularidad del código y te otorgamos una licencia temporal de uso para revisarlo y evaluarlo. Es la contrapartida razonable de un trabajo aún no pagado.',
          'Esto no significa que el trabajo esté secuestrado: la demo es pública y revisable en todo momento, y si cancelas, aplican las reglas de la Política de cancelación, que sí te entregan lo producido contra la liquidación del avance.',
        ],
        bodyEn: [
          'Until the project is settled, we retain ownership of the code and grant you a temporary usage license to review and evaluate it. That is the reasonable counterpart to work not yet paid for.',
          'This does not mean the work is held hostage: the demo is public and reviewable at all times, and if you cancel, the Cancellation Policy applies — it does hand over what was produced against settlement of the progress.',
        ],
      },
      {
        titleEs: '6. Tus marcas y contenidos',
        titleEn: '6. Your brands and content',
        bodyEs: [
          'Todo lo que nos entregas (logotipos, marcas, fotografías, textos, bases de datos y datos de tus clientes) es y sigue siendo tuyo. Lo usamos únicamente para ejecutar tu proyecto y dejamos de usarlo al concluirlo.',
        ],
        bodyEn: [
          'Everything you hand us (logos, trademarks, photographs, copy, databases, and your customers\' data) is and remains yours. We use it solely to execute your project and stop using it once it concludes.',
        ],
      },
      {
        titleEs: '7. Portafolio y referencias',
        titleEn: '7. Portfolio and references',
        bodyEs: [
          'Salvo que nos indiques lo contrario, nos reservamos el derecho de mostrar el proyecto en nuestro portafolio, redes y materiales comerciales: capturas, nombre del cliente y resultados públicos.',
          'Este derecho es renunciable. Basta con que lo pidas por escrito o que firmemos un NDA, y el proyecto no aparece en ningún lado. Nunca publicamos datos de tus clientes, métricas internas ni información confidencial, con o sin NDA.',
        ],
        bodyEn: [
          'Unless you tell us otherwise, we reserve the right to show the project in our portfolio, social channels, and sales materials: screenshots, client name, and public results.',
          'This right is waivable. Just ask in writing or sign an NDA with us, and the project appears nowhere. We never publish your customers\' data, internal metrics, or confidential information — with or without an NDA.',
        ],
      },
      {
        titleEs: '8. Respaldos y custodia',
        titleEn: '8. Backups and custody',
        bodyEs: [
          'Mientras prestamos servicio de hosting mantenemos respaldos periódicos de tu sitio. Al terminar la relación conservamos una copia durante 60 días naturales por si necesitas recuperar algo, y transcurrido ese plazo la eliminamos de forma segura.',
          'Puedes solicitar la eliminación inmediata en cualquier momento escribiendo a devifly.dev@gmail.com.',
        ],
        bodyEn: [
          'While we provide hosting we keep periodic backups of your site. When the relationship ends we keep a copy for 60 calendar days in case you need to recover something, and after that period we securely delete it.',
          'You can request immediate deletion at any time by writing to devifly.dev@gmail.com.',
        ],
      },
    ],
  },
]

export const legalDocBySlug = Object.fromEntries(legalDocs.map((doc) => [doc.slug, doc]))
