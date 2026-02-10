import { client } from './client'

// ===== PROFILE QUERIES =====
export async function getProfile() {
  return client.fetch(`
    *[_type == "profile"][0] {
      _id,
      fullName,
      headline,
      bio,
      email,
      phone,
      location,
      profileImage {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      socialLinks[] {
        platform,
        url
      },
      resumeFile {
        asset->{
          url
        }
      }
    }
  `)
}

// ===== PROJECT QUERIES =====
export async function getAllProjects(includeUnpublished = false) {
  const filter = includeUnpublished ? '' : '&& publishedAt < now()'
  
  return client.fetch(`
    *[_type == "project" ${filter}] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      technologies,
      categories[]->{
        title,
        slug
      },
      featured,
      publishedAt,
      duration {
        startDate,
        endDate
      },
      links[] {
        label,
        url
      }
    }
  `)
}

export async function getFeaturedProjects() {
  return client.fetch(`
    *[_type == "project" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      technologies,
      categories[]->{
        title,
        slug
      },
      publishedAt
    }
  `)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      longDescription,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      images[] {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      technologies,
      categories[]->{
        _id,
        title,
        slug
      },
      duration {
        startDate,
        endDate
      },
      links[] {
        label,
        url
      },
      featured,
      publishedAt
    }
  `, { slug })
}

export async function getProjectsByCategory(categorySlug: string) {
  return client.fetch(`
    *[_type == "project" && $categorySlug in categories[]->.slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt,
        hotspot
      },
      technologies,
      publishedAt
    }
  `, { categorySlug })
}

// ===== SKILL QUERIES =====
export async function getAllSkills() {
  return client.fetch(`
    *[_type == "skill"] | order(category asc, title asc) {
      _id,
      title,
      category,
      proficiency,
      yearsOfExperience,
      description,
      icon {
        asset->{
          url
        }
      }
    }
  `)
}

export async function getSkillsByCategory(category: string) {
  return client.fetch(`
    *[_type == "skill" && category == $category] | order(title asc) {
      _id,
      title,
      category,
      proficiency,
      yearsOfExperience,
      description,
      icon {
        asset->{
          url
        }
      }
    }
  `, { category })
}

// ===== EXPERIENCE QUERIES =====
export async function getAllExperiences() {
  return client.fetch(`
    *[_type == "experience"] | order(startDate desc) {
      _id,
      title,
      company,
      location,
      type,
      startDate,
      endDate,
      currentlyWorking,
      description,
      responsibilities[] {
        responsibility
      },
      achievements[] {
        achievement
      },
      technologies,
      companyWebsite
    }
  `)
}

// ===== EDUCATION QUERIES =====
export async function getAllEducation() {
  return client.fetch(`
    *[_type == "education"] | order(startDate desc) {
      _id,
      school,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      currentlyStudying,
      grade,
      description,
      activities,
      schoolWebsite
    }
  `)
}

// ===== CATEGORY QUERIES =====
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}