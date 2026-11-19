import { contactInfo } from '@/lib/site-data'

export const SITE_URL = 'https://miarquitectos.cl'
export const SITE_NAME = 'MI Arquitectos'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Architect',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/images/hero.jpg`,
  description:
    'Estudio de arquitectura en Santiago de Chile especializado en diseño arquitectónico, visualización 3D, diseño de interiores, remodelación y proyectos comerciales.',
  telephone: contactInfo.phone,
  email: contactInfo.email,
  priceRange: '$$',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Agustinas 1022, Ofi. 1004',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  sameAs: [
    contactInfo.social.facebook,
    contactInfo.social.instagram,
    contactInfo.social.linkedin,
  ],
  knowsAbout: [
    'Diseño arquitectónico',
    'Visualización 3D',
    'Diseño de interiores',
    'Remodelación de viviendas',
    'Proyectos comerciales',
  ],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'es-CL',
  publisher: { '@id': `${SITE_URL}/#organization` },
}

export type BreadcrumbItem = {
  name: string
  path: string
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

type ServiceSchemaInput = {
  title: string
  description: string
  image: string
  slug: string
}

export function serviceJsonLd(service: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${SITE_URL}/servicios/${service.slug}/`,
    image: `${SITE_URL}${service.image}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Santiago' },
      { '@type': 'Country', name: 'Chile' },
    ],
  }
}

type ProjectSchemaInput = {
  title: string
  summary: string
  image: string
  location?: string
}

export function projectImageJsonLd(project: ProjectSchemaInput, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}${project.image}`,
    name: project.title,
    description: project.summary || project.title,
    caption: project.location ? `${project.title}, ${project.location}` : project.title,
    url: `${SITE_URL}${path}`,
    creator: { '@id': `${SITE_URL}/#organization` },
    creditText: SITE_NAME,
    copyrightNotice: `© ${new Date().getFullYear()} ${SITE_NAME}`,
  }
}

type LocationSchemaInput = {
  name: string
  summary: string
  image: string
  slug: string
}

export function locationJsonLd(location: LocationSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Architect',
    name: `${SITE_NAME} — arquitectos en ${location.name}`,
    description: location.summary,
    url: `${SITE_URL}/arquitectos-en/${location.slug}/`,
    image: `${SITE_URL}${location.image}`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Agustinas 1022, Ofi. 1004',
      addressLocality: 'Santiago',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    areaServed: { '@type': 'City', name: location.name },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  }
}

type FaqSchemaItem = {
  question: string
  answer: string
}

export function faqJsonLd(items: FaqSchemaItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
