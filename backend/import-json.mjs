import 'dotenv/config';
import config from './src/payload.config.ts';
import { getPayload } from 'payload';
import fs from 'fs';
import path from 'path';

const LOCALES = ['es', 'en', 'zh', 'ko'];
const payload = await getPayload({ config });
const mediaCache = new Map();

function getLocalizedVal(field, locale, fallbackLocale = 'es') {
  if (!field) return undefined;
  if (typeof field === 'string') return field;
  return field[locale] ?? field[fallbackLocale] ?? undefined;
}

async function resolveMedia(relativePath, alt = '') {
  if (!relativePath) return undefined;
  if (typeof relativePath === 'number') return relativePath;

  const filename = path.basename(relativePath);
  const nameWithoutExt = path.parse(filename).name;
  const cleanRel = relativePath.replace(/^\//, '');

  const searchDirs = [
    path.resolve('media/equipo'),
    path.resolve('media/areas-de-practica'),
    path.resolve('..', 'media/equipo'),
    path.resolve('..', 'media/areas-de-practica'),
    path.resolve('..', 'frontend/public/images/equipo'),
    path.resolve('..', 'frontend/public/images/Equipo'),
    path.resolve('..', 'frontend/public/images'),
    path.resolve('media'),
  ];

  const candidateNames = [
    filename,
    `${nameWithoutExt}.webp`,
    `${nameWithoutExt}.jpg`,
    `${nameWithoutExt}.jpeg`,
    `${nameWithoutExt}.png`,
  ];

  const possiblePaths = [
    path.resolve(cleanRel),
    path.resolve('..', cleanRel),
    path.resolve('media', cleanRel.replace(/^media\//, '')),
    path.resolve('..', 'frontend/public', cleanRel),
  ];

  for (const dir of searchDirs) {
    for (const cand of candidateNames) {
      possiblePaths.push(path.join(dir, cand));
    }
  }

  let filePath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      filePath = p;
      break;
    }
  }

  const actualFilename = filePath ? path.basename(filePath) : filename;
  if (mediaCache.has(actualFilename)) return mediaCache.get(actualFilename);

  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: actualFilename } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    mediaCache.set(actualFilename, existing.docs[0].id);
    return existing.docs[0].id;
  }

  if (!filePath) {
    console.warn(`[Media] Archivo no encontrado en disco: ${relativePath}`);
    return undefined;
  }

  const buf = fs.readFileSync(filePath);
  const targetMediaFile = path.resolve('media', actualFilename);
  if (fs.existsSync(targetMediaFile)) {
    fs.unlinkSync(targetMediaFile);
  }
  const ext = path.extname(actualFilename).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.webm': 'video/webm',
    '.mp4': 'video/mp4',
  };

  const created = await payload.create({
    collection: 'media',
    data: { alt: alt || actualFilename },
    file: {
      data: buf,
      name: actualFilename,
      mimetype: mimeTypes[ext] || 'image/jpeg',
      size: buf.length,
    },
  });

  mediaCache.set(actualFilename, created.id);
  console.log(`   [Media] Subido: ${actualFilename} (id: ${created.id})`);
  return created.id;
}

async function runImport() {
  console.log('=== Iniciando Importación Masiva Multi-idioma (es, en, zh, ko) ===');

  const areasPath = path.resolve('import-data/areas-practica.json');
  const equipoPath = path.resolve('import-data/equipo.json');
  const portadaPath = path.resolve('import-data/portada.json');

  // 0. Importar Portada (Homepage Global)
  if (fs.existsSync(portadaPath)) {
    const portada = JSON.parse(fs.readFileSync(portadaPath, 'utf-8'));
    console.log('\n-> Procesando Portada (Homepage)...');
    const videoFileId = await resolveMedia(portada.videoFile, 'Video de Portada');
    const posterImageId = await resolveMedia(portada.posterImage, 'Póster de Portada');

    await payload.updateGlobal({
      slug: 'portada',
      locale: 'es',
      data: {
        ...(videoFileId ? { videoFile: videoFileId } : {}),
        ...(portada.videoUrl ? { videoUrl: portada.videoUrl } : {}),
        ...(posterImageId ? { posterImage: posterImageId } : {}),
        eyebrow: getLocalizedVal(portada.eyebrow, 'es'),
        title: getLocalizedVal(portada.title, 'es'),
        subtitle: getLocalizedVal(portada.subtitle, 'es'),
        buttonText: getLocalizedVal(portada.buttonText, 'es'),
        buttonLink: getLocalizedVal(portada.buttonLink, 'es'),
      },
    });

    for (const locale of LOCALES.filter((l) => l !== 'es')) {
      await payload.updateGlobal({
        slug: 'portada',
        locale,
        data: {
          eyebrow: getLocalizedVal(portada.eyebrow, locale),
          title: getLocalizedVal(portada.title, locale),
          subtitle: getLocalizedVal(portada.subtitle, locale),
          buttonText: getLocalizedVal(portada.buttonText, locale),
          buttonLink: getLocalizedVal(portada.buttonLink, locale),
        },
      });
    }
    console.log('   + Portada actualizada en 4 idiomas');
  }

  const areaSlugToId = new Map();

  // 1. Importar Áreas de Práctica
  if (fs.existsSync(areasPath)) {
    const areas = JSON.parse(fs.readFileSync(areasPath, 'utf-8'));
    console.log(`\n-> Procesando ${areas.length} Áreas de Práctica...`);

    for (const area of areas) {
      const imageId = await resolveMedia(area.image, getLocalizedVal(area.title, 'es'));
      const existing = await payload.find({
        collection: 'area-practica',
        where: { slug: { equals: area.slug } },
        limit: 1,
      });

      let docId;
      const baseDataEs = {
        slug: area.slug,
        icon: area.icon,
        order: area.order ?? 0,
        title: getLocalizedVal(area.title, 'es'),
        shortDescription: getLocalizedVal(area.shortDescription, 'es'),
        fullDescription: getLocalizedVal(area.fullDescription, 'es'),
        ...(imageId ? { image: imageId } : {}),
      };

      if (existing.docs.length > 0) {
        docId = existing.docs[0].id;
        await payload.update({
          collection: 'area-practica',
          id: docId,
          locale: 'es',
          data: baseDataEs,
        });
        console.log(`   ~ Actualizada área [es]: ${baseDataEs.title}`);
      } else {
        const created = await payload.create({
          collection: 'area-practica',
          locale: 'es',
          data: baseDataEs,
        });
        docId = created.id;
        console.log(`   + Creada área [es]: ${baseDataEs.title}`);
      }

      areaSlugToId.set(area.slug, docId);

      // Guardar traducciones (en, zh, ko)
      for (const locale of LOCALES.filter((l) => l !== 'es')) {
        await payload.update({
          collection: 'area-practica',
          id: docId,
          locale,
          data: {
            title: getLocalizedVal(area.title, locale),
            shortDescription: getLocalizedVal(area.shortDescription, locale),
            fullDescription: getLocalizedVal(area.fullDescription, locale),
          },
        });
      }
    }
  }

  // Cargar mapa de áreas existentes en DB por si Equipo referencia alguna que ya existía
  const allAreasInDb = await payload.find({ collection: 'area-practica', limit: 200 });
  for (const doc of allAreasInDb.docs) {
    if (doc.slug) areaSlugToId.set(doc.slug, doc.id);
  }

  // 2. Importar Equipo
  if (fs.existsSync(equipoPath)) {
    const members = JSON.parse(fs.readFileSync(equipoPath, 'utf-8'));
    console.log(`\n-> Procesando ${members.length} Miembros del Equipo...`);

    for (const m of members) {
      const photoStandingId = await resolveMedia(m.photoStanding, `${m.name} - Pie`);
      const photoSittingId = await resolveMedia(m.photoSitting, `${m.name} - Sentado`);

      const relatedAreaIds = Array.isArray(m.practiceAreas)
        ? m.practiceAreas.map((slugOrId) => areaSlugToId.get(slugOrId) || slugOrId).filter(Boolean)
        : [];

      const existing = await payload.find({
        collection: 'equipo',
        where: { slug: { equals: m.slug } },
        limit: 1,
      });

      const baseMemberEs = {
        name: m.name,
        slug: m.slug,
        ...(m.email ? { email: m.email } : {}),
        phone: m.phone,
        order: m.order ?? 0,
        role: getLocalizedVal(m.role, 'es'),
        bio: getLocalizedVal(m.bio, 'es'),
        education: getLocalizedVal(m.education, 'es'),
        ...(photoStandingId ? { photoStanding: photoStandingId } : {}),
        ...(photoSittingId ? { photoSitting: photoSittingId } : {}),
        ...(relatedAreaIds.length > 0 ? { practiceAreas: relatedAreaIds } : {}),
      };

      let docId;
      if (existing.docs.length > 0) {
        docId = existing.docs[0].id;
        await payload.update({
          collection: 'equipo',
          id: docId,
          locale: 'es',
          data: baseMemberEs,
        });
        console.log(`   ~ Actualizado miembro [es]: ${m.name}`);
      } else {
        const created = await payload.create({
          collection: 'equipo',
          locale: 'es',
          data: baseMemberEs,
        });
        docId = created.id;
        console.log(`   + Creado miembro [es]: ${m.name}`);
      }

      // Guardar traducciones (en, zh, ko)
      for (const locale of LOCALES.filter((l) => l !== 'es')) {
        await payload.update({
          collection: 'equipo',
          id: docId,
          locale,
          data: {
            role: getLocalizedVal(m.role, locale),
            bio: getLocalizedVal(m.bio, locale),
            education: getLocalizedVal(m.education, locale),
          },
        });
      }
    }
  }

  console.log('\n=== Importación Masiva Finalizada con Éxito ===');
  process.exit(0);
}

runImport().catch((err) => {
  console.error('Error en la importación:', err);
  process.exit(1);
});

