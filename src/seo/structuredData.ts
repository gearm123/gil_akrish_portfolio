import { education, projects, research, site } from '../data/site'
import { defaultSeo, getSiteUrl, toAbsoluteUrl } from '../constants/seoConfig'

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: getSiteUrl(),
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Tel Aviv District',
      addressCountry: 'IL',
    },
    jobTitle: 'Software Engineer and AI Researcher',
    description: site.tagline,
    sameAs: [site.links.github, site.links.linkedin],
    alumniOf: education.map((entry) => ({
      '@type': 'EducationalOrganization',
      name: entry.school,
    })),
    knowsAbout: [
      'Deep learning',
      'Medical image segmentation',
      'Histopathology',
      'Attention U-Net',
      'Transfer learning',
      'AI research',
      'Android',
      'iOS',
      'Kotlin',
      'Swift',
      'React',
      'TypeScript',
      'Mobile development',
      'OAuth',
      'Web frontends',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Israel',
      },
    },
  }
}

export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${site.name} Portfolio`,
    url: getSiteUrl(),
    description: defaultSeo.description,
    inLanguage: 'en',
    publisher: {
      '@type': 'Person',
      name: site.name,
    },
  }
}

export function buildProfilePageJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: defaultSeo.title,
    url: getSiteUrl(),
    description: defaultSeo.description,
    mainEntity: {
      '@type': 'Person',
      name: site.name,
      url: getSiteUrl(),
    },
    about: {
      '@type': 'Person',
      name: site.name,
    },
  }
}

export function buildItemListJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Selected projects by Gil Akrish',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: project.href,
      description: project.summary,
    })),
  }
}

export function buildThesisJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    name: research.thesisTitle,
    author: {
      '@type': 'Person',
      name: site.name,
    },
    description: research.summary,
    about: research.methods,
    creativeWorkStatus: research.status,
    isPartOf: {
      '@type': 'Periodical',
      name: 'Histopathology',
    },
    publisher: {
      '@type': 'CollegeOrUniversity',
      name: research.school,
    },
    url: research.repoUrl,
  }
}

export function getAllJsonLd(): Record<string, unknown>[] {
  return [
    buildPersonJsonLd(),
    buildWebsiteJsonLd(),
    buildProfilePageJsonLd(),
    buildThesisJsonLd(),
    buildItemListJsonLd(),
  ]
}

export function getDefaultOgImageUrl(): string {
  return toAbsoluteUrl(defaultSeo.ogImagePath)
}
