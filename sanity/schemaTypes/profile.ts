import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const profile = defineType({
  name: 'profile',
  title: 'Profil Pribadi',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline (Profesi/Posisi)',
      type: 'string',
      validation: (rule) => rule.required().max(100),
      description: 'Contoh: "Full Stack Developer" atau "Product Designer"',
    }),
    defineField({
      name: 'bio',
      title: 'Biografi',
      type: 'text',
      validation: (rule) => rule.max(500),
      description: 'Deskripsi singkat tentang Anda dan keahlian Anda',
    }),
    defineField({
      name: 'profileImage',
      title: 'Foto Profil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi',
      type: 'string',
      description: 'Kota, Negara',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Tautan Sosial',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Portfolio', value: 'portfolio' },
                  { title: 'Lainnya', value: 'other' },
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
        },
      ],
    }),
    defineField({
      name: 'resumeFile',
      title: 'File CV/Resume',
      type: 'file',
      description: 'Upload file CV atau Resume Anda (PDF)',
    }),
  ],
})
