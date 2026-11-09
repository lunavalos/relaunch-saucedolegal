import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Equipo } from './collections/Equipo'
import { AreaPractica } from './collections/AreaPractica'
import { Galeria } from './collections/Galeria'
import { Videos } from './collections/Videos'
import { Portada } from './globals/Portada'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: '*',
  csrf: process.env.CSRF_ORIGINS ? process.env.CSRF_ORIGINS.split(',') : undefined,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Equipo,
    AreaPractica,
    Galeria,
    Videos,
  ],
  globals: [
    Portada,
  ],
  localization: {
    locales: [
      { label: 'Español', code: 'es' },
      { label: 'English', code: 'en' },
      { label: '中文 (Chinese)', code: 'zh' },
      { label: '한국어 (Korean)', code: 'ko' },
    ],
    defaultLocale: 'es',
    fallback: true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'saucedo_legal_secret_key_2026_saltillo_mx_token',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
})
