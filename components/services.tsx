import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/site-data'

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Servicios</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Un enfoque integral, del concepto a la obra
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Diseñamos y desarrollamos espacios que combinan creatividad, funcionalidad y estrategia para potenciar la
            identidad de cada cliente y marca, asegurando soluciones personalizadas y de alto impacto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.number}
              as="article"
              delay={(i % 3) * 90}
              className="group relative flex flex-col bg-card p-8 transition-colors duration-500 hover:bg-secondary lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm font-semibold text-wood">{service.number}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-balance">{service.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
