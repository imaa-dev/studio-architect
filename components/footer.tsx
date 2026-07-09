import { Logo } from '@/components/logo'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/social-icons'
import { contactInfo, navLinks } from '@/lib/site-data'

const socials = [
  { icon: FacebookIcon, href: contactInfo.social.facebook, label: 'Facebook' },
  { icon: InstagramIcon, href: contactInfo.social.instagram, label: 'Instagram' },
  { icon: LinkedinIcon, href: contactInfo.social.linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-primary-foreground/60 text-pretty">
              Estudio de arquitectura en Santiago de Chile. Transformamos ideas en espacios extraordinarios a través del
              diseño, la visualización 3D y el desarrollo integral de proyectos.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-white/40 hover:text-primary-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/40">Navegación</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/40">Contacto</p>
            <ul className="mt-6 space-y-3 text-[15px] text-primary-foreground/70">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phoneHref}`} className="transition-colors hover:text-primary-foreground">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-primary-foreground">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} MI Arquitectos. Todos los derechos reservados.</p>
          <p>Santiago, Chile</p>
        </div>
      </div>
    </footer>
  )
}
