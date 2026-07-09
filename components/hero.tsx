import { ArrowUpRight, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with subtle cinematic zoom */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Casa moderna minimalista al atardecer con grandes ventanales iluminados"
          className="h-full w-full origin-center object-cover animate-kenburns"
          fetchPriority="high"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.35em] text-primary-foreground/70 [animation-delay:100ms]">
            Estudio de Arquitectura · Santiago, Chile
          </p>
          <h1 className="mt-6 animate-fade-up font-display text-5xl font-semibold leading-[0.98] tracking-tight text-primary-foreground text-balance [animation-delay:220ms] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Transformamos ideas en espacios extraordinarios
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-primary-foreground/85 text-pretty [animation-delay:360ms]">
            Diseño arquitectónico, visualización 3D y desarrollo integral de proyectos.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row [animation-delay:480ms]">
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary-foreground/90"
            >
              Ver Proyectos
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-white/5 px-8 py-4 text-base font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
            >
              Solicitar Reunión
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#proyectos"
        aria-label="Desplazar a proyectos"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/70 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-soft-bounce" />
      </a>
    </section>
  )
}
