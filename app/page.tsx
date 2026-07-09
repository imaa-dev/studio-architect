import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { InstagramGallery } from '@/components/instagram'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stats />
        <Services />
        <Process />
        <Testimonials />
        <InstagramGallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
