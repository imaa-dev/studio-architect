import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getLocationsByZone, regions } from '@/lib/locations'
import { breadcrumbJsonLd, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arquitectos en todo Chile | Zonas de atención',
  description:
    'MI Arquitectos atiende proyectos residenciales y comerciales en Santiago, zona centro y sur de Chile. Revisa las ciudades y comunas donde trabajamos.',
  alternates: {
    canonical: `${SITE_URL}/arquitectos-en/`,
  },
  openGraph: {
    title: 'Arquitectos en todo Chile | Zonas de atención',
    description:
      'Diseño arquitectónico, remodelación, interiores y visualización 3D en Santiago y distintas regiones de Chile.',
    url: `${SITE_URL}/arquitectos-en/`,
    images: [{ url: '/images/project-casas.jpg', alt: 'MI Arquitectos en todo Chile' }],
  },
}

export default function LocationsIndexPage() {
  const zones = getLocationsByZone()

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: 'Zonas de atención', path: '/arquitectos-en/' },
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
              <span className="text-primary-foreground">Zonas de atención</span>
            </nav>

            <p className="mt-12 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
              Cobertura
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">
              Arquitectos en todo Chile
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty">
              Nuestro estudio trabaja desde Santiago con proyectos en la zona centro y sur de Chile. Revisa las
              ciudades y comunas con página propia y las regiones donde atendemos de forma remota.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-foreground transition hover:opacity-90"
              >
                Cotizar proyecto
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-white/10"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="space-y-16">
              {zones.map(({ zone, locations }) => (
                <div key={zone}>
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">{zone}</p>
                      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                        Arquitectura en {zone}
                      </h2>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {locations.length} {locations.length === 1 ? 'lugar' : 'lugares'}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/arquitectos-en/${location.slug}`}
                        className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:bg-secondary"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 text-wood" />
                            {location.region}
                          </div>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
                        </div>
                        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                          {location.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {location.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 rounded-3xl border border-border bg-card p-8 lg:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Cobertura nacional</p>
              <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold tracking-tight">
                Desarrollamos proyectos en todo el país, coordinando visitas, profesionales y constructores locales
                según las necesidades de cada obra.
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
