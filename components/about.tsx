import { Compass, Eye, Gem } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const values = [
  {
    icon: Compass,
    title: 'Misión',
    text: 'Transformar ideas en espacios únicos que responden a las necesidades del cliente y potencian su estilo de vida.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser un referente en arquitectura funcional y sostenible, integrando diseño, tecnología y estrategia.',
  },
  {
    icon: Gem,
    title: 'Valores',
    text: 'Creatividad, rigor técnico, cercanía y un compromiso absoluto con la calidad en cada etapa del proyecto.',
  },
]

const timeline = [
  { year: '2019', text: 'Nace MI Arquitectos con los primeros proyectos residenciales.' },
  { year: '2021', text: 'Incorporamos visualización 3D avanzada al proceso de diseño.' },
  { year: '2023', text: 'Expansión a proyectos comerciales, oficinas e industria.' },
  { year: '2025', text: 'Consolidación como estudio integral de arquitectura y diseño.' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/founder.png"
                alt="Matías Ignacio Alfaro, Arquitecto y fundador de MI Arquitectos"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-background/95 p-6 shadow-xl backdrop-blur-sm sm:left-8 sm:right-auto sm:max-w-xs">
              <p className="font-display text-lg font-semibold tracking-tight">Matías Ignacio Alfaro</p>
              <p className="mt-1 text-sm text-wood">Arquitecto · Fundador & CEO</p>
            </div>
          </Reveal>

          {/* Story */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Sobre nosotros</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
                Diseño con propósito, ejecutado con precisión
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                En MI Arquitectos transformamos ideas en espacios únicos que no solo responden a las necesidades del
                cliente, sino que también potencian su estilo de vida. Nos especializamos en diseño de vivienda,
                espacios comerciales, oficinas y diseño de ambientes, ofreciendo un acompañamiento integral en cada
                etapa del proyecto, desde la conceptualización hasta la construcción.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 90} className="rounded-2xl border border-border bg-background p-6">
                  <value.icon className="h-6 w-6 text-wood" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <Reveal className="mt-20 border-t border-border pt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 90} className="relative">
                <span className="font-display text-3xl font-semibold tracking-tight text-wood">{item.year}</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
