import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { services, projects, getServiceBySlug } from '@/lib/site-data'
import ProjectGrid from '../../proyectos/[category]/ProjectGrid'

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

function getOtherServices(slug: string) {
  return services.filter((service) => service.slug !== slug)
}

function getRelatedProjects(projectCategory: string) {
  return projects
    .filter((project) => project.category === projectCategory)
    .slice(0, 3)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params

  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Servicio no encontrado' }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.image, alt: service.title }],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params

  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const otherServices = getOtherServices(slug)
  const relatedProjects = getRelatedProjects(service.projectCategory)

  return (
    <>
      <Navbar />

      <main>
        {/* Hero servicio */}

        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              <Link href="/#servicios" className="transition hover:text-white">
                Servicios
              </Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>

            <h1 className="mt-10 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {service.description}
            </p>
          </div>
        </section>

        {/* Volver a servicios */}

        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>
          </div>
        </section>

        {/* Detalle del servicio */}

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                Servicio
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                {service.title}
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Ficha
              </p>

              <dl className="mt-6 grid gap-6 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Nombre
                  </dt>
                  <dd className="mt-2 font-light">{service.title}</dd>
                </div>
              </dl>

              <Link
                href="/#contacto"
                className="mt-8 inline-flex items-center gap-2 text-sm text-wood transition hover:opacity-70"
              >
                Solicitar este servicio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Continuar explorando */}

        <section className="border-t border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                  Continuar explorando
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                  Proyectos de {service.title}
                </h2>
              </div>

              <Link
                href="/#proyectos"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Ver todos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {relatedProjects.length > 0 && (
              <ProjectGrid projects={relatedProjects} />
            )}

            <div className="mt-16 border-t border-border pt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Otros servicios
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/servicios/${item.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-sm transition-colors duration-500 hover:bg-secondary"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
