import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { services, getServiceBySlug } from '@/lib/site-data'

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }))
}

function getOtherServices(slug: string) {
  return services.filter((service) => service.slug !== slug)
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

  return (
    <>
      <Navbar />

      <main>
        {/* Hero servicio */}

        <section className="bg-foreground py-24 text-background lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-background/50">
              <Link href="/#servicios" className="transition hover:text-background">
                Servicios
              </Link>
              <span>/</span>
              <span className="text-background">{service.title}</span>
            </nav>

            <p className="mt-10 font-display text-sm font-semibold tracking-[0.3em] text-background/60">
              {service.number}
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight sm:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
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
                    Número
                  </dt>
                  <dd className="mt-2 font-light">{service.number}</dd>
                </div>
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

        {/* Otros servicios */}

        <section className="border-t border-border bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                  Continuar explorando
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                  Otros servicios
                </h2>
              </div>

              <Link
                href="/#servicios"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Ver todos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="group flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-secondary"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-semibold text-wood">
                      {item.number}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>

                  <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
