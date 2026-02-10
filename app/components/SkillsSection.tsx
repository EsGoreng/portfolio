import { getAllSkills } from '@/sanity/lib/queries'
import { Skill } from '@/sanity/lib/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export default async function SkillsSection() {
  const skills: Skill[] = await getAllSkills()

  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    devops: 'DevOps & Infrastructure',
    design: 'Design',
    database: 'Database',
    tools: 'Tools & Platforms',
    'soft-skills': 'Soft Skills',
    other: 'Other',
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

        {Object.entries(groupedSkills).length === 0 ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <p className="text-gray-600 text-lg font-semibold mb-2">Belum ada skill yang ditambahkan</p>
              <p className="text-gray-500">
                Tambahkan skill dan kemampuan Anda di Sanity Studio.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill._id}
                    className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                  >
                    {skill.icon && (
                      <div className="w-12 h-12 mb-4 relative">
                        <Image
                          src={urlFor(skill.icon).url()}
                          alt={skill.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <h4 className="font-semibold text-lg mb-2">
                      {skill.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            skill.proficiency === 'expert'
                              ? 'w-full bg-green-500'
                              : skill.proficiency === 'advanced'
                              ? 'w-3/4 bg-blue-500'
                              : skill.proficiency === 'intermediate'
                              ? 'w-1/2 bg-yellow-500'
                              : 'w-1/4 bg-orange-500'
                          }`}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600 capitalize">
                        {skill.proficiency}
                      </span>
                    </div>
                    {skill.yearsOfExperience && (
                      <p className="text-sm text-gray-500">
                        {skill.yearsOfExperience} years experience
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  )
}