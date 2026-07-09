import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, MapPin, Calendar } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site-data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Proyecto no encontrado' }
  return {
    title: `${project.title} · ${project.category}`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>
            <span className="mt-8 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              {project.category}
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1] tracking-tight text-primary-foreground text-balance sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-6 text-primary-foreground/80">
              <span className="inline-flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" /> {project.location}
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" /> {project.year}
              </span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">El proyecto</p>
                <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                  {project.summary}
                </p>
              </Reveal>
              <Reveal delay={100} className="lg:border-l lg:border-border lg:pl-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Alcance</p>
                <ul className="mt-5 space-y-3">
                  {project.scope.map((item) => (
                    <li key={item} className="border-b border-border pb-3 font-display text-lg font-medium tracking-tight">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-background pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-5 md:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal
                  key={src + i}
                  delay={(i % 2) * 100}
                  className={i === 0 ? 'md:col-span-2' : ''}
                >
                  <div className="overflow-hidden rounded-3xl bg-muted">
                    <img
                      src={src || '/placeholder.svg'}
                      alt={`${project.title} — imagen ${i + 1}`}
                      className={`w-full object-cover ${i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other projects */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Otros proyectos
              </h2>
              <Link
                href="/#proyectos"
                className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                Ver todos <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <Reveal as="article" key={p.slug} delay={i * 90}>
                  <Link
                    href={`/proyectos/${p.slug}`}
                    className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl bg-muted"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={p.image || '/placeholder.svg'}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="relative mt-auto p-7">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/70">{p.category}</span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">{p.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
