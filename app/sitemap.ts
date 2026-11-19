import type { MetadataRoute } from 'next'
import {
  projects,
  projectCategories,
  services,
  getProjectSlug,
} from '@/lib/site-data'
import { locations } from '@/lib/locations'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const home = {
    url: `${SITE_URL}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 1,
  }

  const categories = projectCategories.map((category) => ({
    url: `${SITE_URL}/proyectos/${category.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/proyectos/${project.category}/${getProjectSlug(project)}/`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const indexes = [
    {
      url: `${SITE_URL}/proyectos/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicios/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/arquitectos-en/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  const locationPages = locations.map((location) => ({
    url: `${SITE_URL}/arquitectos-en/${location.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    home,
    ...indexes,
    ...categories,
    ...servicePages,
    ...locationPages,
    ...projectPages,
  ]
}
