import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
          <img
            src="/images/project-arquitectura.png"
            alt="Proyecto arquitectónico moderno al atardecer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative flex flex-col items-start gap-8 px-8 py-16 sm:px-14 sm:py-24 lg:px-20">
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
              ¿Tienes un proyecto en mente? Hagámoslo realidad.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Agenda una reunión sin costo y conversemos sobre cómo transformar tus ideas en espacios extraordinarios.
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:scale-[1.03]"
            >
              Solicitar Reunión
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
