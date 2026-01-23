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
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Retraso entre cada línea
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { y: "100%", opacity: 0 }, // Empieza abajo y oculto
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Tu curva "spring" personalizada (ease-spring)
        }
    },
}
export function WorkSection() {
    return (
        <section className="w-full bg-[#EDEBE8] px-4 py-24 md:py-32 lg:px-8">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:gap-24">

                {/* HEADER SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6 text-center"
                >
                    {/* Título enmascarado para efecto "reveal" */}
                    <h2 className="flex flex-col font-display text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-6xl overflow-hidden">
                        <div className="overflow-hidden"> {/* Wrapper necesario para la máscara */}
                            <motion.span variants={itemVariants} className="block">
                                Hi, I&apos;m Christian.
                            </motion.span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span variants={itemVariants} className="block text-primary/80"> {/* Un toque de dorado aquí? */}
                                A holistic product designer.
                            </motion.span>
                        </div>
                    </h2>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl font-sans text-lg text-accent/80 md:text-xl"
                    >

                        I combine a passion for human-centered design with my background
                        in software engineering to craft thoughtful and feasible digital
                        experiences.
                    </motion.p>
                </motion.div>

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