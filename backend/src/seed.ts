import 'dotenv/config'
import config from './payload.config'
import { getPayload } from 'payload'

export const practiceAreasData = [
  {
    title: 'Derecho Corporativo',
    slug: 'derecho-corporativo',
    icon: 'Briefcase',
    order: 1,
    shortDescription: 'Asesoría jurídica integral en la estructuración, operación y reorganización de sociedades mercantiles, civiles y asociaciones.',
    fullDescription: 'Ofrecemos asesoría jurídica integral en la estructuración, operación y reorganización de personas morales, incluyendo sociedades mercantiles, civiles y asociaciones. Nuestra práctica abarca desde la constitución de empresas hasta procesos complejos de transformación societaria, como fusiones, escisiones y liquidaciones. Participamos activamente en la elaboración y actualización de estatutos sociales, celebración de asambleas, funcionamiento de órganos de gobierno corporativo y cumplimiento regulatorio. Aseguramos que cada operación se alinee con los marcos legales mercantil, fiscal y financiero aplicables, protegiendo la estabilidad jurídica y patrimonial de nuestros clientes.'
  },
  {
    title: 'Derecho Laboral',
    slug: 'derecho-laboral',
    icon: 'Users',
    order: 2,
    shortDescription: 'Servicios jurídicos especializados en derecho laboral individual y colectivo, combinando la prevención con la solución contenciosa.',
    fullDescription: 'Ofrecemos servicios jurídicos especializados en derecho laboral individual y colectivo, con un enfoque integral que combina la prevención con la solución contenciosa. Nuestra asesoría cubre la elaboración de contratos laborales, el cumplimiento de obligaciones patronales, la atención a inspecciones de la Secretaría del Trabajo y Previsión Social (STPS), así como la representación en litigios laborales ante tribunales locales y federales. Diseñamos políticas internas, esquemas de compensación y estrategias para una gestión laboral eficiente y conforme a derecho.'
  },
  {
    title: 'Seguridad Social',
    slug: 'seguridad-social',
    icon: 'ShieldCheck',
    order: 3,
    shortDescription: 'Acompañamiento legal en el cumplimiento de obligaciones en materia de seguridad social y tributaria (IMSS, Infonavit).',
    fullDescription: 'Brindamos acompañamiento legal en el cumplimiento de obligaciones en materia de seguridad social y tributaria, con énfasis en IMSS, Infonavit y demás autoridades competentes. Elaboramos opiniones legales, auditorías preventivas y estrategias de defensa para prevenir y atender actos de fiscalización y determinación de créditos fiscales. Asesoramos en la correcta clasificación de empresas y trabajadores, asegurando el estricto cumplimiento normativo y minimizando contingencias patronales.'
  },
  {
    title: 'Derecho Mercantil',
    slug: 'derecho-mercantil',
    icon: 'Scale',
    order: 4,
    shortDescription: 'Estructuración, redacción, revisión y negociación de contratos comerciales y operaciones mercantiles.',
    fullDescription: 'Contamos con amplia experiencia en derecho mercantil, brindando asesoría estratégica en la estructuración, redacción, revisión y negociación de contratos comerciales de diversa naturaleza, tales como compraventas, arrendamientos, franquicias, asociaciones y fideicomisos. Acompañamos a nuestros clientes en operaciones de financiamiento, garantías, cobranza judicial y extrajudicial, así como en la prevención y resolución de disputas comerciales.'
  },
  {
    title: 'Derecho Civil',
    slug: 'derecho-civil',
    icon: 'FileText',
    order: 5,
    shortDescription: 'Consultoría contractual y patrimonial, y representación en procedimientos litigiosos civiles y patrimoniales.',
    fullDescription: 'Prestamos servicios especializados en derecho civil, abarcando desde la consultoría contractual y patrimonial hasta la representación en procedimientos litigiosos complejos. Atendemos asuntos relativos a contratos civiles, arrendamientos, responsabilidad civil, prescripción, sucesiones y particiones hereditarias, con un enfoque integral que combina prevención, gestión de riesgos y solución efectiva de conflictos ante tribunales locales y federales.'
  },
  {
    title: 'Derecho Familiar',
    slug: 'derecho-familiar',
    icon: 'HeartHandshake',
    order: 6,
    shortDescription: 'Asesoría sensible y profesional en divorcios, custodia, patria potestad, pensiones alimenticias y mediación.',
    fullDescription: 'Proporcionamos asesoría legal sensible y profesional en materia de derecho familiar, con especial atención en procesos de divorcio, guarda y custodia, patria potestad, pensiones alimenticias y régimen de visitas. Nuestro enfoque equilibra el conocimiento técnico con la empatía necesaria para abordar situaciones familiares complejas, priorizando siempre el bienestar de los menores y promoviendo alternativas de solución pacífica y mediación.'
  },
  {
    title: 'Derecho Fiscal',
    slug: 'derecho-fiscal',
    icon: 'Landmark',
    order: 7,
    shortDescription: 'Planeación fiscal nacional, cumplimiento tributario, defensa contra actos de autoridad y prevención de contingencias.',
    fullDescription: 'Asesoramos a personas físicas y morales en planeación fiscal nacional e internacional, cumplimiento de obligaciones tributarias, defensa contra actos de autoridad y prevención de contingencias. Evaluamos estructuras corporativas y operaciones comerciales desde una perspectiva fiscal estratégica, interponiendo recursos administrativos y juicios de nulidad para la salvaguarda de los derechos de los contribuyentes.'
  },
  {
    title: 'Propiedad Intelectual',
    slug: 'propiedad-intelectual',
    icon: 'Award',
    order: 8,
    shortDescription: 'Protección, registro y gestión de marcas, patentes, derechos de autor y secretos industriales.',
    fullDescription: 'Asistimos a nuestros clientes en la protección, registro y gestión de sus activos intangibles, tales como marcas, avisos comerciales, patentes, derechos de autor y secretos industriales ante el IMPI e INDAUTOR. Ofrecemos asesoría legal especializada en branding, licenciamiento, franquicias y defensa litigiosa ante el uso indebido o infracción de derechos.'
  },
  {
    title: 'Derecho Penal',
    slug: 'derecho-penal',
    icon: 'ShieldAlert',
    order: 9,
    shortDescription: 'Representación y asesoría en el sistema penal acusatorio, defensa y coadyuvancia ministerial.',
    fullDescription: 'Ofrecemos representación y asesoría en procedimientos penales, desde la presentación de denuncias o querellas hasta el seguimiento de investigaciones y litigio penal adversarial. Acompañamos a nuestros clientes ante el Ministerio Público y órganos jurisdiccionales, actuando como defensores o coadyuvantes en la integración del caso, con estricto apego al debido proceso y los derechos humanos.'
  },
  {
    title: 'Servicios Ambientales',
    slug: 'servicios-ambientales',
    icon: 'Leaf',
    order: 10,
    shortDescription: 'Cumplimiento de la normatividad ambiental vigente, permisos, licencias e impacto ambiental.',
    fullDescription: 'Ofrecemos asesoría especializada en el cumplimiento de la normatividad ambiental vigente a nivel municipal, estatal y federal. Incluye la obtención de permisos y licencias, manifestación de impacto ambiental, auditorías de cumplimiento y manejo de residuos peligrosos. Adecuamos operaciones ante dependencias como SEMARNAT, PROFEPA y comisiones estatales.'
  },
  {
    title: 'Derecho Migratorio',
    slug: 'derecho-migratorio',
    icon: 'Globe',
    order: 11,
    shortDescription: 'Regularización migratoria, residencias temporales y permanentes, visas de trabajo y trámites ante el INM.',
    fullDescription: 'Proporcionamos asesoría integral en materia migratoria para empresas y personas físicas, incluyendo procesos de regularización, obtención de residencias temporales y permanentes, permisos de trabajo y constancias de inscripción de empleador ante el Instituto Nacional de Migración (INM), garantizando certidumbre y legal estancia en el país.'
  }
]

export const teamData = [
  {
    name: 'David Alejandro Saucedo Reyes',
    slug: 'david-alejandro-saucedo-reyes',
    role: 'Socio Fundador / Especialista en Derecho Laboral y Mediador Certificado',
    email: 'dsaucedo@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/davidpie.jpg',
    photoSitting: '/images/davidsentado2.jpg',
    order: 1,
    bio: 'Cuenta con más de 15 años de experiencia especializada en Derecho Laboral, particularmente en la asesoría y representación patronal. Actualmente colabora con empresas de diversos giros comerciales, brindando una asesoría jurídica preventiva, estratégica y personalizada, diseñada para responder eficazmente a las necesidades específicas de cada cliente. Su acompañamiento inicia desde la constitución de la empresa, ofreciendo soluciones jurídicas integrales que permiten cumplir con las obligaciones legales vigentes y prevenir posibles conflictos. Ha representado exitosamente a empleadores en conflictos obrero-patronales ante Juntas Locales y Especiales de Conciliación en todo el país, así como en Tribunales Laborales. Asimismo, participa activamente en negociaciones colectivas con sindicatos locales. Especialista en negociación y resolución de conflictos, cuenta con certificación como mediador. Es titular y conductor del podcast "Entre Abogados Te Veas".',
    education: 'Licenciatura en Derecho por la Universidad Autónoma de Coahuila (1999–2004). Maestría en Derecho con Acentuación en Derecho Laboral. Certificación Oficial como Mediador y Conciliador Privado.'
  },
  {
    name: 'Jorge Alberto Saucedo Reyes',
    slug: 'jorge-alberto-saucedo-reyes',
    role: 'Socio / Especialista en Derecho Civil y Comercial',
    email: 'jsaucedo@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/jorgepie.jpg',
    photoSitting: '/images/jorgesentado.jpg',
    order: 2,
    bio: 'Especialista en Derecho Civil y Comercial, con una sólida trayectoria en la asesoría de relaciones contractuales entre personas físicas, morales e instituciones de crédito. Su práctica profesional se enfoca en el análisis jurídico de los efectos y alcances derivados de actos jurídicos y comerciales, brindando soluciones estratégicas y legales a sus clientes para proteger su patrimonio y operaciones de negocio.',
    education: 'Licenciatura en Derecho por la Facultad de Jurisprudencia de la Universidad Autónoma de Coahuila. Diplomados en Derecho Contractual, Corporativo y Litigio Civil.'
  },
  {
    name: 'Armando Cortés De Hoyos',
    slug: 'armando-cortes-de-hoyos',
    role: 'Abogado Litigante / Especialista en Litigio Laboral',
    email: 'acortes@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/armandopie.jpg',
    photoSitting: '/images/armandosentado.jpg',
    order: 3,
    bio: 'Ha participado activamente en procedimientos judiciales en materia laboral, representando con eficacia los intereses de los clientes de la consultoría desde el inicio del juicio hasta su resolución definitiva. Su experiencia incluye tanto la obtención de soluciones amistosas por la vía extrajudicial como la consecución de resoluciones judiciales favorables.',
    education: 'Licenciatura en Derecho por la Universidad Autónoma de Coahuila. Capacitación especializada en el Nuevo Sistema de Justicia Laboral.'
  },
  {
    name: 'Diana Lizeth Guevara Tovar',
    slug: 'diana-lizeth-guevara-tovar',
    role: 'Asesora Legal / Laboral, Civil, Familiar y Mercantil',
    email: 'dguevara@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/dianapie.jpg',
    photoSitting: '/images/dianasentada.jpg',
    order: 4,
    bio: 'Se desempeña como asesora legal en distintas ramas del Derecho, con especial enfoque en Derecho Laboral, así como en materia Civil, Familiar y Mercantil. Su formación y experiencia le permiten aplicar de forma precisa las normas jurídicas a casos concretos, brindando una atención integral que va desde la prevención de conflictos hasta el litigio estratégico.',
    education: 'Licenciatura en Derecho por la Facultad de Jurisprudencia de la UAdeC. Cursos de actualización en Derecho Procesal Familiar y Laboral.'
  },
  {
    name: 'Hannia Carolina Gutierrez Avalos',
    slug: 'hannia-carolina-gutierrez-avalos',
    role: 'Abogada Consultora / Derecho Laboral y Administrativo',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/carolinapie.jpg',
    photoSitting: '/images/carolinasentada.jpg',
    order: 5,
    bio: 'Cuenta con formación en Derecho y estudios complementarios en Contabilidad, lo que le permite ofrecer un enfoque integral tanto en el análisis jurídico como en el manejo de aspectos administrativos y financieros. Actualmente colabora en Saucedo Consultoría Jurídica y Mediación, donde brinda atención legal en materia laboral, participando en el seguimiento de expedientes y diligencias.',
    education: 'Licenciatura en Derecho y estudios en Administración Contable.'
  },
  {
    name: 'Alondra Yeverino Medina',
    slug: 'alondra-yeverino-medina',
    role: 'Abogada Litigante / Civil, Mercantil y Familiar',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/Alondrapie.jpg',
    photoSitting: '/images/AlondraSentada.jpg',
    order: 6,
    bio: 'Se desempeña como litigante en Saucedo Consultoría Jurídica y Mediación, colaborando activamente en asuntos de derecho civil, mercantil y familiar. Su participación comprende desde la atención y acompañamiento al cliente, hasta la gestión de expedientes judiciales, la elaboración de escritos legales y el desahogo de diligencias procesales.',
    education: 'Licenciatura en Derecho por la Universidad Autónoma de Coahuila.'
  },
  {
    name: 'Wendy Saharai Valerio Caballero',
    slug: 'wendy-saharai-valerio-caballero',
    role: 'Especialista en Derecho Fiscal y Tributario',
    email: 'wvalerio@saucedolegal.com',
    phone: '844-343-8333',
    photoStanding: '/images/wendypie.jpg',
    photoSitting: '/images/wendysentada.jpg',
    order: 7,
    bio: 'Se especializa en Derecho Fiscal y Tributario, brindando asesoría integral a contribuyentes de diversos sectores económicos, con el objetivo de optimizar el cumplimiento de sus obligaciones fiscales mediante un enfoque técnico, preventivo y estratégico. Asesora en defensa fiscal y atención a requerimientos de autoridades hacendarias.',
    education: 'Licenciatura en Derecho con especialidad en Impuestos y Derecho Tributario.'
  },
  {
    name: 'Omar Alejandro Gaytán Arellano',
    slug: 'omar-alejandro-gaytan-arellano',
    role: 'Especialista en Sistema Acusatorio Penal y Litigio Estratégico',
    email: 'ogaytan@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/omar.jpg',
    photoSitting: '/images/omar2.jpg',
    order: 8,
    bio: 'Cuenta con amplia experiencia en el sistema acusatorio penal, acreditando el curso como agente del Ministerio Público por parte de la Fiscalía General del Estado, así como diplomado en perspectiva de género. Se desempeñó como agente ministerial adscrito a unidades de investigación especializada.',
    education: 'Licenciatura en Derecho por la UAdeC. Acreditación oficial del Instituto de Formación Ministerial e Investigación Pericial.'
  },
  {
    name: 'Verónica Sarahí López Santos',
    slug: 'veronica-sarahi-lopez-santos',
    role: 'Especialista en Derecho Laboral y Justicia Administrativa',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStanding: '/images/1-8.jpg',
    photoSitting: '/images/lucerosentada.jpg',
    order: 9,
    bio: 'Cuenta con una sólida trayectoria en el ámbito del Derecho Laboral y la justicia administrativa, con especialización en relaciones jurídico-laborales. Su experiencia abarca la gestión integral de procesos ante la Junta Federal de Conciliación y Arbitraje, donde se desempeñó como Actuaria Judicial.',
    education: 'Licenciatura en Derecho. Especialización en Actuaría Judicial y Procedimientos Laborales Federales.'
  }
]

export const galleryData = [
  // 1. Nuestras oficinas (6 imágenes)
  { title: 'Nuestras Oficinas 1', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-1.jpeg', order: 1 },
  { title: 'Nuestras Oficinas 2', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-2.jpeg', order: 2 },
  { title: 'Nuestras Oficinas 3', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-3.jpeg', order: 3 },
  { title: 'Nuestras Oficinas 4', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-4.jpeg', order: 4 },
  { title: 'Nuestras Oficinas 5', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-5.jpeg', order: 5 },
  { title: 'Nuestras Oficinas 6', category: 'oficinas', imageUrl: '/images/Nuestras%20oficinas/2-6%20(1).jpeg', order: 6 },

  // 2. Eventos oficiales (11 imágenes)
  { title: 'Evento Oficial 1', category: 'eventos', imageUrl: '/images/eventos%20oficiales/1-1-1.jpg', order: 7 },
  { title: 'Evento Oficial 2', category: 'eventos', imageUrl: '/images/eventos%20oficiales/1-2-1.jpg', order: 8 },
  { title: 'Evento Oficial 3', category: 'eventos', imageUrl: '/images/eventos%20oficiales/1-3-1.jpg', order: 9 },
  { title: 'Evento Oficial 4', category: 'eventos', imageUrl: '/images/eventos%20oficiales/1-4-1.jpg', order: 10 },
  { title: 'Evento Oficial 5', category: 'eventos', imageUrl: '/images/eventos%20oficiales/508641485_9634071560055288_6430459357176653029_n.jpg', order: 11 },
  { title: 'Evento Oficial 6', category: 'eventos', imageUrl: '/images/eventos%20oficiales/509310722_9633717773424000_5546179704554478425_n.jpg', order: 12 },
  { title: 'Evento Oficial 7', category: 'eventos', imageUrl: '/images/eventos%20oficiales/509324347_9633717753424002_1609627147575003313_n.jpg', order: 13 },
  { title: 'Evento Oficial 8', category: 'eventos', imageUrl: '/images/eventos%20oficiales/509365289_9633717863423991_1560782681165843174_n.jpg', order: 14 },
  { title: 'Evento Oficial 9', category: 'eventos', imageUrl: '/images/eventos%20oficiales/66061322_2060230034106183_4009958244104536064_n.jpg', order: 15 },
  { title: 'Evento Oficial 10', category: 'eventos', imageUrl: '/images/eventos%20oficiales/66479876_2060229984106188_6945773720422055936_n.jpg', order: 16 },
  { title: 'Evento Oficial 11', category: 'eventos', imageUrl: '/images/eventos%20oficiales/66485789_2060229890772864_8119591044082827264_n.jpg', order: 17 },

  // 3. Inauguración (10 imágenes)
  { title: 'Inauguración 1', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-1.jpeg', order: 18 },
  { title: 'Inauguración 2', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-10.jpeg', order: 19 },
  { title: 'Inauguración 3', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-11.jpeg', order: 20 },
  { title: 'Inauguración 4', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-12.jpeg', order: 21 },
  { title: 'Inauguración 5', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-14.jpeg', order: 22 },
  { title: 'Inauguración 6', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-2.jpeg', order: 23 },
  { title: 'Inauguración 7', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-3.jpeg', order: 24 },
  { title: 'Inauguración 8', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-4.jpeg', order: 25 },
  { title: 'Inauguración 9', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-6.jpeg', order: 26 },
  { title: 'Inauguración 10', category: 'inauguracion', imageUrl: '/images/Inauguracion/1-9.jpeg', order: 27 },

  // 4. Colaboraciones con medios (9 imágenes)
  { title: 'Colaboración con Medios 1', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/240585265_3976017605860740_7341849463442626109_n.png', order: 28 },
  { title: 'Colaboración con Medios 2', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/480360336_1173638101430686_4487645384430734232_n.jpg', order: 29 },
  { title: 'Colaboración con Medios 3', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/486487235_1206405578153938_853276644240443357_n.jpg', order: 30 },
  { title: 'Colaboración con Medios 4', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/487491882_1212384147556081_3427002432988155442_n.jpg', order: 31 },
  { title: 'Colaboración con Medios 5', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/487507153_1215332700594559_5686153498844386979_n.jpg', order: 32 },
  { title: 'Colaboración con Medios 6', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/488544018_1215438400583989_3669570917638592127_n.jpg', order: 33 },
  { title: 'Colaboración con Medios 7', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/488566342_1215332317261264_3652051470501578984_n.jpg', order: 34 },
  { title: 'Colaboración con Medios 8', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/489303752_1215332657261230_1529551969940926763_n.jpg', order: 35 },
  { title: 'Colaboración con Medios 9', category: 'medios', imageUrl: '/images/Colaboraciones%20con%20medios/508400044_9634580256671085_7380949416613192721_n.jpg', order: 36 },

  // 5. Socios comerciales (14 imágenes)
  { title: 'Socio Comercial 1', category: 'socios', imageUrl: '/images/socios%20comerciales/156729235_3486521271477045_1435881262370325062_n.jpg', order: 37 },
  { title: 'Socio Comercial 2', category: 'socios', imageUrl: '/images/socios%20comerciales/156870943_3486520981477074_6283258480484495670_n.jpg', order: 38 },
  { title: 'Socio Comercial 3', category: 'socios', imageUrl: '/images/socios%20comerciales/156870943_3486521038143735_7401611940460657344_n.jpg', order: 39 },
  { title: 'Socio Comercial 4', category: 'socios', imageUrl: '/images/socios%20comerciales/157004965_3486521394810366_2409848040791160859_n.jpg', order: 40 },
  { title: 'Socio Comercial 5', category: 'socios', imageUrl: '/images/socios%20comerciales/157362701_3486521361477036_3325157133637381188_n.jpg', order: 41 },
  { title: 'Socio Comercial 6', category: 'socios', imageUrl: '/images/socios%20comerciales/3-1.jpg', order: 42 },
  { title: 'Socio Comercial 7', category: 'socios', imageUrl: '/images/socios%20comerciales/3-2.jpg', order: 43 },
  { title: 'Socio Comercial 8', category: 'socios', imageUrl: '/images/socios%20comerciales/3-3.jpg', order: 44 },
  { title: 'Socio Comercial 9', category: 'socios', imageUrl: '/images/socios%20comerciales/468901603_8405687136227076_5727659838252179777_n.jpg', order: 45 },
  { title: 'Socio Comercial 10', category: 'socios', imageUrl: '/images/socios%20comerciales/468960155_8405687339560389_2863415771117953172_n.jpg', order: 46 },
  { title: 'Socio Comercial 11', category: 'socios', imageUrl: '/images/socios%20comerciales/469015013_8405687122893744_8275501755114020010_n.jpg', order: 47 },
  { title: 'Socio Comercial 12', category: 'socios', imageUrl: '/images/socios%20comerciales/469107567_8405687142893742_2122373736575286829_n.jpg', order: 48 },
  { title: 'Socio Comercial 13', category: 'socios', imageUrl: '/images/socios%20comerciales/469141844_8405687096227080_6708140130591556935_n.jpg', order: 49 },
  { title: 'Socio Comercial 14', category: 'socios', imageUrl: '/images/socios%20comerciales/98185531_2691047174357796_897738492321202176_n.jpg', order: 50 },

  // 6. Equipo (5 imágenes)
  { title: 'Equipo Saucedo Legal 1', category: 'equipo', imageUrl: '/images/Equipo/1-15.jpeg', order: 51 },
  { title: 'Equipo Saucedo Legal 2', category: 'equipo', imageUrl: '/images/Equipo/1-16.jpeg', order: 52 },
  { title: 'Equipo Saucedo Legal 3', category: 'equipo', imageUrl: '/images/Equipo/1-17.jpeg', order: 53 },
  { title: 'Equipo Saucedo Legal 4', category: 'equipo', imageUrl: '/images/Equipo/1-18.jpeg', order: 54 },
  { title: 'Equipo Saucedo Legal 5', category: 'equipo', imageUrl: '/images/Equipo/1-6.jpg', order: 55 },
]

export const videosData = [
  {
    title: 'RECORRIDO VIRTUAL',
    category: 'instalaciones',
    videoUrl: '/videos/recorrido-virtual.mp4',
    featured: true,
    description: 'Recorrido virtual por las modernas instalaciones de Saucedo Legal.',
    order: 1
  },
  {
    title: 'QUIENES SOMOS',
    category: 'nosotros',
    videoUrl: '/videos/quienes-somos.mp4',
    featured: false,
    description: 'Conoce nuestra historia y el equipo detrás de Saucedo Consultoría Jurídica.',
    order: 2
  },
  {
    title: 'INAUGURACIÓN',
    category: 'eventos',
    videoUrl: '/videos/saucedo-inauguracion.mp4',
    featured: false,
    description: 'Inauguración de nuestras instalaciones corporativas en Saltillo.',
    order: 3
  },
  {
    title: 'NUESTROS SERVICIOS',
    category: 'servicios',
    videoUrl: '/videos/abogados-saltillo-saucedo-legal.webm',
    featured: false,
    description: 'Servicios jurídicos especializados y asesoría legal corporativa integral.',
    order: 4
  }
]

export async function seed() {
  console.log('--- Starting Payload CMS Seed ---')
  const payload = await getPayload({ config })

  // 1. Check or create Admin User
  const existingUsers = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@saucedolegal.com',
      },
    },
  })

  if (existingUsers.totalDocs === 0) {
    console.log('Creating initial admin user: admin@saucedolegal.com')
    await payload.create({
      collection: 'users',
      data: {
        name: 'Administrador Saucedo',
        email: 'admin@saucedolegal.com',
        password: 'Saucedo2026!',
        role: 'admin',
      },
    })
  } else {
    console.log('Admin user already exists.')
  }

  // 2. Seed Practice Areas
  console.log('Seeding practice areas...')
  const createdAreaIds: Record<string, string | number> = {}

  for (const area of practiceAreasData) {
    const existing = await payload.find({
      collection: 'area-practica',
      where: {
        slug: {
          equals: area.slug,
        },
      },
    })

    if (existing.totalDocs === 0) {
      const created = await payload.create({
        collection: 'area-practica',
        data: area,
      })
      createdAreaIds[area.slug] = created.id
      console.log(`+ Created area: ${area.title}`)
    } else {
      createdAreaIds[area.slug] = existing.docs[0].id
    }
  }

  // 3. Seed Team
  console.log('Seeding team members...')
  for (const member of teamData) {
    const existing = await payload.find({
      collection: 'equipo',
      where: {
        slug: {
          equals: member.slug,
        },
      },
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'equipo',
        data: member as any,
      })
      console.log(`+ Created team member: ${member.name}`)
    }
  }

  // 4. Seed Gallery
  console.log('Seeding gallery...')
  for (const item of galleryData) {
    const existing = await payload.find({
      collection: 'galeria',
      where: {
        imageUrl: {
          equals: item.imageUrl,
        },
      },
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'galeria',
        data: item as any,
      })
      console.log(`+ Created gallery item: ${item.title}`)
    }
  }

  // 5. Seed Videos
  console.log('Seeding videos...')
  for (const video of videosData) {
    const existing = await payload.find({
      collection: 'videos',
      where: {
        videoUrl: {
          equals: video.videoUrl,
        },
      },
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'videos',
        data: video as any,
      })
      console.log(`+ Created video: ${video.title}`)
    }
  }

  // 6. Seed Portada Global
  console.log('Seeding Portada (Homepage) global...')
  await payload.updateGlobal({
    slug: 'portada',
    locale: 'es',
    data: {
      eyebrow: 'ASESORÍA LEGAL CORPORATIVA',
      title: 'MÁS DE 20 AÑOS DE EXPERIENCIA',
      subtitle: 'CONTRIBUYENDO CON EL ÉXITO DE NUESTROS CLIENTES',
      buttonText: 'CONTACTO',
      buttonLink: '/contacto',
    },
  })

  console.log('--- Payload CMS Seed Finished Successfully! ---')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed Error:', err)
  process.exit(1)
})
