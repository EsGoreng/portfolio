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
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'longDescription',
      title: 'Deskripsi Lengkap',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      description: 'Penjelasan detail tentang proyek',
    }),
    defineField({
      name: 'image',
      title: 'Gambar Proyek',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Galeri Proyek',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
      description: 'Tambahkan lebih banyak gambar untuk galeri proyek',
    }),
    defineField({
      name: 'technologies',
      title: 'Teknologi yang Digunakan',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
      description: 'Contoh: React, Node.js, GraphQL, dll',
    }),
    defineField({
      name: 'categories',
      title: 'Kategori',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'category' }],
        }),
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Durasi Proyek',
      type: 'object',
      fields: [
        defineField({
          name: 'startDate',
          title: 'Tanggal Mulai',
          type: 'datetime',
        }),
        defineField({
          name: 'endDate',
          title: 'Tanggal Selesai',
          type: 'datetime',
        }),
      ],
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
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
