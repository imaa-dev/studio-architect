'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Check, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { contactInfo } from '@/lib/site-data'

const details = [
  { icon: MapPin, label: 'Dirección', value: contactInfo.address, href: undefined },
  { icon: Phone, label: 'Celular', value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contacto" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-wood">Contacto</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Conversemos sobre tu proyecto
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info + map */}
          <Reveal className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-background p-8">
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
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Ubicación de MI Arquitectos en Santiago"
                src="https://www.google.com/maps?q=Av.%20Agustinas%201022,%20Santiago,%20Chile&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.3]"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="nombre" label="Tu nombre" type="text" placeholder="Nombre y apellido" />
                <Field id="email" label="Tu email" type="email" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div className="mt-6">
                <Field id="asunto" label="Asunto" type="text" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <label htmlFor="mensaje" className="text-sm font-medium text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="mt-2 w-full flex-1 resize-none rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-background"
                />
              </div>
              <button
                type="submit"
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all duration-300 hover:scale-[1.02]"
              >
                {sent ? (
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
            </form>
          </Reveal>
        </div>
      </div>
    </section>
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
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:bg-background"
      />
    </div>
  )
}
