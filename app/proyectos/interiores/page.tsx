import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Calendar, MapPin } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/site-data'

export default function InterioresPage() {
  const interiores = projects.filter(
    (project) => project.category === 'Diseño de Interiores'
  )

  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">

          <div className="absolute inset-0">

            <img
              src="/images/project-interior.png"
              alt="Diseño de interiores"
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

              Interiorismo y mobiliario

            </span>


            <h1 className="mt-5 font-display text-5xl font-semibold text-white lg:text-7xl">

              Interiores

            </h1>


            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">

              Diseñamos espacios interiores personalizados donde la
              arquitectura, el mobiliario y la materialidad se integran para
              crear ambientes funcionales, elegantes y con identidad propia.

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

                Espacios interiores diseñados para reflejar la esencia de cada cliente.

              </h2>


              <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">

                Desarrollamos proyectos de interiorismo y mobiliario a medida,
                creando soluciones personalizadas que combinan estética,
                funcionalidad y una selección cuidadosa de materiales.

              </p>

            </Reveal>



            <Reveal delay={100}>

              <div className="rounded-3xl border border-border bg-card p-8">


                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">

                  Portafolio

                </p>


                <p className="mt-5 font-display text-5xl font-semibold">

                  {interiores.length}

                </p>


                <p className="mt-2 text-muted-foreground">

                  proyectos de interiorismo desarrollados.

                </p>


              </div>

            </Reveal>


          </div>

        </section>



        {/* Grid */}
        <section className="bg-background py-20 lg:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">


            <div className="grid gap-8 lg:grid-cols-2">


              {interiores.map((project, index) => (

                <Reveal
                  key={project.slug}
                  delay={(index % 2) * 120}
                >


                  <Link

                    href={`/proyectos/interiores/${project.slug}`}

                    className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"

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