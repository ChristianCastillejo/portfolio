"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Globe, Code2, Layers, Figma, Database, Cpu, Zap, Box } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"
import { Button } from "@/components/ui/button1"

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

                {/* --- 1. VIDEO BOX --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-3 md:row-span-12 bg-white rounded-[2rem] overflow-hidden relative flex flex-col shadow-sm border border-border"
                >
                    {/* Header Browser */}
                    <div className="w-full h-11 border-b border-border bg-gray-50/50 flex items-center px-4 gap-4 select-none z-20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5" />
                            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/5" />
                            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5" />
                        </div>
                        <div className="flex-1 max-w-xl mx-auto h-7 bg-white rounded-md flex items-center justify-center px-3 text-gray-400 text-[11px] font-mono border border-border">
                            <Globe size={10} className="mr-2 opacity-50" />
                            <span className="opacity-70 truncate">
                                {project.links.live.replace('https://', '')}
                            </span>
                        </div>
                        <div className="w-12" />
                    </div>

                    {/* Contenido Video */}
                    <div className="relative flex-1 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                        <video
                            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4"
                            autoPlay muted loop playsInline
                            className="w-full h-full object-cover opacity-90 grayscale-[10%]"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm max-w-md">
                                <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-2 block">
                                    Case Study
                                </span>
                                <h2 className="text-foreground font-display text-3xl md:text-4xl font-bold tracking-tight leading-none">
                                    {project.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* --- 2. THE CHALLENGE (Estilo Tarjeta Blanca + Verde) --- */}
                {/* CAMBIO: Recuperado estilo tarjeta blanca sólida, pero con acentos en VERDE (text-accent) */}
                <div className="md:col-span-1 md:row-span-4 bg-white rounded-[2rem] border border-border p-8 flex flex-col justify-start gap-4 shadow-sm">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2 leading-none mb-[3px] h-2 rounded-full bg-accent animate-pulse" />
                        The Challenge
                    </span>
                    <p className="font-sans text-lg leading-snug font-medium text-pretty text-neutral-600">
                        {project.tagline}
                    </p>
                </div>


                {/* --- 3. TECH STACK (2 COLUMNAS AHORA) --- */}
                <div className="md:col-span-1 md:row-span-4 bg-[#1D1D1F] text-white rounded-[2rem] border border-transparent p-6 md:p-8 flex flex-col gap-6 shadow-md">
                    <span className="font-mono text-xs text-white/40 font-bold uppercase tracking-wider">Powered By</span>

                    {/* CAMBIO: Grid de 2 columnas para soportar hasta 8-10 items */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                        {project.techStack.map((tech) => {
                            const IconComponent = TECH_ICONS[tech.iconKey] || Box
                            return (
                                <div key={tech.name} className="flex items-center gap-2.5 group/item min-w-0">
                                    <div className="p-1.5 bg-white/10 rounded-md text-white/60 group-hover/item:text-white group-hover/item:bg-white/20 transition-colors shrink-0">
                                        {IconComponent && <IconComponent size={16} />}
                                    </div>
                                    <span className="font-medium text-sm text-white/80 group-hover/item:text-white transition-colors truncate">
                                        {tech.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* --- 4. ACTIONS & METRICS (ESTILO ORANGE RESTAURADO) --- */}
                {/* --- 4. ACTIONS & METRICS (ESTILO ORANGE RESTAURADO) --- */}
                <div className="md:col-span-1 md:row-span-4 bg-orange-50/50 rounded-[2rem] border border-orange-100 p-6 flex flex-col justify-between group cursor-pointer hover:bg-orange-50 transition-colors">

                    {/* Header: SDE METRICS (Estilo Naranja que te gustaba) */}
                    <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-xs text-orange-700 font-bold uppercase tracking-wider">Impact</span>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1.5 text-orange-900 font-bold">
                                <Zap size={14} className="fill-orange-500 text-orange-500" />
                                <span>99/100</span>
                            </div>
                            <span className="text-[10px] text-orange-900/50 font-medium">Performance Score</span>
                        </div>
                    </div>

                    {/* Botones: Usando el componente <Button /> del sistema */}
                    <div className="flex flex-col gap-2 mt-auto w-full">
                        <Button href={project.links.live} icon={ArrowUpRight} primary>
                            View Live Project
                        </Button>
                        <Button href={project.links.repo} icon={Github}>
                            Source Code
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}