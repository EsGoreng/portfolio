// Profile Types
export interface SocialLink {
  platform: 'linkedin' | 'github' | 'twitter' | 'instagram' | 'portfolio' | 'other'
  url: string
}

export interface Profile {
  _id: string
  fullName: string
  headline: string
  bio?: string
  email?: string
  phone?: string
  location?: string
  profileImage?: SanityImage
  socialLinks: SocialLink[]
  resumeFile?: SanityFile
}

// Project Types
export interface Category {
  _id: string
  title: string
  slug: Slug
  description?: string
}

export interface ProjectLink {
  label: 'live' | 'github' | 'website' | 'docs'
  url: string
}

export interface Project {
  _id: string
  title: string
  slug: Slug
  description: string
  longDescription?: Block[]
  image: SanityImage
  images?: SanityImage[]
  technologies: string[]
  categories: Category[]
  duration?: {
    startDate?: string
    endDate?: string
  }
  links: ProjectLink[]
  featured: boolean
  publishedAt: string
}

// Skill Types
export interface Skill {
  _id: string
  title: string
  category: 'frontend' | 'backend' | 'devops' | 'design' | 'database' | 'tools' | 'soft-skills' | 'other'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience?: number
  description?: string
  icon?: SanityImage
}

// Experience Types
export interface Responsibility {
  responsibility: string
}

export interface Achievement {
  achievement: string
}

export interface Experience {
  _id: string
  title: string
  company: string
  location?: string
  type: 'full-time' | 'part-time' | 'freelance' | 'contract' | 'internship'
  startDate: string
  endDate?: string
  currentlyWorking: boolean
  description?: string
  responsibilities: Responsibility[]
  achievements: Achievement[]
  technologies: string[]
  companyWebsite?: string
}

// Education Types
export interface Education {
  _id: string
  school: string
  degree: string
  fieldOfStudy?: string
  startDate: string
  endDate?: string
  currentlyStudying: boolean
  grade?: string
  description?: string
  activities: string[]
  schoolWebsite?: string
}

// Common Sanity Types
export interface SanityImage {
  asset: {
    url: string
    metadata?: {
      dimensions?: {
        height: number
        width: number
        aspectRatio: number
      }
    }
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityFile {
  asset: {
    url: string
  }
}

export interface Slug {
  current: string
  _type: 'slug'
}

export interface Block {
  _type: string
  _key: string
  [key: string]: any
}