"use client"

import { ProjectCard } from "@/components/work/project-card"

const PROJECTS = [
    {
        title: "Inner Green",
        description: "A curated e-commerce experience for artisanal living art.",
        href: "/cases/interior-green",
        imageSrc: "/images/work/work-1.webp",
    },
    {
        title: "Kashmir Shaiva Institute",
        description: "A unified website for the teachings and global community.",
        href: "/cases/ksi",
        imageSrc: "/images/work/work-2.webp",
    },
    {
        title: "Respiro",
        description: "An app for setting social media limits and offering positive alternatives.",
        href: "/cases/respiro",
        imageSrc: "/images/work/work-3.webp",
    },
    {
        title: "Sierra Stars",
        description: "A platform for an observatory complex offering remote telescope hosting.",
        href: "/",
        imageSrc: "/images/work/work-4.webp",
        isComingSoon: true,
    },
]

export function WorkSection() {
    return (
        <section className="w-full px-4 pb-24 md:pb-32 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
                {/* Título opcional de la sección, si quieres separar visualmente */}
                {/* <h3 className="mb-8 font-display text-2xl text-accent">Selected Work</h3> */}

                <div className="grid w-full grid-cols-1 gap-8 items-start md:grid-cols-2 md:gap-12 isolation-isolate">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            index={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}