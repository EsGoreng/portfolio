import { getAllExperiences } from '@/sanity/lib/queries'
import { Experience } from '@/sanity/lib/types'
import { formatDate } from '@/lib/utils'

export default async function ExperienceSection() {
  const experiences: Experience[] = await getAllExperiences()

  if (experiences.length === 0) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-600 text-lg font-semibold mb-2">Belum ada pengalaman kerja</p>
              <p className="text-gray-500">
                Tambahkan riwayat pengalaman kerja Anda di Sanity Studio.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 w-1 h-full bg-purple-200 md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp._id}
                className={`relative pl-8 md:pl-0 ${
                  idx % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 md:left-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-white md:transform md:-translate-x-1/2"></div>

                {/* Card */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {formatDate(exp.startDate)} -{' '}
                    {exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}
                  </p>

                  {exp.description && (
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                  )}

                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-purple-600 mt-1">✓</span>
                          {achievement.achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}