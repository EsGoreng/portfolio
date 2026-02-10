import ProfileHero from './components/ProfileHero'
import ProjectGrid from './components/ProjectGrid'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <ProfileHero />

      {/* Projects Section */}
      <ProjectGrid />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & Sanity.
          </p>
        </div>
      </footer>
    </main>
  )
}
