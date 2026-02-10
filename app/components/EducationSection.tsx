import { getAllEducation } from '@/sanity/lib/queries'
import { Education } from '@/sanity/lib/types'
import { formatDate } from '@/lib/utils'

export default async function EducationSection() {
  const education: Education[] = await getAllEducation()

  if (!education || education.length === 0) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Education</h2>
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.121v3.743a2 2 0 002 2h16a2 2 0 002-2v-3.743c0-6.123-4.5-10.868-10-10.868z" />
              </svg>
              <p className="text-gray-600 text-lg font-semibold mb-2">Belum ada pendidikan yang ditambahkan</p>
              <p className="text-gray-500">
                Tambahkan riwayat pendidikan Anda di Sanity Studio.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu._id}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold">
                    {edu.school}
                  </p>
                  {edu.fieldOfStudy && (
                    <p className="text-gray-600 mt-1">
                      {edu.fieldOfStudy}
                    </p>
                  )}
                </div>
                {edu.grade && (
                  <div className="text-right">
                    <p className="text-sm text-gray-500 font-semibold">GPA/Grade</p>
                    <p className="text-lg font-bold text-purple-600">
                      {edu.grade}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
                {formatDate(edu.startDate)} -{' '}
                {edu.currentlyStudying ? 'Present' : formatDate(edu.endDate)}
              </p>

              {edu.description && (
                <p className="text-gray-700 mb-4">
                  {edu.description}
                </p>
              )}

              {edu.activities && edu.activities.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Activities & Societies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.schoolWebsite && (
                <a
                  href={edu.schoolWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 text-sm font-semibold inline-block mt-4"
                >
                  Visit School Website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
