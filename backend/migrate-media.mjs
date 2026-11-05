import 'dotenv/config';
import config from './src/payload.config.js';
import { getPayload } from 'payload';
import fs from 'fs';
import path from 'path';

const payload = await getPayload({ config });

const mediaCache = new Map();

async function getOrCreateMedia(relativePath, alt = '') {
  if (!relativePath) return null;
  // Clean path
  const filename = path.basename(relativePath);
  if (mediaCache.has(filename)) {
    return mediaCache.get(filename);
  }

  // Look for file on disk
  const possiblePaths = [
    path.join('frontend/public', relativePath.replace(/^\//, '')),
    path.join('frontend/public/images', filename),
    path.join('frontend/public/images/Nuestras oficinas', filename),
    path.join('frontend/public/images/Colaboraciones con medios', filename),
    path.join('frontend/public/images/Inauguracion', filename),
    path.join('frontend/public/images/Socios comerciales', filename),
    path.join('frontend/public/images/Equipo', filename),
  ];

  let filePath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      filePath = p;
      break;
    }
  }

  if (!filePath) {
    console.log(`[Media] File not found on disk: ${relativePath}`);
    return null;
  }

  try {
    // Check if already in DB
    const existing = await payload.find({
      collection: 'media',
      where: {
        filename: { equals: filename },
      },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      mediaCache.set(filename, existing.docs[0].id);
      return existing.docs[0].id;
    }

    const buf = fs.readFileSync(filePath);
    const ext = path.extname(filename).toLowerCase();
    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.webm': 'video/webm',
      '.mp4': 'video/mp4',
    };
    const mime = mimeTypes[ext] || 'image/jpeg';

    const created = await payload.create({
      collection: 'media',
      data: { alt: alt || filename },
      file: {
        data: buf,
        name: filename,
        mimetype: mime,
        size: buf.length,
      },
    });

    mediaCache.set(filename, created.id);
    console.log(`+ Media created: ${filename} (id: ${created.id})`);
    return created.id;
  } catch (err) {
    console.error(`Error creating media for ${filename}:`, err.message);
    return null;
  }
}

console.log('--- Starting Media Migration and Data Linking ---');

// 1. Team Data
const teamMembers = [
  {
    name: 'David Alejandro Saucedo Reyes',
    slug: 'david-alejandro-saucedo-reyes',
    role: 'Socio Director / Especialista en Derecho Corporativo y Fiscal',
    email: 'dsaucedo@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/davidpie.jpg',
    photoSittingPath: '/images/davidsentado.jpg',
    order: 1,
    bio: 'Abogado con más de 20 años de ejercicio profesional, especializado en Derecho Corporativo, Fiscal y Estrategia Legal de Negocios.',
    education: 'Licenciatura en Derecho por la Facultad de Jurisprudencia de la UAdeC. Maestría en Derecho Fiscal.',
  },
  {
    name: 'Jorge Alberto Saucedo Reyes',
    slug: 'jorge-alberto-saucedo-reyes',
    role: 'Socio / Especialista en Derecho Civil y Comercial',
    email: 'jsaucedo@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/jorgepie.jpg',
    photoSittingPath: '/images/jorgesentado.jpg',
    order: 2,
    bio: 'Especialista en Derecho Civil y Comercial, con una sólida trayectoria en la asesoría de relaciones contractuales.',
    education: 'Licenciatura en Derecho por la Facultad de Jurisprudencia de la UAdeC. Diplomados en Derecho Contractual.',
  },
  {
    name: 'Armando Cortés De Hoyos',
    slug: 'armando-cortes-de-hoyos',
    role: 'Socio / Especialista en Litigio y Resolución de Controversias',
    email: 'acortes@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/armandopie.jpg',
    photoSittingPath: '/images/armandosentado.jpg',
    order: 3,
    bio: 'Abogado postulante con más de 18 años de experiencia en litigio civil, mercantil, laboral y de amparo.',
    education: 'Licenciatura en Derecho. Especialidad en Mediación y Medios Alternativos de Solución de Conflictos.',
  },
  {
    name: 'Diana Lizeth Guevara Tovar',
    slug: 'diana-lizeth-guevara-tovar',
    role: 'Especialista en Derecho Mercantil y Cobranza Corporativa',
    email: 'dguevara@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/dianapie.jpg',
    photoSittingPath: '/images/dianasentada.jpg',
    order: 4,
    bio: 'Especialista en litigio civil y mercantil con enfoque en recuperación judicial de créditos.',
    education: 'Licenciatura en Derecho y diplomados en Derecho Procesal Civil y Mercantil.',
  },
  {
    name: 'Hannia Carolina Gutierrez Avalos',
    slug: 'hannia-carolina-gutierrez-avalos',
    role: 'Abogada Consultora / Derecho Laboral y Administrativo',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/carolinapie.jpg',
    photoSittingPath: '/images/carolinasentada.jpg',
    order: 5,
    bio: 'Cuenta con formación en Derecho y estudios complementarios en Contabilidad.',
    education: 'Licenciatura en Derecho y estudios en Administración Contable.',
  },
  {
    name: 'Alondra Yeverino Medina',
    slug: 'alondra-yeverino-medina',
    role: 'Consultora Jurídica / Litigio y Mediación',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/Alondrapie.jpg',
    photoSittingPath: '/images/alondrasentada.jpg',
    order: 6,
    bio: 'Abogada con experiencia en litigio y gestión estratégica de procedimientos legales.',
    education: 'Licenciatura en Derecho por la Universidad Autónoma de Coahuila.',
  },
  {
    name: 'Wendy Saharai Valerio Caballero',
    slug: 'wendy-saharai-valerio-caballero',
    role: 'Consultora en Gestión Legal y Cumplimiento Normativo',
    email: 'wvalerio@saucedolegal.com',
    phone: '844-343-8333',
    photoStandingPath: '/images/wendypie.jpg',
    photoSittingPath: '/images/wendysentada.jpg',
    order: 7,
    bio: 'Especialista en derecho administrativo, auditorías legales y cumplimiento normativo.',
    education: 'Licenciatura en Derecho. Diplomados en Derecho Administrativo.',
  },
  {
    name: 'Omar Alejandro Gaytán Arellano',
    slug: 'omar-alejandro-gaytan-arellano',
    role: 'Consultor Jurídico / Derecho Corporativo y Fiscal',
    email: 'ogaytan@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/omar.jpg',
    photoSittingPath: '/images/omarsentado.jpg',
    order: 8,
    bio: 'Abogado corporativo enfocado en planeación patrimonial y reestructuración empresarial.',
    education: 'Licenciatura en Derecho. Especialización en Derecho Fiscal y Corporativo.',
  },
  {
    name: 'Verónica Sarahí López Santos Maria jose Hurtado rios',
    slug: 'veronica-sarahi-lopez-santos',
    role: 'Especialista en Derecho Laboral y Justicia Administrativa',
    email: 'contacto@saucedolegal.mx',
    phone: '844-343-8333',
    photoStandingPath: '/images/1-8.jpg',
    photoSittingPath: '/images/1-8.jpg',
    order: 9,
    bio: 'Cuenta con una sólida trayectoria en el ámbito del Derecho Laboral y la justicia administrativa.',
    education: 'Licenciatura en Derecho. Especialización en Actuaría Judicial y Procedimientos Laborales Federales.',
  },
];

console.log('Seeding / updating team with upload fields...');
for (const m of teamMembers) {
  const photoStandingId = await getOrCreateMedia(m.photoStandingPath, `${m.name} - Pie`);
  const photoSittingId = await getOrCreateMedia(m.photoSittingPath, `${m.name} - Sentado`);

  const existing = await payload.find({
    collection: 'equipo',
    where: { slug: { equals: m.slug } },
    limit: 1,
  });

  const memberData = {
    name: m.name,
    slug: m.slug,
    role: m.role,
    email: m.email,
    phone: m.phone,
    bio: m.bio,
    education: m.education,
    order: m.order,
    ...(photoStandingId ? { photoStanding: photoStandingId } : {}),
    ...(photoSittingId ? { photoSitting: photoSittingId } : {}),
  };

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'equipo',
      id: existing.docs[0].id,
      data: memberData,
    });
    console.log(`~ Updated member: ${m.name}`);
  } else {
    await payload.create({
      collection: 'equipo',
      data: memberData,
    });
    console.log(`+ Created member: ${m.name}`);
  }
}

// 2. Videos Data
const videosData = [
  {
    title: 'RECORRIDO VIRTUAL',
    category: 'institucional',
    videoUrl: '/videos/recorrido-virtual.mp4',
    thumbnailPath: '/images/33A7570.jpg',
    featured: true,
    description: 'Recorrido virtual por las modernas instalaciones de Saucedo Legal.',
    order: 1,
  },
  {
    title: 'QUIENES SOMOS',
    category: 'nosotros',
    videoUrl: '/videos/quienes-somos.mp4',
    thumbnailPath: '/images/33A7570.jpg',
    featured: false,
    description: 'Conoce nuestra historia y el equipo detrás de Saucedo Consultoría Jurídica.',
    order: 2,
  },
  {
    title: 'INAUGURACIÓN',
    category: 'inauguracion',
    videoUrl: '/videos/saucedo-inauguracion.mp4',
    thumbnailPath: '/images/33A7570.jpg',
    featured: false,
    description: 'Inauguración de nuestras instalaciones corporativas en Saltillo.',
    order: 3,
  },
  {
    title: 'NUESTROS SERVICIOS',
    category: 'servicios',
    videoUrl: '/videos/abogados-saltillo-saucedo-legal.webm',
    thumbnailPath: '/images/33A7570.jpg',
    featured: false,
    description: 'Servicios jurídicos especializados y asesoría legal corporativa integral.',
    order: 4,
  },
];

console.log('Seeding videos with upload thumbnails...');
for (const v of videosData) {
  const thumbId = await getOrCreateMedia(v.thumbnailPath, v.title);
  const existing = await payload.find({
    collection: 'videos',
    where: { videoUrl: { equals: v.videoUrl } },
    limit: 1,
  });

  const vData = {
    title: v.title,
    category: v.category,
    videoUrl: v.videoUrl,
    description: v.description,
    featured: v.featured,
    order: v.order,
    ...(thumbId ? { thumbnail: thumbId } : {}),
  };

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'videos',
      id: existing.docs[0].id,
      data: vData,
    });
    console.log(`~ Updated video: ${v.title}`);
  } else {
    await payload.create({
      collection: 'videos',
      data: vData,
    });
    console.log(`+ Created video: ${v.title}`);
  }
}

// 3. Practice Areas
const areas = [
  { title: 'Derecho Corporativo', slug: 'derecho-corporativo', icon: 'Briefcase', order: 1, shortDescription: 'Asesoría jurídica integral en la estructuración, operación y reorganización de sociedades mercantiles, civiles y asociaciones.', fullDescription: 'Ofrecemos asesoría jurídica integral en la estructuración, operación y reorganización de personas morales...' },
  { title: 'Derecho Laboral', slug: 'derecho-laboral', icon: 'Users', order: 2, shortDescription: 'Servicios jurídicos especializados en derecho laboral individual y colectivo.', fullDescription: 'Ofrecemos servicios jurídicos especializados en derecho laboral individual y colectivo...' },
  { title: 'Seguridad Social', slug: 'seguridad-social', icon: 'ShieldCheck', order: 3, shortDescription: 'Acompañamiento legal en el cumplimiento de obligaciones en materia de seguridad social y tributaria.', fullDescription: 'Brindamos acompañamiento legal en el cumplimiento de obligaciones...' },
  { title: 'Derecho Mercantil', slug: 'derecho-mercantil', icon: 'Scale', order: 4, shortDescription: 'Estructuración, redacción, revisión y negociación de contratos comerciales y operaciones mercantiles.', fullDescription: 'Contamos con amplia experiencia en derecho mercantil...' },
  { title: 'Derecho Civil', slug: 'derecho-civil', icon: 'FileText', order: 5, shortDescription: 'Consultoría contractual y patrimonial, y representación en procedimientos litigiosos civiles y patrimoniales.', fullDescription: 'Prestamos servicios especializados en derecho civil...' },
  { title: 'Derecho Familiar', slug: 'derecho-familiar', icon: 'HeartHandshake', order: 6, shortDescription: 'Asesoría y representación en materia familiar con énfasis en mediación y conciliación.', fullDescription: 'Brindamos asesoría y representación legal en materia familiar...' },
  { title: 'Derecho Fiscal', slug: 'derecho-fiscal', icon: 'Receipt', order: 7, shortDescription: 'Asesoría en planeación fiscal, cumplimiento tributario y defensa contra actos de autoridad.', fullDescription: 'Asesoramos a personas físicas y morales en planeación fiscal...' },
  { title: 'Propiedad Intelectual', slug: 'propiedad-intelectual', icon: 'Award', order: 8, shortDescription: 'Registro y protección de marcas, patentes, derechos de autor y secretos industriales.', fullDescription: 'Protegemos los activos intangibles más valiosos de nuestros clientes...' },
  { title: 'Derecho Penal', slug: 'derecho-penal', icon: 'Gavel', order: 9, shortDescription: 'Defensa penal corporativa y representación de víctimas u ofendidos.', fullDescription: 'Brindamos defensa y asesoría técnica en el sistema de justicia penal acusatorio...' },
  { title: 'Servicios Ambientales', slug: 'servicios-ambientales', icon: 'Leaf', order: 10, shortDescription: 'Consultoría en cumplimiento ambiental, trámites ante Semarnat y Profepa.', fullDescription: 'Ofrecemos consultoría jurídica especializada en materia ambiental...' },
  { title: 'Derecho Migratorio', slug: 'derecho-migratorio', icon: 'Globe', order: 11, shortDescription: 'Gestión y regularización de trámites migratorios ante el INM.', fullDescription: 'Asesoramos y representamos a empresas y particulares en la tramitación...' },
];

console.log('Seeding areas...');
for (const a of areas) {
  const existing = await payload.find({
    collection: 'area-practica',
    where: { slug: { equals: a.slug } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    await payload.update({
      collection: 'area-practica',
      id: existing.docs[0].id,
      data: a,
    });
  } else {
    await payload.create({
      collection: 'area-practica',
      data: a,
    });
    console.log(`+ Created area: ${a.title}`);
  }
}

console.log('--- Migration completed successfully! ---');
process.exit(0);
