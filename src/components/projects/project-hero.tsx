"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Play } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"
import { Globe, Code2, Layers, Figma, Database, Cpu } from "lucide-react"

// Diccionario de Iconos
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
        <section className="w-full max-w-[1400px] mx-auto p-4 md:p-6 h-auto min-h-screen md:h-screen flex flex-col justify-center">

            {/* GRID LAYOUT: Ajustado para que las cajas respiren mejor */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-12 gap-4 h-full min-h-[800px] md:min-h-0">

                {/* --- 1. MAIN VIDEO BOX (70% del espacio) --- */}
                {/* Ahora ocupa de la fila 1 a la 9 (más altura visual) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-3 md:row-span-12 bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden relative group"
                >
                    {/* A. SI TIENES VIDEO REAL: Descomenta esto y pon tu ruta */}
                    {/* <video 
                        src="/videos/demo.mp4" 
                        autoPlay muted loop playsInline 
                        className="w-full h-full object-cover opacity-90"
                    /> 
                    */}

                    {/* B. PLACEHOLDER PRO (Estilo Linear/Apple) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />

                    {/* UI Decorativa Central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <Play className="fill-white text-white ml-1" size={32} />
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-8">
                        <span className="font-mono text-xs text-orange-500 font-bold uppercase tracking-widest mb-2 block">Preview</span>
                        <h2 className="text-white font-display text-3xl font-bold">{project.title}</h2>
                    </div>

                    {/* Simulación de UI flotante (hover) */}
                    <div className="absolute top-24 left-12 right-12 h-full bg-white rounded-t-2xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] translate-y-[110%] group-hover:translate-y-[40%] transition-transform duration-700 ease-[0.19,1,0.22,1] border border-neutral-100 hidden md:block">
                        <div className="w-full h-8 border-b border-neutral-100 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-amber-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="p-8 flex items-center justify-center h-full text-neutral-300 font-display text-4xl font-bold opacity-20">
                            UI MOCKUP
                        </div>
                    </div>
                </motion.div>


                {/* --- 2. THE CHALLENGE (Top Right) --- */}
                {/* row-span-4: Caja compacta para texto */}
                <div className="md:col-span-1 md:row-span-4 bg-white rounded-3xl border border-neutral-200 p-8 flex flex-col justify-start gap-4">
                    <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-wider flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                        The Challenge
                    </span>
                    <p className="font-sans text-lg leading-snug font-medium text-pretty text-neutral-700">
                        {project.tagline}
                    </p>
                </div>


                {/* --- 3. TECH STACK (Middle Right) --- */}
                {/* CORRECCIÓN: Quitamos justify-between. Usamos un layout más denso. */}
                <div className="md:col-span-1 md:row-span-4 bg-neutral-900 text-white rounded-3xl border border-neutral-800 p-8 flex flex-col gap-6">
                    <span className="font-mono text-xs text-neutral-500 font-bold uppercase tracking-wider">Powered By</span>

                    {/* Lista visual más rica para llenar el espacio */}
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


                {/* --- 4. ACTIONS (Bottom Right) --- */}
                {/* CORRECCIÓN: Añadido "Deployment Status" para llenar el hueco central */}
                <div className="md:col-span-1 md:row-span-4 bg-orange-50/50 rounded-3xl border border-orange-100 p-8 flex flex-col justify-between group cursor-pointer hover:bg-orange-50 transition-colors">

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xs text-orange-700 font-bold uppercase tracking-wider">Deployment</span>
                        <ArrowUpRight className="text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>

                    {/* Middle Content (Relleno) */}
                    <div className="py-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-orange-900/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Vercel Edge Network</span>
                        </div>
                        <div className="text-xs text-orange-900/40 pl-3.5 mt-1">
                            Dublin, IE (eu-west-1)
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                        <a href={project.links.live} target="_blank" className="w-full bg-orange-600 text-white font-medium py-3 px-4 rounded-xl text-center shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            View Live Project
                        </a>
                        <a href={project.links.repo} target="_blank" className="w-full bg-white border border-orange-200 text-orange-800 font-medium py-3 px-4 rounded-xl text-center hover:bg-orange-50 hover:border-orange-300 transition-colors flex items-center justify-center gap-2">
                            <Github size={16} /> Source Code
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}