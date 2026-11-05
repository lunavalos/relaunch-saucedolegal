import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    team: string;
    practiceAreas: string;
    videos: string;
    gallery: string;
    collaborations: string;
    contact: string;
    scheduleConsultation: string;
  };
  header: {
    phoneText: string;
    emailText: string;
    addressText: string;
    officeHours: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    heroTitle: string;
    tagline: string;
    contactBtn: string;
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat4Number: string;
    stat4Label: string;
  };
  about: {
    badge: string;
    title: string;
    lead: string;
    p1: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    valuesText: string;
    btnTeam: string;
  };
  team: {
    badge: string;
    title: string;
    subtitle: string;
    standingView: string;
    sittingView: string;
    viewBio: string;
    closeModal: string;
    educationTitle: string;
    areasTitle: string;
    contactDirect: string;
    sendEmail: string;
  };
  areas: {
    badge: string;
    title: string;
    subtitle: string;
    moreInfo: string;
    consultThisArea: string;
    otherAreasTitle: string;
    modalClose: string;
  };
  videos: {
    badge: string;
    title: string;
    subtitle: string;
    allVideos: string;
    institutional: string;
    aboutFirm: string;
    podcast: string;
    watchOnYouTube: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    offices: string;
    events: string;
    media: string;
    team: string;
  };
  collaborations: {
    badge: string;
    title: string;
    subtitle: string;
    podcastTitle: string;
    podcastDesc: string;
    tvTitle: string;
    tvDesc: string;
    mediaTitle: string;
    mediaDesc: string;
    listenPodcast: string;
    visitWebsite: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    officeTitle: string;
    officeAddress: string;
    phonesTitle: string;
    emailTitle: string;
    socialTitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    privacyNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    practiceAreas: string;
    contactInfo: string;
    rights: string;
    privacyPolicy: string;
    terms: string;
  };
  common: {
    back: string;
    close: string;
    loading: string;
    notFound: string;
    zoom: string;
    locationSaltillo: string;
    whatsappImmediate: string;
    viewProfile: string;
  };
  teamDetail: {
    eyebrow: string;
    backToTeam: string;
    educationTitle: string;
    areasTitle: string;
    contactTitle: string;
    inquireProfile: string;
    otherMembersEyebrow: string;
    otherMembersTitle: string;
  };
  areaDetail: {
    eyebrow: string;
    backToAreas: string;
    integralService: string;
    methodologyTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    attentionTitle: string;
    attentionQuestion: string;
    attentionDesc: string;
    bookConsultation: string;
    otherAreasEyebrow: string;
    otherAreasTitle: string;
    viewSpecialty: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      team: 'Equipo',
      practiceAreas: 'Áreas de Práctica',
      videos: 'Videos',
      gallery: 'Galería',
      collaborations: 'Colaboraciones',
      contact: 'Contacto',
      scheduleConsultation: 'Agendar Asesoría',
    },
    header: {
      phoneText: '844-343-8333',
      emailText: 'contacto@saucedolegal.mx',
      addressText: 'Saltillo, Coahuila, México',
      officeHours: 'Lun - Vie: 9:00 - 18:00',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'ASESORÍA LEGAL CORPORATIVA',
      heroTitle: 'MÁS DE 20 AÑOS DE EXPERIENCIA',
      tagline: 'CONTRIBUYENDO CON EL ÉXITO DE NUESTROS CLIENTES',
      contactBtn: 'CONTACTO',
      badge: 'Más de 20 años de Experiencia',
      title: 'Asesoría Legal Corporativa y Mediación Estratégica',
      subtitle: 'Contribuyendo con el éxito de nuestros clientes a nivel estatal y en todo México con máxima ética, rigor y certeza jurídica.',
      ctaPrimary: 'Áreas de Práctica',
      ctaSecondary: 'Contáctanos',
      stat1Number: '+20',
      stat1Label: 'Años de Trayectoria',
      stat2Number: '+1,500',
      stat2Label: 'Casos y Asesorías',
      stat3Number: '11',
      stat3Label: 'Especialidades Legales',
      stat4Number: '100%',
      stat4Label: 'Confidencialidad y Ética',
    },
    about: {
      badge: 'Nuestra Firma',
      title: 'SAUCEDO CONSULTORÍA JURÍDICA S.C.',
      lead: 'es una firma líder, con presencia en todo el estado y aliados estratégicos a lo largo del territorio nacional, cuenta con más de 20 años de experiencia satisfaciendo las necesidades de nuestros clientes, nos encontramos en el corazón del distrito financiero y contamos con un equipo de más de 20 expertos listos para ayudar a que sus proyectos tenga éxito en México.',
      p1: '',
      missionTitle: 'MISIÓN',
      missionText: 'En Saucedo Consultoría Jurídica S.C. tenemos propósitos definidos, valores, esfuerzo y dedicación en la prevención, asesoría, consultoría y solución oportuna a los requerimientos del cliente, que procuren su seguridad jurídica, por lo tanto tranquilidad en el desarrollo y crecimiento de su empresa o negocio.',
      visionTitle: 'VISIÓN',
      visionText: 'En Saucedo Consultoría Jurídica S.C. nuestra visión es consolidarnos como la firma legal con mayor prestigio en el estado de Coahuila de Zaragoza para el año 2025, así mismo, el establecer puntos de atención en diversas partes de la República mexicana y el sur de Estados Unidos, con el profesionalismo, ética, experiencia y dedicación siempre a satisfacción de nuestros clientes.',
      valuesTitle: 'Valores Corporativos',
      valuesText: 'Ética inquebrantable, prevención legal estratégica, excelencia técnica, confidencialidad absoluta y lealtad con los objetivos de cada cliente.',
      btnTeam: 'CONOCE AL EQUIPO',
    },
    team: {
      badge: 'Nuestros Profesionales',
      title: 'EQUIPO DE TRABAJO',
      subtitle: 'Abogados especialistas y mediadores dedicados a la protección de sus intereses legales.',
      standingView: 'De pie',
      sittingView: 'Sentado',
      viewBio: 'Ver Semblanza',
      closeModal: 'Cerrar',
      educationTitle: 'Formación Académica',
      areasTitle: 'Áreas de Práctica',
      contactDirect: 'Contacto Directo',
      sendEmail: 'Enviar Correo',
    },
    areas: {
      badge: 'Nuestros Servicios',
      title: 'Áreas de Práctica',
      subtitle: 'Ofrecemos soluciones jurídicas de alta especialidad que cubren todas las ramas del derecho corporativo y contencioso.',
      moreInfo: 'Conocer más detalles',
      consultThisArea: 'Solicitar Asesoría en esta Área',
      otherAreasTitle: 'Otras Áreas de Especialidad',
      modalClose: 'Cerrar Información',
    },
    videos: {
      badge: 'Multimedia',
      title: 'Videos Institucionales',
      subtitle: 'Conoce nuestras instalaciones de primer nivel, nuestra filosofía de trabajo y nuestras intervenciones jurídicas.',
      allVideos: 'Todos los Videos',
      institutional: 'Recorrido Virtual',
      aboutFirm: 'Quiénes Somos',
      podcast: 'Podcast Entre Abogados',
      watchOnYouTube: 'Ver en YouTube',
    },
    gallery: {
      badge: 'Instalaciones y Eventos',
      title: 'Galería Fotográfica',
      subtitle: 'Nuestros espacios corporativos, salas de mediación y actividades con aliados estratégicos.',
      all: 'Todas',
      offices: 'Nuestras Oficinas',
      events: 'Eventos Oficiales',
      media: 'Colaboraciones con Medios',
      team: 'Nuestro Equipo',
    },
    collaborations: {
      badge: 'Presencia Pública',
      title: 'Colaboraciones y Difusión Legal',
      subtitle: 'Aportando valor al debate jurídico y empresarial en medios de comunicación y plataformas digitales.',
      podcastTitle: 'Podcast “Entre Abogados Te Veas”',
      podcastDesc: 'Un espacio donde el Dr. en Derecho David Alejandro Saucedo conversa con los juristas, especialistas y profesionistas más influyentes, analizando retos legales, gobernanza y el impacto social de las leyes.',
      tvTitle: 'Colaborador en “Zona de Negocios”',
      tvDesc: 'Participación como analista legal invitado en el programa enfocado en análisis financiero y económico junto al reconocido periodista Javier Medina Pasten.',
      mediaTitle: 'Invitado Recurrente en RCG Media y A Tiempo Matutino',
      mediaDesc: 'El Dr. Saucedo colabora de forma continua en emisiones televisivas y digitales abordando reformas legales, normatividad laboral y derechos ciudadanos.',
      listenPodcast: 'Escuchar Episodios',
      visitWebsite: 'Visitar Sitio',
    },
    contact: {
      badge: 'Atención Personalizada',
      title: 'Comunícate con Nosotros',
      subtitle: '¿Tiene preguntas sobre nuestros servicios o requiere asesoría jurídica especializada? Estamos a su disposición.',
      infoTitle: 'Información de Contacto',
      infoDesc: 'Envíenos su mensaje y de inmediato un miembro de nuestro equipo se pondrá en contacto con usted.',
      officeTitle: 'Oficina Central:',
      officeAddress: 'Edificio QX, Blvd. Galerías 200 - Piso 4, Villa Olímpica, C.P. 25240, Saltillo, Coahuila.',
      phonesTitle: 'Teléfonos:',
      emailTitle: 'Correo Electrónico:',
      socialTitle: 'Síguenos en Redes Sociales:',
      formTitle: 'Envíanos un Mensaje',
      formSubtitle: 'Complete el siguiente formulario y responderemos a la brevedad posible.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Su nombre o razón social',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'correo@ejemplo.com',
      phoneLabel: 'Teléfono de Contacto',
      phonePlaceholder: '844 000 0000',
      serviceLabel: '¿En qué tipo de servicio está interesado?',
      serviceSelectDefault: 'Seleccione un área jurídica...',
      messageLabel: 'Detalles del Asunto',
      messagePlaceholder: 'Describa brevemente su consulta o requerimiento legal...',
      submitBtn: 'Enviar Mensaje',
      submitting: 'Enviando información...',
      successMessage: '¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente. Nos comunicaremos con usted a la brevedad.',
      errorMessage: 'Hubo un error al enviar el formulario. Por favor comuníquese directamente al 844-343-8333.',
      privacyNote: 'Nota de confidencialidad: El envío de datos a través de este formulario no establece una relación contractual formal con Saucedo Legal. La información proporcionada es tratada con absoluta reserva y bajo nuestro aviso de privacidad.',
    },
    footer: {
      description: 'Firma legal de consultoría jurídica, asesoría corporativa integral y mediación con más de dos décadas de excelencia profesional en Saltillo, Coahuila y México.',
      quickLinks: 'Navegación Rápida',
      practiceAreas: 'Áreas de Práctica',
      contactInfo: 'Contacto y Ubicación',
      rights: 'Saucedo Consultoría Jurídica S.C. Todos los derechos reservados.',
      privacyPolicy: 'Aviso de Privacidad',
      terms: 'Términos de Servicio',
    },
    common: {
      back: 'Volver',
      close: 'Cerrar',
      loading: 'Cargando...',
      notFound: 'No encontrado',
      zoom: 'Ampliar',
      locationSaltillo: 'Saucedo Legal · Saltillo, Coahuila',
      whatsappImmediate: 'WhatsApp Inmediato',
      viewProfile: 'Ver perfil',
    },
    teamDetail: {
      eyebrow: 'MIEMBRO DEL EQUIPO JURÍDICO',
      backToTeam: 'Volver a Nuestro Equipo',
      educationTitle: 'Formación y Trayectoria Académica',
      areasTitle: 'Áreas de Práctica y Especialidad',
      contactTitle: 'Atención y Contacto Directo',
      inquireProfile: 'Consultar este perfil',
      otherMembersEyebrow: 'MIEMBROS DESTACADOS',
      otherMembersTitle: 'Otros Miembros del Equipo',
    },
    areaDetail: {
      eyebrow: 'ÁREA DE PRÁCTICA ESPECIALIZADA',
      backToAreas: 'Volver a Áreas de Práctica',
      integralService: 'Servicio Jurídico Integral',
      methodologyTitle: 'Alcance y Metodología de Nuestro Servicio',
      step1Title: 'Diagnóstico y Prevención',
      step1Desc: 'Evaluamos el estado normativo y operativo para prevenir contingencias antes de que ocurran.',
      step2Title: 'Estrategia a la Medida',
      step2Desc: 'Estructuramos soluciones específicas adaptadas al sector, magnitud y metas de cada cliente.',
      step3Title: 'Defensa y Litigio',
      step3Desc: 'Representación contenciosa con rigor técnico y firmeza ante tribunales locales y federales.',
      attentionTitle: 'Atención Especializada',
      attentionQuestion: '¿Requiere Asesoría en esta Área?',
      attentionDesc: 'Póngase en contacto con nuestro equipo de abogados especialistas para una consulta confidencial y personalizada.',
      bookConsultation: 'Agendar Consulta',
      otherAreasEyebrow: 'SERVICIOS LEGALES COMPLEMENTARIOS',
      otherAreasTitle: 'Otras Áreas de Práctica',
      viewSpecialty: 'Ver especialidad',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      team: 'Team',
      practiceAreas: 'Practice Areas',
      videos: 'Videos',
      gallery: 'Gallery',
      collaborations: 'Collaborations',
      contact: 'Contact',
      scheduleConsultation: 'Book Consultation',
    },
    header: {
      phoneText: '+52 844-343-8333',
      emailText: 'contacto@saucedolegal.mx',
      addressText: 'Saltillo, Coahuila, Mexico',
      officeHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
      language: 'Language',
    },
    hero: {
      eyebrow: 'CORPORATE LEGAL ADVISORY',
      heroTitle: 'OVER 20 YEARS OF EXPERIENCE',
      tagline: "CONTRIBUTING TO OUR CLIENTS' SUCCESS",
      contactBtn: 'CONTACT',
      badge: 'Over 20 Years of Experience',
      title: 'Corporate Legal Advisory & Strategic Mediation',
      subtitle: 'Empowering our clients with legal certainty, high-level corporate counseling, and dispute resolution across Mexico.',
      ctaPrimary: 'Practice Areas',
      ctaSecondary: 'Contact Us',
      stat1Number: '+20',
      stat1Label: 'Years of Experience',
      stat2Number: '+1,500',
      stat2Label: 'Legal Matters Resolved',
      stat3Number: '11',
      stat3Label: 'Practice Specialties',
      stat4Number: '100%',
      stat4Label: 'Ethics & Confidentiality',
    },
    about: {
      badge: 'About Our Law Firm',
      title: 'SAUCEDO CONSULTORÍA JURÍDICA S.C.',
      lead: 'is a leading firm, with presence throughout the state and strategic partners across the country, boasting more than 20 years of experience meeting our clients’ needs. We are located in the heart of the financial district with a team of over 20 experts ready to help your projects succeed in Mexico.',
      p1: '',
      missionTitle: 'MISSION',
      missionText: 'At Saucedo Consultoría Jurídica S.C. we have defined goals, values, effort, and dedication in prevention, advisory, consulting, and timely legal solutions to client requirements, securing legal certainty and peace of mind for the growth of your company or business.',
      visionTitle: 'VISION',
      visionText: 'At Saucedo Consultoría Jurídica S.C. our vision is to establish ourselves as the most prestigious law firm in Coahuila and establish service points throughout Mexico and the southern United States, with professionalism, ethics, experience, and commitment to client satisfaction.',
      valuesTitle: 'Core Values',
      valuesText: 'Uncompromising integrity, strategic prevention, legal craftsmanship, total discretion, and steadfast client loyalty.',
      btnTeam: 'Meet the Team',
    },
    team: {
      badge: 'Legal Experts',
      title: 'Our Legal Team',
      subtitle: 'Experienced attorneys and certified mediators devoted to safeguarding your corporate and personal interests.',
      standingView: 'Standing',
      sittingView: 'Sitting',
      viewBio: 'View Biography',
      closeModal: 'Close',
      educationTitle: 'Education & Credentials',
      areasTitle: 'Practice Specialties',
      contactDirect: 'Direct Contact',
      sendEmail: 'Send Email',
    },
    areas: {
      badge: 'What We Do',
      title: 'Practice Areas',
      subtitle: 'Comprehensive legal services spanning corporate governance, labor relations, dispute litigation, and regulatory compliance.',
      moreInfo: 'Learn More',
      consultThisArea: 'Inquire About This Practice',
      otherAreasTitle: 'Other Legal Specialties',
      modalClose: 'Close Details',
    },
    videos: {
      badge: 'Media & Videos',
      title: 'Featured Videos',
      subtitle: 'Take a virtual tour of our modern headquarters and discover our legal perspective.',
      allVideos: 'All Videos',
      institutional: 'Virtual Tour',
      aboutFirm: 'About Our Firm',
      podcast: 'Legal Podcast',
      watchOnYouTube: 'Watch on YouTube',
    },
    gallery: {
      badge: 'Our Spaces',
      title: 'Photo Gallery',
      subtitle: 'Tour our executive offices, specialized mediation rooms, and corporate milestones.',
      all: 'All',
      offices: 'Corporate Offices',
      events: 'Official Events',
      media: 'Media Collaborations',
      team: 'Legal Team',
    },
    collaborations: {
      badge: 'Public Engagement',
      title: 'Media & Legal Outreach',
      subtitle: 'Sharing legal analysis and business insights across premier radio, digital media, and broadcasting programs.',
      podcastTitle: 'Podcast "Entre Abogados Te Veas"',
      podcastDesc: 'Hosted by Dr. David Alejandro Saucedo, featuring in-depth conversations with prominent jurists, entrepreneurs, and thought leaders.',
      tvTitle: 'Contributor on "Zona de Negocios"',
      tvDesc: 'Weekly legal commentator on national business and financial analysis alongside journalist Javier Medina Pasten.',
      mediaTitle: 'Guest on RCG Media & A Tiempo Matutino',
      mediaDesc: 'Regular expert commentary on labor law reforms, civil rights, and constitutional jurisprudence.',
      listenPodcast: 'Listen to Podcast',
      visitWebsite: 'Visit Website',
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Contact Our Firm',
      subtitle: 'Do you have questions about our corporate or litigation services? Send us a message today.',
      infoTitle: 'Contact Details',
      infoDesc: 'Reach out to our team directly. We are ready to assist your organization.',
      officeTitle: 'Main Office:',
      officeAddress: 'Edificio QX, Blvd. Galerías 200 - 4th Floor, Villa Olímpica, 25240 Saltillo, Coahuila, Mexico.',
      phonesTitle: 'Phones:',
      emailTitle: 'Email Address:',
      socialTitle: 'Follow Us:',
      formTitle: 'Send a Confidential Message',
      formSubtitle: 'Fill out this brief inquiry form and our staff will respond promptly.',
      nameLabel: 'Full Name / Company',
      namePlaceholder: 'Your name or organization',
      emailLabel: 'Email Address',
      emailPlaceholder: 'contact@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (000) 000-0000',
      serviceLabel: 'Service of Interest',
      serviceSelectDefault: 'Select a practice area...',
      messageLabel: 'Brief Description of the Matter',
      messagePlaceholder: 'Please outline your inquiry...',
      submitBtn: 'Send Message',
      submitting: 'Submitting...',
      successMessage: 'Thank you for reaching out! Your message was sent successfully. We will contact you shortly.',
      errorMessage: 'An error occurred while submitting the form. Please call us directly at 844-343-8333.',
      privacyNote: 'Privacy Notice: Submitting this inquiry does not create an attorney-client relationship. All submitted data is treated with strict confidentiality under our privacy standards.',
    },
    footer: {
      description: 'Premier Mexican law firm delivering corporate advisory, labor defense, and dispute mediation with more than 20 years of excellence in Saltillo, Coahuila.',
      quickLinks: 'Quick Links',
      practiceAreas: 'Practice Areas',
      contactInfo: 'Office & Contact',
      rights: 'Saucedo Consultoría Jurídica S.C. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    common: {
      back: 'Go Back',
      close: 'Close',
      loading: 'Loading...',
      notFound: 'Not Found',
      zoom: 'Enlarge',
      locationSaltillo: 'Saucedo Legal · Saltillo, Coahuila',
      whatsappImmediate: 'WhatsApp Direct',
      viewProfile: 'View Profile',
    },
    teamDetail: {
      eyebrow: 'LEGAL TEAM MEMBER',
      backToTeam: 'Back to Our Team',
      educationTitle: 'Education & Credentials',
      areasTitle: 'Practice Areas & Specialties',
      contactTitle: 'Direct Inquiries & Contact',
      inquireProfile: 'Inquire About this Profile',
      otherMembersEyebrow: 'DISTINGUISHED ATTORNEYS',
      otherMembersTitle: 'Other Team Members',
    },
    areaDetail: {
      eyebrow: 'SPECIALIZED PRACTICE AREA',
      backToAreas: 'Back to Practice Areas',
      integralService: 'Comprehensive Legal Advisory',
      methodologyTitle: 'Scope & Methodology of Our Service',
      step1Title: 'Diagnostic & Prevention',
      step1Desc: 'We audit legal and regulatory compliance to prevent liabilities before they occur.',
      step2Title: 'Tailored Strategy',
      step2Desc: 'We structure bespoke legal solutions aligned with each client’s sector and goals.',
      step3Title: 'Defense & Litigation',
      step3Desc: 'Vigorous representation with deep technical rigor before state and federal courts.',
      attentionTitle: 'Dedicated Counseling',
      attentionQuestion: 'Require Legal Counsel in this Practice Area?',
      attentionDesc: 'Contact our specialized team of attorneys for a confidential and personalized consultation.',
      bookConsultation: 'Book Consultation',
      otherAreasEyebrow: 'COMPLEMENTARY LEGAL SERVICES',
      otherAreasTitle: 'Other Practice Areas',
      viewSpecialty: 'Explore Specialty',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      team: '专业团队',
      practiceAreas: '业务领域',
      videos: '企业视频',
      gallery: '图库展示',
      collaborations: '合作与媒体',
      contact: '联系我们',
      scheduleConsultation: '预约法律咨询',
    },
    header: {
      phoneText: '+52 844-343-8333',
      emailText: 'contacto@saucedolegal.mx',
      addressText: '墨西哥萨尔蒂约 (Saltillo, Coahuila)',
      officeHours: '周一至周五: 9:00 - 18:00',
      language: '语言选择',
    },
    hero: {
      eyebrow: '企业法律咨询',
      heroTitle: '二十余年专业经验',
      tagline: '助力客户迈向商业成功',
      contactBtn: '联系我们',
      badge: '超过20年卓越法律经验',
      title: '企业法律咨询与战略调解专家',
      subtitle: '为墨西哥全境的企业和个人提供最权威、高效且具有前瞻性的全方位法律保障。',
      ctaPrimary: '探索业务领域',
      ctaSecondary: '联系我们',
      stat1Number: '20+',
      stat1Label: '年专业积淀',
      stat2Number: '1,500+',
      stat2Label: '成功解决案例',
      stat3Number: '11',
      stat3Label: '核心法律专业',
      stat4Number: '100%',
      stat4Label: '严格职业保密',
    },
    about: {
      badge: '律所简介',
      title: 'Saucedo 法律咨询公司 (S.C.)',
      lead: '科阿韦拉州领军律所，战略合作网络遍布墨西哥全境。',
      p1: '凭借20多年的专业法律服务经验，我们位于萨尔蒂约金融核心区，拥有超过20位跨领域资深律师，竭诚护航您在墨西哥的投资与商业发展。',
      missionTitle: '使命',
      missionText: '恪守崇高职业道德，致力于预防性法律指导与高效争议解决，保障客户法律安全，为企业的长远健康发展提供坚实依托。',
      visionTitle: '愿景',
      visionText: '树立科阿韦拉州最负盛名的法律机构标杆，并在墨西哥主要经贸中心及美国南部拓展业务网络，提供世界水准的卓越服务。',
      valuesTitle: '核心价值观',
      valuesText: '严谨正直、前瞻预防、卓越法学、绝对保密，始终忠于客户的核心利益。',
      btnTeam: '了解团队成员',
    },
    team: {
      badge: '资深律师团队',
      title: '我们的精英团队',
      subtitle: '由经验丰富的诉讼律师、企业顾问和持牌调解员组成的专业团队。',
      standingView: '全身照',
      sittingView: '坐姿照',
      viewBio: '查看完整资历',
      closeModal: '关闭',
      educationTitle: '学术背景与资质',
      areasTitle: '主攻业务领域',
      contactDirect: '直接联系',
      sendEmail: '发送电子邮件',
    },
    areas: {
      badge: '业务体系',
      title: '专业业务领域',
      subtitle: '覆盖公司法、劳动法、诉讼争议、税务筹划及涉外合规的全产业链法律服务。',
      moreInfo: '了解详情',
      consultThisArea: '咨询该领域服务',
      otherAreasTitle: '其他业务板块',
      modalClose: '关闭详情',
    },
    videos: {
      badge: '多媒体中心',
      title: '机构官方视频',
      subtitle: '走进我们的现代化办公大楼与调解中心，了解律所理念与业务专长。',
      allVideos: '全部视频',
      institutional: '全景虚拟导览',
      aboutFirm: '律所宣传片',
      podcast: '法律视点播客',
      watchOnYouTube: '在 YouTube 观看',
    },
    gallery: {
      badge: '环境与风采',
      title: '律所实景图库',
      subtitle: '现代化办公设施、保密调解室以及重大法律交流活动记录。',
      all: '全部',
      offices: '现代办公区',
      events: '官方盛典',
      media: '媒体合作',
      team: '团队风貌',
    },
    collaborations: {
      badge: '社会影响力',
      title: '媒体合作与学术发声',
      subtitle: '积极参与主流财经与法律节目录制，推动法治与企业合规意识。',
      podcastTitle: '《律师视界》(Entre Abogados Te Veas) 播客',
      podcastDesc: '法学博士 David Alejandro Saucedo 对话知名法律专家与政商领袖，深入探讨行业动态与法治进程。',
      tvTitle: '《商业特区》财经节目常驻法务嘉宾',
      tvDesc: '与知名财经记者 Javier Medina Pasten 深度解析墨西哥本土与宏观经济法律政策。',
      mediaTitle: 'RCG Media 与 早间新闻 特约法务专家',
      mediaDesc: '就墨西哥新劳动法改革、民商事争议及宪法权益提供权威解读。',
      listenPodcast: '收听节目',
      visitWebsite: '访问官方网站',
    },
    contact: {
      badge: '竭诚服务',
      title: '即刻联系我们',
      subtitle: '如需法律咨询或企业常年法务顾问服务，欢迎随时与我们沟通。',
      infoTitle: '联络方式',
      infoDesc: '提交您的需求，我们的专业法律顾问将在第一时间为您提供支持。',
      officeTitle: '办公地址：',
      officeAddress: '墨西哥科阿韦拉州萨尔蒂约市 Blvd. Galerías 200号 QX大厦 4层 (邮编 25240)',
      phonesTitle: '联系电话：',
      emailTitle: '电子邮箱：',
      socialTitle: '关注我们：',
      formTitle: '在线提交法律咨询',
      formSubtitle: '请填写以下信息，我们将尽快与您取得联系。',
      nameLabel: '您的姓名 / 公司名称',
      namePlaceholder: '请输入姓名或企业全称',
      emailLabel: '电子邮箱',
      emailPlaceholder: 'youremail@example.com',
      phoneLabel: '联系电话',
      phonePlaceholder: '+52 或国家区号电话',
      serviceLabel: '所需法律服务领域',
      serviceSelectDefault: '请选择相关法律领域...',
      messageLabel: '咨询内容摘要',
      messagePlaceholder: '请简述您的法律需求或案件背景...',
      submitBtn: '确认提交',
      submitting: '正在提交...',
      successMessage: '提交成功！我们已收到您的咨询信息，将尽快与您联系。',
      errorMessage: '提交失败，请直接致电 +52 844-343-8333 与我们联系。',
      privacyNote: '保密提示：通过本表单提交信息并不直接建立委托代理关系。所有信息均依照墨西哥隐私法严格保密。',
    },
    footer: {
      description: '墨西哥科阿韦拉州20余年卓越历程的顶尖商事法律顾问与诉讼调解综合服务律所。',
      quickLinks: '快捷导航',
      practiceAreas: '核心业务',
      contactInfo: '联络方式',
      rights: 'Saucedo Consultoría Jurídica S.C. 版权所有。',
      privacyPolicy: '隐私保护政策',
      terms: '服务条款',
    },
    common: {
      back: '返回',
      close: '关闭',
      loading: '加载中...',
      notFound: '未找到内容',
      zoom: '放大查看',
      locationSaltillo: 'Saucedo 法律咨询 · 墨西哥萨尔蒂约',
      whatsappImmediate: 'WhatsApp 在线咨询',
      viewProfile: '查看资历',
    },
    teamDetail: {
      eyebrow: '律所专业团队成员',
      backToTeam: '返回团队列表',
      educationTitle: '学术背景与专业资质',
      areasTitle: '主攻业务与执业专长',
      contactTitle: '直接咨询与联络',
      inquireProfile: '预约该律师咨询',
      otherMembersEyebrow: '资深法务专家',
      otherMembersTitle: '其他团队成员',
    },
    areaDetail: {
      eyebrow: '专业业务领域',
      backToAreas: '返回业务领域列表',
      integralService: '一站式全方位法律服务',
      methodologyTitle: '我们的服务范围与方法论',
      step1Title: '合规诊断与风险预防',
      step1Desc: '全面评估企业监管与运营合规状况，在风险发生前予以有效防范。',
      step2Title: '定制化法律战略',
      step2Desc: '根据客户所属行业特征、经营规模及商业目标，量身定制专项方案。',
      step3Title: '严谨辩护与争端诉讼',
      step3Desc: '在地方及联邦法院秉持深厚法学功底，坚定捍卫客户合法权益。',
      attentionTitle: '专属法律咨询',
      attentionQuestion: '需要该领域的专业法律支持？',
      attentionDesc: '欢迎联系我们的专家律师团队，获取高度保密的定制化咨询。',
      bookConsultation: '预约专业咨询',
      otherAreasEyebrow: '相关协同业务板块',
      otherAreasTitle: '其他专业业务领域',
      viewSpecialty: '查看业务详情',
    },
  },
  ko: {
    nav: {
      home: '홈',
      about: '회사 소개',
      team: '법률팀',
      practiceAreas: '업무 분야',
      videos: '영상 센터',
      gallery: '갤러리',
      collaborations: '언론 및 협력',
      contact: '문의하기',
      scheduleConsultation: '상담 예약',
    },
    header: {
      phoneText: '+52 844-343-8333',
      emailText: 'contacto@saucedolegal.mx',
      addressText: '멕시코 살티요 (Saltillo, Coahuila)',
      officeHours: '월 - 금: 09:00 - 18:00',
      language: '언어 변경',
    },
    hero: {
      eyebrow: '기업 법률 자문',
      heroTitle: '20년 이상의 풍부한 경험',
      tagline: '고객의 성공과 함께합니다',
      contactBtn: '문의하기',
      badge: '20년 이상의 풍부한 법률 실무 경험',
      title: '기업 법률 자문 및 전략적 분쟁 조정 전문',
      subtitle: '멕시코 전역의 기업과 고객을 위해 최고의 윤리 의식과 법적 안정성을 바탕으로 최적의 솔루션을 제공합니다.',
      ctaPrimary: '업무 분야 확인',
      ctaSecondary: '상담 문의',
      stat1Number: '20년+',
      stat1Label: '전문 경력',
      stat2Number: '1,500+',
      stat2Label: '성공적 해결 사건',
      stat3Number: '11개',
      stat3Label: '전문 법률 분야',
      stat4Number: '100%',
      stat4Label: '철저한 비밀 유지',
    },
    about: {
      badge: '로펌 소개',
      title: 'Saucedo 법률 컨설팅 (S.C.)',
      lead: '코아우일라 주를 대표하는 선도 로펌이자 멕시코 전역의 전략적 파트너 네트워크를 보유하고 있습니다.',
      p1: '20년 이상의 실무 경험을 바탕으로 살티요 금융 지구 중심에 위치하고 있으며, 20명 이상의 전문 법률진이 멕시코 내 비즈니스 성공을 위한 전방위적 법률 자문을 제공합니다.',
      missionTitle: '사명 (Mission)',
      missionText: '사전 예방적 법률 자문과 신속하고 정확한 분쟁 해결을 통해 고객의 법적 안전을 확보하고, 고객사의 안정적인 성장과 발전을 도모합니다.',
      visionTitle: '비전 (Vision)',
      visionText: '코아우일라 주 최고의 명성을 지닌 로펌으로 확고히 자리매김함과 동시에, 멕시코 전역 및 미국 남부 지역을 아우르는 글로벌 법률 네트워크를 구축합니다.',
      valuesTitle: '핵심 가치',
      valuesText: '확고한 직업 윤리, 전략적 사전 예방, 탁월한 법학 전문성, 철저한 비밀 보장 및 고객에 대한 헌신.',
      btnTeam: '변호사진 소개',
    },
    team: {
      badge: '전문 법률가',
      title: '전문 변호사진',
      subtitle: '고객의 권익과 비즈니스를 지키기 위해 헌신하는 전문 변호사 및 공인 조정관.',
      standingView: '전신 사진',
      sittingView: '착석 사진',
      viewBio: '상세 프로필 보기',
      closeModal: '닫기',
      educationTitle: '학력 및 주요 경력',
      areasTitle: '주요 담당 분야',
      contactDirect: '직통 문의',
      sendEmail: '이메일 문의',
    },
    areas: {
      badge: '서비스 영역',
      title: '전문 업무 분야',
      subtitle: '기업법무, 노무관리, 민형사 소송, 조세 및 환경에 이르기까지 폭넓은 법률 서비스를 제공합니다.',
      moreInfo: '상세 내용 보기',
      consultThisArea: '해당 분야 상담 신청',
      otherAreasTitle: '기타 전문 업무',
      modalClose: '창 닫기',
    },
    videos: {
      badge: '미디어',
      title: '홍보 영상',
      subtitle: '최첨단 본사 사무실 투어와 로펌의 철학 및 방송 활동 영상을 확인해 보세요.',
      allVideos: '전체 영상',
      institutional: '사옥 투어',
      aboutFirm: '로펌 소개 영상',
      podcast: '법률 팟캐스트',
      watchOnYouTube: 'YouTube에서 시청',
    },
    gallery: {
      badge: '갤러리',
      title: '시설 및 주요 활동',
      subtitle: '본사 업무 공간, 분쟁 조정 회의실 및 대외 교류 현장.',
      all: '전체',
      offices: '사옥 및 회의실',
      events: '주요 공식 행사',
      media: '언론 협력 활동',
      team: '임직원',
    },
    collaborations: {
      badge: '사회적 참여',
      title: '미디어 협력 및 법률 기고',
      subtitle: '공신력 있는 방송 및 미디어를 통해 법률 지식을 전하고 사회적 담론을 선도합니다.',
      podcastTitle: '팟캐스트 "변호사들의 대화" (Entre Abogados Te Veas)',
      podcastDesc: '법학박사 David Alejandro Saucedo가 사회 저명 법조인 및 리더들과 함께 주요 법률 이슈와 사회적 파급력을 논의합니다.',
      tvTitle: '비즈니스 프로그램 "Zona de Negocios" 고정 패널',
      tvDesc: '경제 전문 기자 Javier Medina Pasten과 함께 지역 및 멕시코 전역의 금융·상법 이슈를 심도 있게 분석합니다.',
      mediaTitle: 'RCG Media 및 A Tiempo Matutino 전문 패널',
      mediaDesc: '노동법 개정 및 주요 민형사 법률 현안에 대한 정기적인 전문가 해설을 제공합니다.',
      listenPodcast: '팟캐스트 듣기',
      visitWebsite: '공식 웹사이트 방문',
    },
    contact: {
      badge: '맞춤형 상담',
      title: '상담 및 문의',
      subtitle: '법률 자문 또는 사건 의뢰와 관련하여 문의 사항이 있으신가요? 지금 바로 연락해 주십시오.',
      infoTitle: '연락처 안내',
      infoDesc: '메시지를 남겨주시면 담당 변호사가 신속히 답변해 드리겠습니다.',
      officeTitle: '본사 위치:',
      officeAddress: 'Edificio QX, Blvd. Galerías 200 - 4층, Villa Olímpica, C.P. 25240, Saltillo, Coahuila, Mexico.',
      phonesTitle: '대표 전화:',
      emailTitle: '대표 이메일:',
      socialTitle: '공식 SNS 채널:',
      formTitle: '온라인 상담 신청',
      formSubtitle: '아래 양식을 작성해 주시면 검토 후 신속히 회신드리겠습니다.',
      nameLabel: '성함 또는 회사명',
      namePlaceholder: '성함이나 법인명을 입력하세요',
      emailLabel: '이메일 주소',
      emailPlaceholder: 'youremail@example.com',
      phoneLabel: '연락처',
      phonePlaceholder: '+52 또는 국내 전화번호',
      serviceLabel: '관심 법률 서비스',
      serviceSelectDefault: '전문 분야를 선택해 주세요...',
      messageLabel: '상담 내용',
      messagePlaceholder: '법률 상담이 필요하신 내용을 간략히 기재해 주세요...',
      submitBtn: '문의 등록',
      submitting: '전송 중...',
      successMessage: '문의가 성공적으로 접수되었습니다! 빠른 시일 내에 연락드리겠습니다.',
      errorMessage: '전송 중 오류가 발생했습니다. 직통 번호 844-343-8333으로 연락 바랍니다.',
      privacyNote: '개인정보 보호 안내: 본 양식 제출은 정식 수임 계약을 성립시키지 않으며, 제출된 모든 정보는 엄격한 개인정보 처리 방침에 따라 보호됩니다.',
    },
    footer: {
      description: '멕시코 살티요에서 20년 이상 기업 법률 자문 및 소송, 분쟁 조정을 선도해 온 종합 법률 컨설팅 로펌입니다.',
      quickLinks: '바로가기',
      practiceAreas: '주요 업무 분야',
      contactInfo: '위치 및 연락처',
      rights: 'Saucedo Consultoría Jurídica S.C. 모든 권리 보유.',
      privacyPolicy: '개인정보 처리방침',
      terms: '이용 약관',
    },
    common: {
      back: '뒤로가기',
      close: '닫기',
      loading: '로딩 중...',
      notFound: '항목을 찾을 수 없습니다',
      zoom: '확대보기',
      locationSaltillo: 'Saucedo Legal · 살티요, 코아우일라',
      whatsappImmediate: 'WhatsApp 실시간 상담',
      viewProfile: '프로필 보기',
    },
    teamDetail: {
      eyebrow: '전문 변호사 프로필',
      backToTeam: '팀 목록으로 돌아가기',
      educationTitle: '학력 및 주요 이력',
      areasTitle: '주요 전문 업무 분야',
      contactTitle: '직접 문의 및 법률 상담',
      inquireProfile: '해당 변호사 상담 신청',
      otherMembersEyebrow: '분야별 전문 법조인',
      otherMembersTitle: '다른 팀원 보기',
    },
    areaDetail: {
      eyebrow: '전문 법률 서비스',
      backToAreas: '업무 분야 목록으로 돌아가기',
      integralService: '원스톱 종합 법률 자문',
      methodologyTitle: '서비스 범위 및 진행 절차',
      step1Title: '법률 진단 및 사전 예방',
      step1Desc: '규제 및 운영상의 리스크를 사전에 철저히 점검하여 법적 분쟁을 방지합니다.',
      step2Title: '맞춤형 법률 전략 수립',
      step2Desc: '고객의 산업군, 기업 규모 및 핵심 사업 목표에 최적화된 전략을 수립합니다.',
      step3Title: '소송 대리 및 권익 방어',
      step3Desc: '지방 및 연방 법원에서 정밀한 법리 검토를 바탕으로 고객 권익을 강력히 대변합니다.',
      attentionTitle: '전문 변호인 상담',
      attentionQuestion: '해당 업무 분야의 법률 자문이 필요하십니까?',
      attentionDesc: '풍부한 실무 경험을 보유한 전문 변호인단과 비밀 보장 1:1 맞춤 상담을 진행해 보세요.',
      bookConsultation: '상담 예약하기',
      otherAreasEyebrow: '연계 법률 서비스',
      otherAreasTitle: '기타 전문 업무 분야',
      viewSpecialty: '상세 정보 보기',
    },
  },
};
