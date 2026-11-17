import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import {
  projects,
  projectCategories,
  getProjectSlug,
  getProjectBySlug,
  type Project,
} from '@/lib/site-data'
import ProjectGrid from '../ProjectGrid'

export function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    project: getProjectSlug(project),
  }))
}

function getCategory(slug: string) {
  return projectCategories.find((category) => category.slug === slug)
}

function getRelatedProjects(category: string, slug: string) {
  return projects
    .filter(
      (project) =>
        project.category === category && getProjectSlug(project) !== slug
    )
    .slice(0, 3)
}

function getProjectHeading(
  project: Project,
  category: string,
  categoryLabel: string,
  categoryTitle: string
) {
  if (category === 'diseno-de-viviendas') {
    return `${categoryTitle} ${project.title.toLowerCase()}`
  }

  if (category === 'remodelaciones-de-viviendas') {
    const singularLabel = categoryLabel.replace(/es$/, '').replace(/s$/, '')

    return `${singularLabel} de ${project.title.toLowerCase()}`
  }

  return project.title
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; project: string }>
}): Promise<Metadata> {
  const { category, project: projectSlug } = await params

  const projectCategory = getCategory(category)
  const project = getProjectBySlug(category, projectSlug)

  if (!projectCategory || !project) {
    return { title: 'Proyecto no encontrado' }
  }

  const description = project.summary || projectCategory.description

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} | ${projectCategory.title}`,
      description,
      images: [{ url: project.image, alt: project.title }],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; project: string }>
}) {
  const { category, project: projectSlug } = await params

  const projectCategory = getCategory(category)
  const project = getProjectBySlug(category, projectSlug)

  if (!projectCategory || !project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(category, projectSlug)
  const heading = getProjectHeading(
    project,
    category,
    projectCategory.category,
    projectCategory.headingTitle ?? projectCategory.title
  )

  return (
    <>
      <Navbar />

      <main>
        {/* Hero proyecto */}

        <section className="relative flex min-h-[75vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              <Link href="/#proyectos" className="transition hover:text-white">
                Proyectos
              </Link>
              <span>/</span>
              <Link
                href={`/proyectos/${category}`}
                className="transition hover:text-white"
              >
                {projectCategory.title}
              </Link>
              <span>/</span>
              <span className="text-white">{project.title}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm uppercase tracking-[0.3em] text-white/70">
              {projectCategory.detailCategory && (
                <span>{projectCategory.detailCategory}</span>
              )}
              <span>{project.location || projectCategory.category}</span>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {heading}
            </h1>

            {project.summary && (
              <p className="mt-6 max-w-2xl text-lg text-white/80">
                {project.summary}
              </p>
            )}
          </div>
        </section>

        {/* Volver a la categoría */}

        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href={`/proyectos/${category}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a {projectCategory.title}
            </Link>
          </div>
        </section>

        {/* Ficha del proyecto */}

        <section className="border-b border-border bg-background py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                Proyecto
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                {project.title}
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
                {project.summary || projectCategory.description}
              </p>

              {project.scope.length > 0 && (
                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Alcance
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-4 py-2 text-sm text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Ficha técnica
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-1">
                <Info label="Ubicación" value={project.location} />
                <Info label="Año" value={project.year} />
                <Info label="Superficie" value={project.area} />
                <Info label="Estructura" value={project.estructure} />
              </dl>
            </div>
          </div>
        </section>

        {/* Galería */}

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Galería
              </h2>

              <span className="text-sm text-muted-foreground">
                {project.gallery.length} imágenes
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={`${image}-${index}`}
                  className={`group relative overflow-hidden bg-muted ${
                    index === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos relacionados */}

        <section className="border-t border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                  Continuar explorando
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                  Más proyectos de {projectCategory.title}
                </h2>
              </div>

              <Link
                href={`/proyectos/${category}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Ver todos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {relatedProjects.length > 0 && (
              <ProjectGrid projects={relatedProjects} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 font-light text-foreground">{value || '—'}</dd>
    </div>
  )
}
