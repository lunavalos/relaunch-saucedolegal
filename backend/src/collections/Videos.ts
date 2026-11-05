import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'youtubeUrl', 'videoFile', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título del Video',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      label: 'Descripción del Video (Opcional)',
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Video como Archivo (Opcional - Subir MP4 o WebM)',
      admin: {
        description: 'Sube un archivo de video desde tu computadora (opcional si usas enlace de YouTube).',
      },
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      required: false,
      label: 'Video de YouTube (Opcional)',
      admin: {
        placeholder: 'https://www.youtube.com/watch?v=... o https://youtu.be/...',
        description: 'Pega el enlace de YouTube (opcional si subes un archivo de video).',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de Portada / Miniatura (Subir archivo)',
      admin: {
        description: 'Imagen de portada que se mostrará antes de reproducir el video.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Orden',
    },
  ],
}
