import { defineType, defineField } from 'sanity'
import { MasterDetailIcon } from '@sanity/icons'

export const skill = defineType({
  name: 'skill',
  title: 'Skill/Kemampuan',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Skill',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: React, JavaScript, UX Design, dll',
    }),
    defineField({
      name: 'category',
      title: 'Kategori Skill',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Design', value: 'design' },
          { title: 'Database', value: 'database' },
          { title: 'Tools', value: 'tools' },
          { title: 'Soft Skills', value: 'soft-skills' },
          { title: 'Lainnya', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: 'Tingkat Keahlian',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'Expert', value: 'expert' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Tahun Pengalaman',
      type: 'number',
      description: 'Berapa lama Anda telah menggunakan skill ini',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      description: 'Penjelasan singkat tentang skill ini',
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Logo',
      type: 'image',
      description: 'Icon atau logo untuk skill ini',
    }),
  ],
})
