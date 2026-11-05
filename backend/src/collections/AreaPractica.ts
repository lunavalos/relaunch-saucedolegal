import type { CollectionConfig } from 'payload'

export const AreaPractica: CollectionConfig = {
  slug: 'area-practica',
  labels: {
    singular: 'Área de Práctica',
    plural: 'Áreas de Práctica',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'order'],
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
      label: 'Título del Área',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug (URL)',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
      label: 'Descripción Breve',
    },
    {
      name: 'fullDescription',
      type: 'textarea',
      localized: true,
      label: 'Descripción Completa',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icono (FontAwesome)',
      admin: {
        placeholder: 'fa-solid fa-scale-balanced',
        description: 'Escribe la clase de FontAwesome (ej. fa-solid fa-scale-balanced, fa-solid fa-briefcase, fa-balance-scale) o la etiqueta <i class="fa-solid fa-scale-balanced"></i>',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de Portada / Hero Banner (Subir archivo)',
      admin: {
        description: 'Esta imagen se mostrará automáticamente como fondo en el Hero Banner principal de la página de esta área.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Orden de aparición',
    },
  ],
}
