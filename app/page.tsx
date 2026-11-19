import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { InstagramGallery } from '@/components/instagram'
import { Faq } from '@/components/faq'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { generalFaqs } from '@/lib/faq'
import { faqJsonLd, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: 'MI Arquitectos | Diseño arquitectónico y visualización 3D',
    description:
      'Transformamos ideas en espacios extraordinarios. Diseño arquitectónico, visualización 3D y desarrollo integral de proyectos.',
    url: `${SITE_URL}/`,
    type: 'website',
    locale: 'es_CL',
    siteName: 'MI Arquitectos',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1024,
        height: 1024,
        alt: 'MI Arquitectos, estudio de arquitectura en Santiago de Chile',
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(generalFaqs)) }}
      />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stats />
        <Services />
        <Process />
        {/*<Testimonials />*/}
        <InstagramGallery />
        {/*<CTA />*/}
        {/*<Faq*/}
        {/*  items={generalFaqs}*/}
        {/*  title="Preguntas frecuentes sobre nuestros proyectos"*/}
        {/*/>*/}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
