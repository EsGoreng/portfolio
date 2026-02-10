import { defineType, defineField } from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const experience = defineType({
  name: 'experience',
  title: 'Pengalaman Kerja',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Posisi/Jabatan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Nama Perusahaan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokasi',
      type: 'string',
      description: 'Kota atau Remote',
    }),
    defineField({
      name: 'type',
      title: 'Tipe Pengalaman',
      type: 'string',
      options: {
        list: [
          { title: 'Pekerjaan Full-time', value: 'full-time' },
          { title: 'Pekerjaan Part-time', value: 'part-time' },
          { title: 'Freelance', value: 'freelance' },
          { title: 'Kontrak', value: 'contract' },
          { title: 'Magang', value: 'internship' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Tanggal Mulai',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Tanggal Selesai',
      type: 'datetime',
      description: 'Kosongkan jika masih bekerja di sana',
    }),
    defineField({
      name: 'currentlyWorking',
      title: 'Masih Bekerja di Sini',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Pekerjaan',
      type: 'text',
      validation: (rule) => rule.max(500),
      description: 'Ringkasan tanggung jawab dan pencapaian',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Tanggung Jawab',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'responsibility',
              title: 'Tanggung Jawab',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Daftar tanggung jawab utama',
    }),
    defineField({
      name: 'achievements',
      title: 'Pencapaian',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'achievement',
              title: 'Pencapaian',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Pencapaian atau hasil penting',
    }),
    defineField({
      name: 'technologies',
      title: 'Teknologi yang Digunakan',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'companyWebsite',
      title: 'Website Perusahaan',
      type: 'url',
    }),
  ],
})
