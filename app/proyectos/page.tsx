import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { projectCategories, projects } from '@/lib/site-data'
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Proyectos de arquitectura y remodelación en Santiago',
  description:
    'Portafolio de MI Arquitectos: casas, remodelaciones, proyectos comerciales, diseño de interiores y visualización 3D en Santiago y todo Chile.',
  alternates: {
    canonical: `${SITE_URL}/proyectos/`,
  },
  openGraph: {
    title: 'Proyectos de arquitectura y remodelación en Santiago',
    description:
      'Casas, remodelaciones, proyectos comerciales, interiores y visualización 3D desarrollados por MI Arquitectos.',
    url: `${SITE_URL}/proyectos/`,
    images: [{ url: '/images/project-casas.jpg', alt: 'Proyectos de MI Arquitectos' }],
  },
}

export default function ProjectsIndexPage() {
  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: 'Proyectos', path: '/proyectos/' },
            ])
          ),
        }}
      />

      <main>
        <section className="bg-foreground py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
              <Link href="/" className="transition hover:text-primary-foreground">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-primary-foreground">Proyectos</span>
            </nav>

            <p className="mt-12 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
              Portafolio
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">
              Proyectos de arquitectura, remodelación e interiores
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
              {projects.length} proyectos residenciales, comerciales y de visualización desarrollados en Santiago y
              distintas regiones de Chile. Explora por categoría y revisa el detalle de cada obra.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {projectCategories.map((category) => (
                <article key={category.slug}>
                  <Link
                    href={`/proyectos/${category.slug}`}
                    className="group relative flex min-h-[360px] overflow-hidden rounded-3xl bg-muted shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    </div>

                    <div className="relative mt-auto flex w-full items-end justify-between gap-6 p-8">
                      <div className="max-w-md">
                        <h2 className="font-display text-3xl font-semibold text-white">
                          {category.cardTitle ?? category.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-white/75">
                          {category.description}
                        </p>
                        <p className="mt-5 text-sm font-medium text-white/90">
                          {category.total} proyectos
                        </p>
                      </div>

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
