'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { projects, projectCategories } from '@/lib/site-data'

export function Projects() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="proyectos" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Portafolio</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Proyectos destacados
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Desarrollamos e implementamos proyectos arquitectónicos adaptados al cliente, empresa y marca de cualquier
            industria, creando espacios funcionales, innovadores y alineados con su identidad.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectCategories.map((category, i) => (
            <Reveal
              key={category.slug}
              as="article"
              delay={(i % 2) * 100}
            >
              <Link
                href={`/proyectos/${category.slug}`}
                className="group relative flex min-h-[360px] overflow-hidden rounded-3xl bg-muted shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Imagen */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="relative mt-auto flex w-full items-end justify-between gap-6 p-8">
                  <div className="max-w-md">
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                      Categoría
                    </span>

                    <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                      {category.title}
                    </h3>

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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
