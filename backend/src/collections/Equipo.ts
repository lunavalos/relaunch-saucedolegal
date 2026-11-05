import type { CollectionConfig } from 'payload'

export const Equipo: CollectionConfig = {
  slug: 'equipo',
  labels: {
    singular: 'Miembro del Equipo',
    plural: 'Equipo',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'email', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nombre Completo',
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      label: 'Cargo / Especialidad',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Correo Electrónico',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono Directo',
    },
    {
      name: 'photoStanding',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto de Pie (Subir archivo)',
    },
    {
      name: 'photoSitting',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto Sentado (Subir archivo)',
    },
    {
      name: 'bio',
      type: 'textarea',
      localized: true,
      label: 'Biografía / Semblanza Profesional',
    },
    {
      name: 'education',
      type: 'textarea',
      localized: true,
      label: 'Formación Académica',
    },
    {
      name: 'practiceAreas',
      type: 'relationship',
      relationTo: 'area-practica',
      hasMany: true,
      label: 'Áreas de Práctica Relacionadas',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Orden de aparición',
    },
  ],
}
