"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Globe, Code2, Layers, Figma, Database, Cpu, Zap } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"

const TECH_ICONS: Record<string, any> = {
    "globe": Globe, "code": Code2, "layers": Layers,
    "figma": Figma, "database": Database, "cpu": Cpu,
}

interface ProjectHeroProps {
    project: ProjectCaseStudy
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
    return (
        <section className="w-full max-w-[1400px] mx-auto p-4 md:p-6 h-auto min-h-screen md:h-screen flex flex-col justify-center">

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-12 gap-4 h-full min-h-[800px] md:min-h-0">

                {/* --- 1. VIDEO BOX (CLEAN LIGHT BROWSER) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    // Contenedor principal con sombra suave y bordes redondeados
                    className="md:col-span-3 md:row-span-12 bg-white rounded-3xl overflow-hidden relative flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-neutral-900/5"
                >
                    {/* A. BROWSER HEADER (Contraste Gris) */}
                    {/* Usamos bg-neutral-100 para que contraste con el fondo blanco general */}
                    <div className="w-full h-11 border-b border-neutral-200/80 bg-neutral-100 flex items-center px-4 gap-4 select-none z-20">
                        {/* Traffic Lights (Flat style para light mode) */}
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-neutral-300/50" />
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-neutral-300/50" />
                            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-neutral-300/50" />
                        </div>
                        {/* Barra de Dirección (Limpia) */}
                        <div className="flex-1 max-w-xl mx-auto h-7 bg-white rounded-md flex items-center justify-center px-3 text-neutral-500 text-[11px] font-mono border border-neutral-200/80 shadow-sm">
                            <Globe size={10} className="mr-2 opacity-50" />
                            <span className="opacity-70 truncate">
                                {project.links.live.replace('https://', '')}
                            </span>
                        </div>
                        <div className="w-12" />
                    </div>

                    {/* B. CONTENIDO (Solo el Video Loop) */}
                    {/* Fondo gris claro por si el video tarda en cargar */}
                    <div className="relative flex-1 w-full bg-neutral-50 flex items-center justify-center overflow-hidden">
                        {/* REEMPLAZA EL SRC CON TU VIDEO REAL (ej: /videos/project-demo.mp4) */}
                        <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-8 left-8">
                            <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-widest mb-2 block">
                                Case Study
                            </span>
                            <h2 className="text-neutral-900 font-display text-4xl font-bold tracking-tight">
                                {project.title}
                            </h2>
                        </div>
                    </div>
                </motion.div>


                {/* --- 2. THE CHALLENGE --- */}
                <div className="md:col-span-1 md:row-span-4 bg-white rounded-3xl border border-neutral-200 p-8 flex flex-col justify-start gap-4 shadow-sm">
                    <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                        The Challenge
                    </span>
                    <p className="font-sans text-lg leading-snug font-medium text-pretty text-neutral-700">
                        {project.tagline}
                    </p>
                </div>


                {/* --- 3. TECH STACK (Dark Contrast) --- */}
                <div className="md:col-span-1 md:row-span-4 bg-neutral-900 text-white rounded-3xl border border-neutral-800 p-8 flex flex-col gap-6 shadow-md">
                    <span className="font-mono text-xs text-neutral-500 font-bold uppercase tracking-wider">Powered By</span>
                    <div className="flex flex-col gap-3">
                        {project.techStack.map((tech) => {
                            const IconComponent = TECH_ICONS[tech.iconKey]
                            return (
                                <div key={tech.name} className="flex items-center gap-3 group/item">
                                    <div className="p-2 bg-white/5 rounded-lg text-neutral-400 group-hover/item:text-white group-hover/item:bg-white/10 transition-colors">
                                        {IconComponent && <IconComponent size={18} />}
                                    </div>
                                    <span className="font-medium text-neutral-300 group-hover/item:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* --- 4. ACTIONS & METRICS (Bottom Right) --- */}
                <div className="md:col-span-1 md:row-span-4 bg-orange-50/50 rounded-3xl border border-orange-100 p-8 flex flex-col justify-between group cursor-pointer hover:bg-orange-50 transition-colors">

                    {/* Header: SDE METRICS */}
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-orange-700 font-bold uppercase tracking-wider">Impact</span>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1.5 text-orange-900 font-bold">
                                <Zap size={14} className="fill-orange-500 text-orange-500" />
                                <span>99/100</span>
                            </div>
                            <span className="text-[10px] text-orange-900/50 font-medium">Performance Score</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                        <a href={project.links.live} target="_blank" className="w-full bg-orange-600 text-white font-medium py-3 px-4 rounded-xl text-center shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            View Live Project
                        </a>
                        <a href={project.links.repo} target="_blank" className="w-full bg-white border border-orange-200 text-orange-800 font-medium py-3 px-4 rounded-xl text-center hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
                            <Github size={16} /> Source Code
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}