import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/site-data'

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-foreground py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/50">Metodología</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Nuestro proceso de trabajo
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70 text-pretty">
            Un método claro y transparente que te acompaña en cada etapa, desde la primera conversación hasta la entrega
            final.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={(i % 5) * 80}
              className="group flex flex-col bg-foreground p-8 transition-colors duration-500 hover:bg-white/[0.04]"
            >
              <span className="font-display text-5xl font-semibold tracking-tight text-primary-foreground/25 transition-colors duration-500 group-hover:text-wood">
                {step.number}
              </span>
              <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
