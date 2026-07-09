import { Counter } from '@/components/counter'
import { Reveal } from '@/components/reveal'
import { stats } from '@/lib/site-data'

export function Stats() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center lg:text-left">
              <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
