import { defineType, defineField } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const education = defineType({
  name: 'education',
  title: 'Pendidikan',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'school',
      title: 'Nama Sekolah/Universitas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Gelar/Sertifikat',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Sarjana Teknik Informatika, Diploma, Sertifikat, dll',
    }),
    defineField({
      name: 'fieldOfStudy',
      title: 'Bidang Studi',
      type: 'string',
      description: 'Contoh: Teknik Informatika, Web Development, Data Science, dll',
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
      description: 'Kosongkan jika masih menempuh pendidikan',
    }),
    defineField({
      name: 'currentlyStudying',
      title: 'Masih Belajar di Sini',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'grade',
      title: 'Nilai/GPA',
      type: 'string',
      description: 'Contoh: 3.8/4.0 atau First Class Honours',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      description: 'Informasi tambahan tentang pendidikan ini',
    }),
    defineField({
      name: 'activities',
      title: 'Aktivitas/Organisasi',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Organisasi atau kegiatan yang Anda ikuti',
    }),
    defineField({
      name: 'schoolWebsite',
      title: 'Website Sekolah/Universitas',
      type: 'url',
    }),
  ],
})
