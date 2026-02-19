import { defineType, defineField, defineArrayMember } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const project = defineType({
  name: 'project',
  title: 'Proyek',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Klik "Generate" untuk membuat URL otomatis dari judul',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat (Card)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Konten Detail Proyek',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'Penjelasan detail yang akan muncul di halaman detail',
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Teknologi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'links',
      title: 'Tautan Proyek',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              options: {
                list: [
                  { title: 'Live Demo', value: 'live' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Website', value: 'website' },
                  { title: 'Dokumentasi', value: 'docs' },
                ],
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Proyek Unggulan',
      type: 'boolean',
      initialValue: false,
      description: 'Tandai untuk menampilkan di halaman utama',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'project.slug.current',
      media: 'image',
    },
  },
})
