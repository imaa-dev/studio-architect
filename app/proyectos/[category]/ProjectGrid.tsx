'use client'
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { Project } from "@/lib/site-data"
import ProjectModal from "./ProjectModal"

export default function ProjectGrid({
    projects
}: {
    projects: Project[]
}) {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)


    return (
        <>
            <div className="
              mt-10
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            ">

                {projects.map((project) => (

                    <button
                        key={project.title}
                        onClick={() => setSelectedProject(project)}
                        className="
                          group
                          relative
                          flex
                          min-h-[360px]
                          overflow-hidden
                          rounded-3xl
                          bg-muted
                          text-left
                        "
                    >

                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                              absolute
                              inset-0
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-105
                            "
                        />


                        <div className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/80
                          to-transparent
                        "/>


                        <div className="
                          relative
                          mt-auto
                          p-7
                        ">

                            <p className="
                              text-xs
                              uppercase
                              tracking-wider
                              text-white/70
                            ">
                                {project.location}
                            </p>


                            <h3 className="
                              mt-2
                              font-display
                              text-2xl
                              font-semibold
                              text-white
                            ">
                                {project.title}
                            </h3>


                            <span className="
                              mt-4
                              inline-flex
                              items-center
                              gap-2
                              text-sm
                              text-white/80
                            ">
                                Ver proyecto
                                <ArrowUpRight className="h-4 w-4"/>
                            </span>

                        </div>


                    </button>

                ))}

            </div>


            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </>
    )
}


