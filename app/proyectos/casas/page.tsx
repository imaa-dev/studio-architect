'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { Project, projects } from '@/lib/site-data'
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

export default function RemodelacionesPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const remodelaciones = projects.filter(
    (project) => project.category === 'Residencial'
  )

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/project-remodelacion.png"
              alt="Remodelaciones"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al portafolio
            </Link>

            <span className="mt-8 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm">
              Remodelaciones
            </span>

            <h1 className="mt-5 font-display text-5xl font-semibold text-white lg:text-7xl">
              Casas
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Transformamos espacios existentes mediante soluciones
              arquitectónicas que mejoran su funcionalidad, estética y valor,
              adaptándolos a las nuevas necesidades de quienes los habitan.
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="border-b border-border bg-background py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">
                Proyectos
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                Renovamos espacios para una nueva forma de vivir.
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">
                Cada remodelación busca potenciar el inmueble existente,
                incorporando nuevas distribuciones, materialidades y soluciones
                contemporáneas que respetan su contexto y aumentan su valor.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Portafolio
                </p>

                <p className="mt-5 font-display text-5xl font-semibold">
                  {remodelaciones.length}
                </p>

                <p className="mt-2 text-muted-foreground">
                  proyectos de remodelación ejecutados.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {remodelaciones.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 2) * 120}>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="font-display text-3xl font-semibold">
                            {project.title}
                          </h3>

                          <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </span>

                            <span className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {project.year}
                            </span>
                          </div>
                        </div>

                        <div className="rounded-full border p-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>

                      <p className="mt-6 line-clamp-3 leading-8 text-muted-foreground">
                        {project.summary}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.scope.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      <Footer />
    </>
  )
}
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handler)

    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!project) return null
  console.log(project)
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 top-8 mx-auto max-w-6xl overflow-hidden rounded-t-2xl bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-black/85"
            >
              <X className="h-4 w-4" />
            </button>
            <div ref={scroll} className="h-full overflow-y-auto">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  width={1400}
                  height={1000}
                />
              </div>
              <div className="px-6 py-12 md:px-16 md:py-16">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--wood)]">
                  {project.category}
                </div>
                <h3 className="mt-4 font-display text-5xl md:text-6xl">{project.title}</h3>
                <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
                  <p className="text-lg font-light leading-relaxed text-foreground/80">
                    {project.summary}
                  </p>
                  <dl className="grid grid-cols-2 gap-6 text-sm md:grid-cols-1 md:border-l md:border-border md:pl-10">
                    <Info label="Location" value={project.location} />
                    <Info label="Year" value={project.year} />
                    {project.area && <Info label="Area" value={project.area} />}
                    {project.structure && <Info label="Structure" value={project.structure} />}
                    {project.materials && <Info label="Materials" value={project.materials} />}
                  </dl>
                </div>
                <div className="mt-16 grid gap-4 md:grid-cols-2">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full scale-110 object-cover"
                      loading="lazy"
                      style={{ objectPosition: "right center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-light text-foreground">{value}</dd>
    </div>
  );
}