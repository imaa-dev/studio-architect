import { InstagramIcon } from '@/components/social-icons'
import { Reveal } from '@/components/reveal'
import { contactInfo } from '@/lib/site-data'

type GalleryItem = {
  image: string
  instagramUrl: string
}

const gallery: GalleryItem[] = [
  {
    image: '/images/remodelaciones/casamelipilla/Frontis Melipilla.png',
    instagramUrl: 'https://www.instagram.com/p/DPTWAfeDv8j/?img_index=1',
  },
  {
    image: '/images/comerciales-oficinas/cliniplastic/3.jpeg',
    instagramUrl: 'https://www.instagram.com/miarquitectos_/p/DV2I92kDv1l/',
  },
  {
    image: '/images/remodelaciones/casalitueche/01.png',
    instagramUrl: 'https://www.instagram.com/p/DPXduAtjhUh/?img_index=1',
  },
  {
    image: '/images/casas/casamalalcahuello/r1.jpg',
    instagramUrl: 'https://www.instagram.com/p/DHy8od2JPtd/?img_index=1',
  },
  {
    image: '/images/casas/casalaestrella/2.jpg',
    instagramUrl: 'https://www.instagram.com/p/DHm2tKdOi4j/?img_index=1',
  },
  {
    image: '/images/casas/casamostazal/28.jpg',
    instagramUrl: 'https://www.instagram.com/p/DHtuMxYOPs7/?img_index=1',
  },
]
export function InstagramGallery() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Síguenos</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Nuestro trabajo en Instagram
            </h2>
          </div>
          <a
            href={contactInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
          >
            <InstagramIcon className="h-4 w-4" />
            @miarquitectos_
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.map((item, i) => (
            <a
              key={item.image}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver publicación en Instagram"
            >
              <Reveal
                delay={(i % 6) * 60}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
              >
                <img
                  src={item.image || '/placeholder.svg'}
                  alt="Proyecto de MI Arquitectos"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/40">
                  <InstagramIcon className="h-6 w-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
