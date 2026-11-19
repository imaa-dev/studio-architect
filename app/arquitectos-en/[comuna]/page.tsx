import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Check } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/site-data'
import { getLocationBySlug, locations, type Location } from '@/lib/locations'
import { breadcrumbJsonLd, locationJsonLd, SITE_URL } from '@/lib/seo'

export function generateStaticParams() {
  return locations.map((location) => ({ comuna: location.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comuna: string }>
}): Promise<Metadata> {
  const { comuna } = await params
  const location = getLocationBySlug(comuna)

  if (!location) {
    return { title: 'Comuna no encontrada' }
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/arquitectos-en/${location.slug}/`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${SITE_URL}/arquitectos-en/${location.slug}/`,
      images: [{ url: location.image, alt: `Arquitectos en ${location.name}` }],
    },
  }
}

function getLocationServices(location: Location) {
  return location.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service))
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ comuna: string }>
}) {
  const { comuna } = await params
  const location = getLocationBySlug(comuna)

  if (!location) {
    notFound()
  }

  const locationServices = getLocationServices(location)
  const sameZone = locations.filter(
    (item) => item.zone === location.zone && item.slug !== location.slug
  )
  const relatedLocations = sameZone.length > 0 ? sameZone : locations.filter((item) => item.slug !== location.slug).slice(0, 4)

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd(location)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: `Arquitectos en ${location.name}`, path: `/arquitectos-en/${location.slug}/` },
            ])
          ),
        }}
      />

      <main>
        <section className="relative flex min-h-[65vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={location.image}
              alt={`Arquitectos en ${location.name}`}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10">
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              <Link href="/" className="transition hover:text-white">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-white">Arquitectos en {location.name}</span>
            </nav>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
              {location.region} · {location.zone}
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Arquitectos en {location.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {location.summary}
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.6fr_1fr] lg:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                Estudio de arquitectura en {location.name}
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance">
                Diseño y proyectos pensados para {location.name}
              </h2>

              {location.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-6 max-w-3xl leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Qué hacemos en {location.name}
              </p>
              <ul className="mt-6 space-y-4">
                {location.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-wood" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Servicios</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                  Servicios de arquitectura en {location.name}
                </h2>
              </div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Ver todos los servicios
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {locationServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:bg-secondary"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-sm font-semibold text-wood">{service.number}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                  Otras zonas de atención
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {relatedLocations.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/arquitectos-en/${item.slug}`}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-foreground/30"
                    >
                      Arquitectos en {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/arquitectos-en"
                    className="rounded-full border border-foreground/20 bg-foreground px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90"
                  >
                    Ver todas las zonas
                  </Link>
                </div>
              </div>

              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-primary-foreground transition hover:opacity-90"
              >
                Cotizar proyecto en {location.name}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
