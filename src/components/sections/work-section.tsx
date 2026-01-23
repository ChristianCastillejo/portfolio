"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/work/project-card"

// DATA: Extraída para mantener limpio el JSX
const PROJECTS = [
    {
        title: "Inner Green",
        description: "A curated e-commerce experience for artisanal living art.",
        href: "/cases/interior-green",
        imageSrc: "/images/work/work-1.webp", // Asegúrate de mover tus imágenes a public/
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
        <section className="w-full bg-[#EDEBE8] px-4 py-24 md:py-32 lg:px-8">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:gap-24">

                {/* HEADER SECTION */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col font-display text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-6xl"
                    >
                        <span>Hi, I&apos;m Christian.</span>
                        <span>A holistic product designer.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl font-sans text-lg text-accent md:text-xl"
                    >
                        I combine a passion for human-centered design with my background
                        in software engineering to craft thoughtful and feasible digital
                        experiences.
                    </motion.p>
                </div>

                {/* GRID LAYOUT (Reemplaza a S/M/L versions) */}
                {/* Mobile: 1 col | Tablet+: 2 cols */}
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
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