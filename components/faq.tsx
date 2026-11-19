import { ChevronDown } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import type { FaqItem } from '@/lib/faq'

type FaqProps = {
  items: FaqItem[]
  id?: string
  eyebrow?: string
  title?: string
}

export function Faq({
  items,
  id = 'faq',
  eyebrow = 'Preguntas frecuentes',
  title = 'Resolvemos tus dudas',
}: FaqProps) {
  return (
    <section id={id} className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {items.map((item) => (
            <details key={item.question} className="group px-6 py-5 lg:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-semibold tracking-tight">{item.question}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-wood transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
