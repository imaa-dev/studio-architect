
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import { Project } from "@/lib/site-data";

export default function ProjectModal({
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
              className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-black/70
                    text-white
                    backdrop-blur-sm
                    transition
                    hover:bg-black/90
                "
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-full overflow-y-auto">
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
                    <Info label="Ubicación" value={project.location} />
                    <Info label="Año" value={project.year} />
                    {project.area && <Info label="Area" value={project.area} />}
                    {project.estructure && <Info label="Estructura" value={project.estructure} />}
                  </dl>
                </div>
                <div className="mt-16 grid gap-4 md:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden bg-muted"
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
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