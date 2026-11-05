import type { CollectionConfig } from 'payload'

export const Galeria: CollectionConfig = {
  slug: 'galeria',
  labels: {
    singular: 'Categoría de Galería',
    plural: 'Galería (Categorías / Pestañas)',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.title) {
          data.slug = String(data.title)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: 'Título de la Categoría (Pestaña)',
      admin: {
        placeholder: 'ej. Nuestras Oficinas, Eventos Oficiales, Inauguración, etc.',
        description: 'Este título aparecerá como una pestaña de filtro en la galería.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug / Identificador (opcional)',
      admin: {
        description: 'Se genera automáticamente a partir del título si se deja vacío.',
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Imágenes de esta Categoría',
      labels: {
        singular: 'Imagen',
        plural: 'Imágenes',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Archivo de Imagen (Subir foto)',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Orden de la pestaña',
    },
  ],
}
