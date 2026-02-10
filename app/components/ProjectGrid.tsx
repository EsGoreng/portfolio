import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects } from '@/sanity/lib/queries'
import { Project } from '@/sanity/lib/types'
import { urlFor } from '@/sanity/lib/image'

export default async function ProjectGrid() {
  const projects: Project[] = await getAllProjects()

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        {projects.length === 0 ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 4.24l.707.707M9.663 17H5.59m7.411-7.411v-.001" />
              </svg>
              <p className="text-gray-600 text-lg font-semibold mb-2">Belum ada proyek</p>
              <p className="text-gray-500">
                Tambahkan data proyek di Sanity Studio untuk menampilkan karya Anda.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug.current}`}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}