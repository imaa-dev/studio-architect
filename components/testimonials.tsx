import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Testimonios</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={i * 100}
              className="flex flex-col rounded-3xl border border-border bg-background p-8 lg:p-10"
            >
              <Quote className="h-8 w-8 text-wood" strokeWidth={1.5} />
              <p className="mt-6 flex-1 text-lg leading-relaxed text-foreground/90 text-pretty">
                {'"'}
                {item.quote}
                {'"'}
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display font-semibold tracking-tight">{item.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
