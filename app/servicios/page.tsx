import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/site-data'
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Servicios de arquitectura en Santiago de Chile',
  description:
    'Diseño arquitectónico, visualización 3D, diseño de interiores, remodelación, proyectos comerciales y mobiliario a medida en Santiago y todo Chile.',
  alternates: {
    canonical: `${SITE_URL}/servicios/`,
  },
  openGraph: {
    title: 'Servicios de arquitectura en Santiago de Chile',
    description:
      'Conoce los servicios de MI Arquitectos: diseño, visualización 3D, interiores, remodelación y proyectos comerciales.',
    url: `${SITE_URL}/servicios/`,
    images: [{ url: '/images/project-arquitectura.jpg', alt: 'Servicios de MI Arquitectos' }],
  },
}

export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: 'Servicios', path: '/servicios/' },
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
              <span className="text-primary-foreground">Servicios</span>
            </nav>

            <p className="mt-12 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
              Servicios
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">
              Arquitectura integral, del concepto a la obra
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
              Diseñamos, visualizamos y desarrollamos proyectos residenciales y comerciales en Santiago y todo Chile.
              Cada servicio se adapta a las necesidades, el presupuesto y la etapa de tu proyecto.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.slug} className="group flex bg-card transition-colors duration-500 hover:bg-secondary">
                  <Link href={`/servicios/${service.slug}`} className="flex w-full flex-col p-8 lg:p-10">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm font-semibold text-wood">{service.number}</span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                    </div>
                    <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-balance">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                      {service.description}
                    </p>
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
