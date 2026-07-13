
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import { projects, projectCategories, Project } from '@/lib/site-data'
import ProjectGrid from './ProjectGrid'


export function generateStaticParams() {
  return projectCategories.map((category) => ({
    category: category.slug,
  }))
}


function getCategory(slug: string) {
  return projectCategories.find(
    (category) => category.slug === slug
  )
}


function getProjectsByCategory(slug: string) {
  return projects.filter(
    (project) => project.category === slug
  )
}


export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ category: string }>
  }
): Promise<Metadata> {

  const { category } = await params

  const projectCategory = getCategory(category)


  if (!projectCategory) {
    return {
      title: 'Categoría no encontrada',
    }
  }


  return {
    title: `${projectCategory.title} | Proyectos`,
    description: projectCategory.description,
  }
}



export default async function CategoryPage(
  {
    params,
  }: {
    params: Promise<{ category: string }>
  }
) {

  const { category } = await params


  const projectCategory = getCategory(category)


  if (!projectCategory) {
    notFound()
  }


  const categoryProjects = getProjectsByCategory(category)


  return (
    <>
      <Navbar />

      <main>


        {/* Hero categoría */}

        <section className="relative flex min-h-[65vh] items-end overflow-hidden">

          <div className="absolute inset-0">

            <img
              src={projectCategory.image}
              alt={projectCategory.title}
              className="h-full w-full object-cover"
            />


            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/80
              via-black/40
              to-black/20
            "/>

          </div>



          <div className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-6
            pb-16
            lg:px-10
          ">


            <p className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/70
            ">
              {projectCategory.category}
            </p>


            <h1 className="
              mt-5
              max-w-4xl
              font-display
              text-5xl
              font-semibold
              tracking-tight
              text-white
              sm:text-6xl
            ">
              {projectCategory.title}
            </h1>


            <p className="
              mt-6
              max-w-2xl
              text-lg
              text-white/80
            ">
              {projectCategory.description}
            </p>


          </div>


        </section>



        {/* Introducción */}

        <section className="border-b border-border bg-background py-16">

          <div className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            px-6
            lg:grid-cols-[2fr_1fr]
            lg:px-10
          ">


            <div>

              <p className="
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-wood
              ">
                {projectCategory.intro.eyebrow}
              </p>


              <h2 className="
                mt-5
                font-display
                text-4xl
                font-semibold
                tracking-tight
              ">
                {projectCategory.intro.title}
              </h2>


              <p className="
                mt-6
                max-w-3xl
                leading-8
                text-muted-foreground
              ">
                {projectCategory.intro.description}
              </p>


            </div>



            <div className="
              rounded-3xl
              border
              border-border
              bg-card
              p-8
            ">


              <p className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              ">
                {projectCategory.intro.counterLabel}
              </p>



              <p className="
                mt-5
                font-display
                text-5xl
                font-semibold
              ">
                {categoryProjects.length}
              </p>



              <p className="
                mt-2
                text-muted-foreground
              ">
                {projectCategory.intro.counterDescription}
              </p>


            </div>


          </div>


        </section>



        {/* Lista proyectos */}

        <section className="bg-background py-20 lg:py-28">


          <div className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-10
          ">


            <div className="
              flex
              items-end
              justify-between
              gap-6
            ">


              <h2 className="
                font-display
                text-3xl
                font-semibold
                tracking-tight
              ">
                Proyectos de {projectCategory.title}
              </h2>



              <span className="
                text-sm
                text-muted-foreground
              ">
                {categoryProjects.length} proyectos
              </span>


            </div>

            <ProjectGrid projects={categoryProjects}/>
          </div>
        </section>
      </main>
      
      <Footer />

    </>
  )
}
