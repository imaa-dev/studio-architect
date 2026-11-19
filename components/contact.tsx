'use client'

import { useEffect, useState, type FormEvent } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Check,
  ArrowRight,
  ArrowUpRight,
  Ruler,
  Building2,
  X,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { contactInfo, services } from '@/lib/site-data'

const details = [
  { icon: MapPin, label: 'Dirección', value: contactInfo.address, href: undefined },
  { icon: Phone, label: 'Celular', value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
]

const quoteLinks: {
  title: string
  description: string
  subject: string
  icon: LucideIcon
}[] = [
  {
    title: 'Fabricación de muebles',
    description: 'Cotiza mobiliario diseñado y fabricado a medida para tu espacio.',
    subject: 'Fabricación de muebles a medida',
    icon: Ruler,
  },
  {
    title: 'Servicios de arquitectura',
    description: 'Cotiza diseño arquitectónico, remodelación o visualización 3D.',
    subject: 'Diseño de Arquitectura',
    icon: Building2,
  },
]

type QuoteLink = (typeof quoteLinks)[number]

export function Contact() {
  const [selectedQuote, setSelectedQuote] = useState<QuoteLink | null>(null)

  return (
    <section id="contacto" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Contacto</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Conversemos sobre tu proyecto
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {quoteLinks.map((quote) => (
            <button
              key={quote.title}
              type="button"
              onClick={() => setSelectedQuote(quote)}
              className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-wood hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-wood">
                <quote.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Cotización</p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{quote.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{quote.description}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-wood" />
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-background p-8">
            <ul className="space-y-7">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-wood">
                    <d.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-0.5 block font-medium tracking-tight hover:text-wood">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium tracking-tight">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Ubicación de MI Arquitectos en Santiago"
              src="https://www.google.com/maps?q=Av.%20Agustinas%201022,%20Santiago,%20Chile&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-full min-h-[280px] w-full grayscale-[0.3]"
            />
          </Reveal>
        </div>
      </div>

      <QuoteModal quote={selectedQuote} onClose={() => setSelectedQuote(null)} />
    </section>
  )
}

function ContactForm({
  defaultSubject,
  idPrefix = 'contact',
  className = '',
}: {
  defaultSubject?: string
  idPrefix?: string
  className?: string
}) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      })

      const text = await response.text()

      if (!response.ok) {
        throw new Error(text)
      }

      setSent(true)
      form.reset()

      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      setError('No fue posible enviar el mensaje.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col rounded-3xl border border-border bg-background p-8 lg:p-10',
        className
      )}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${idPrefix}-name`}
          label="Tu nombre"
          type="text"
          placeholder="Nombre y apellido"
        />
        <Field
          id={`${idPrefix}-email`}
          label="Tu email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
        />
      </div>
      <div className="mt-6">
        <label htmlFor={`${idPrefix}-subject`} className="text-sm font-medium text-muted-foreground">
          Asunto
        </label>
        <select
          id={`${idPrefix}-subject`}
          name="subject"
          required
          defaultValue={defaultSubject ?? ''}
          className="mt-2 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-[15px] outline-none transition-colors focus:border-foreground/40 focus:bg-background"
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Consulta general">Consulta general</option>
        </select>
      </div>
      <div className="mt-6 flex flex-1 flex-col">
        <label htmlFor={`${idPrefix}-message`} className="text-sm font-medium text-muted-foreground">
          Mensaje
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={6}
          placeholder="Cuéntanos sobre tu proyecto..."
          className="mt-2 w-full flex-1 resize-none rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-background"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
      >
        {loading ? (
          'Enviando...'
        ) : sent ? (
          <>
            <Check className="h-5 w-5" />
            Mensaje enviado
          </>
        ) : (
          <>
            Enviar mensaje
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      {error && (
        <p className="mt-4 text-center text-sm text-red-600">{error}</p>
      )}
    </form>
  )
}

function QuoteModal({
  quote,
  onClose,
}: {
  quote: QuoteLink | null
  onClose: () => void
}) {
  const [activeQuote, setActiveQuote] = useState<QuoteLink>(
    quote ?? quoteLinks[0]
  )

  useEffect(() => {
    if (quote) setActiveQuote(quote)
  }, [quote])

  useEffect(() => {
    if (!quote) return

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [quote, onClose])

  if (!quote) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-background p-6 lg:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar cotización"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-foreground hover:text-background"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-wood">Cotización</p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          Solicita tu cotización
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {quoteLinks.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveQuote(item)}
              className={cn(
                'flex items-center gap-3 rounded-2xl border p-4 text-left transition-colors duration-300',
                activeQuote.title === item.title
                  ? 'border-wood bg-secondary'
                  : 'border-border bg-background hover:bg-secondary/60'
              )}
            >
              <item.icon className="h-5 w-5 shrink-0 text-wood" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-tight">{item.title}</span>
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {activeQuote.description}
        </p>

        <ContactForm
          key={activeQuote.title}
          defaultSubject={activeQuote.subject}
          idPrefix="quote"
          className="mt-6 border-0 p-0 lg:p-0"
        />
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id.replace(/^contact-|^quote-/, '')}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-background"
      />
    </div>
  )
}
