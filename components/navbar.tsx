'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    const update = () => setIsDesktop(media.matches)

    update()

    media.addEventListener('change', update)

    return () => media.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',

        scrolled || open
          ? 'bg-background border-b border-border shadow-[0_1px_30px_-15px_rgba(0,0,0,0.3)]'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/#inicio" aria-label="MI Arquitectos - Inicio">
          <Logo
            variant={scrolled || open ? 'dark' : 'light'}
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  scrolled || open
                    ? "text-foreground"
                    : "text-primary-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#contacto"
          className={cn(
            'hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 lg:inline-flex hover:scale-[1.03]',
            scrolled
              ? 'bg-foreground text-background hover:bg-foreground/90'
              : 'bg-primary-foreground text-foreground hover:bg-primary-foreground/90',
          )}
        >
          Solicitar Reunión
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden',
            scrolled || open || !isDesktop
              ? 'text-foreground'
              : 'text-primary-foreground',
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-20 z-40 origin-top bg-background transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <ul className="flex flex-col gap-2 px-6 pt-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-display text-3xl font-medium tracking-tight text-foreground"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-8">
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-4 text-base font-medium text-background"
          >
            Solicitar Reunión
          </a>
        </div>
      </div>
    </header>
  )
}
