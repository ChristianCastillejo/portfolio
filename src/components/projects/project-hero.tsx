"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"
import { Globe, Code2, Layers, Figma, Database, Cpu } from "lucide-react"

const TECH_ICONS: Record<string, any> = {
    "globe": Globe,
    "code": Code2,
    "layers": Layers,
    "figma": Figma,
    "database": Database,
    "cpu": Cpu,
}

interface ProjectHeroProps {
    project: ProjectCaseStudy
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
    return (
        <section className="w-full max-w-[1400px] mx-auto p-4 md:p-6 h-auto md:h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 h-full min-h-[800px] md:min-h-0">

                {/* 1. Main Video/Image Placeholder - Ocupa la mayoría del espacio */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-3 md:row-span-3 bg-neutral-100 rounded-3xl border border-neutral-200 overflow-hidden relative group"
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-neutral-400 text-sm uppercase tracking-widest">Video Loop Placeholder</span>
                    </div>
                    {/* Simulación de UI */}
                    <div className="absolute top-6 left-6 right-6 h-full bg-white rounded-t-xl shadow-2xl translate-y-full group-hover:translate-y-4 transition-transform duration-700 ease-[0.16,1,0.3,1] border border-neutral-100" />
                </motion.div>

                {/* 2. Problem Statement */}
                <div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl border border-neutral-200 p-8 flex flex-col justify-center">
                    <span className="font-mono text-xs text-orange-500 font-bold mb-3 uppercase tracking-wider">The Challenge</span>
                    <p className="font-sans text-lg leading-snug font-medium text-pretty text-neutral-800">
                        {project.tagline}
                    </p>
                </div>

                {/* 3. Tech Stack */}
                <div className="md:col-span-1 md:row-span-1 bg-neutral-900 text-white rounded-3xl border border-neutral-800 p-8 flex flex-col justify-between">
                    <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-wider">Stack</span>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech) => {
                            // 2. RESOLVER EL ICONO
                            // Buscamos en el diccionario. Si no existe, no renderiza nada o un fallback.
                            const IconComponent = TECH_ICONS[tech.iconKey]

                            return (
                                <div key={tech.name} className="flex items-center gap-2 text-neutral-300" title={tech.name}>
                                    {IconComponent && <IconComponent size={20} />}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* 4. Actions */}
                <div className="md:col-span-1 md:row-span-1 bg-orange-50 rounded-3xl border border-orange-100 p-8 flex flex-col justify-between group cursor-pointer hover:bg-orange-100 transition-colors">
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-wider">Actions</span>
                        <ArrowUpRight className="text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href={project.links.live} target="_blank" className="w-full bg-orange-600 text-white font-medium py-3 px-4 rounded-xl text-center hover:bg-orange-700 transition-colors">
                            View Live
                        </a>
                        <a href={project.links.repo} target="_blank" className="w-full border border-orange-200 text-orange-800 font-medium py-3 px-4 rounded-xl text-center hover:bg-white transition-colors flex items-center justify-center gap-2">
                            <Github size={16} /> Source
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}