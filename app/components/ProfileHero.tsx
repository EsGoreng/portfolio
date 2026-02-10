import Image from 'next/image'
import { getProfile } from '@/sanity/lib/queries'
import { Profile } from '@/sanity/lib/types'
import { urlFor } from '@/sanity/lib/image'

export default async function ProfileHero() {
  const profile: Profile = await getProfile()

  if (!profile) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
        <div className="max-w-4xl w-full text-center">
          <div className="bg-slate-800 rounded-lg p-12 border-2 border-slate-700">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">Profile Data Not Found</h3>
            <p className="text-gray-300">
              Silakan tambahkan data profil Anda di Sanity Studio untuk menampilkan informasi pribadi.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          {profile.profileImage && (
            <div className="relative w-full aspect-square">
              <Image
                src={urlFor(profile.profileImage).url()}
                alt={profile.fullName}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          )}

          {/* Right: Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {profile.fullName}
            </h1>
            <p className="text-2xl text-purple-300 mb-6">
              {profile.headline}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {profile.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {profile.socialLinks?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                >
                  {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get In Touch
              </a>
              {profile.resumeFile && (
                <a
                  href={profile.resumeFile.asset.url}
                  download
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}