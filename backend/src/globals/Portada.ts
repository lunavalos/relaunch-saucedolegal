import type { GlobalConfig } from 'payload'

export const Portada: GlobalConfig = {
  slug: 'portada',
  label: 'Portada (Homepage)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Video de Portada (Subir archivo MP4 o WebM)',
      admin: {
        description: 'Sube el video principal que se reproducirá en bucle en el fondo de la página de inicio.',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      required: false,
      label: 'URL de Video Alternativa (Opcional)',
      admin: {
        placeholder: 'https://... o /videos/mi-video.webm',
        description: 'Opcional: enlaces directos a un archivo .mp4 o .webm si no subes archivo arriba.',
      },
    },
    {
      name: 'posterImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Imagen de Fondo / Póster (Opcional)',
      admin: {
        description: 'Imagen que se muestra mientras carga el video o como fondo si no hay video.',
      },
    },
    {
      name: 'eyebrow',
      type: 'text',
      localized: true,
      defaultValue: 'ASESORÍA LEGAL CORPORATIVA',
      label: 'Texto Superior (Eyebrow)',
      admin: {
        placeholder: 'ASESORÍA LEGAL CORPORATIVA',
      },
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      defaultValue: 'MÁS DE 20 AÑOS DE EXPERIENCIA',
      label: 'Título Principal',
      admin: {
        placeholder: 'MÁS DE 20 AÑOS DE EXPERIENCIA',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
      defaultValue: 'CONTRIBUYENDO CON EL ÉXITO DE NUESTROS CLIENTES',
      label: 'Subtítulo / Texto Inferior',
      admin: {
        placeholder: 'CONTRIBUYENDO CON EL ÉXITO DE NUESTROS CLIENTES',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonText',
          type: 'text',
          localized: true,
          defaultValue: 'CONTACTO',
          label: 'Texto del Botón',
          admin: {
            width: '50%',
            placeholder: 'CONTACTO',
          },
        },
        {
          name: 'buttonLink',
          type: 'text',
          localized: true,
          defaultValue: '/contacto',
          label: 'Enlace del Botón (URL o ruta)',
          admin: {
            width: '50%',
            placeholder: '/contacto o https://...',
          },
        },
      ],
    },
  ],
}
