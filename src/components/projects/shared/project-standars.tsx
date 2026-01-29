"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, Eye, Smartphone, Layers, LucideIcon } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"

const ICON_MAP: Record<string, LucideIcon> = {
    Eye: Eye,
    Zap: Zap,
    Smartphone: Smartphone,
    ShieldCheck: ShieldCheck,
    Layers: Layers
}

export const ProjectStandards = ({ project }: { project: ProjectCaseStudy }) => {
    const items = project.standards || []

    const header = project.standardsHeader || {
        eyebrow: "Engineering Standards",
        title: "Built for Production",
        subtitle: "Not just Demos",
        description: "Technical baselines enforced for this project."
    }

    return (
        <section className="w-full border-t border-border/40 relative overflow-hidden py-32 md:py-48">

            {/* Fondo decorativo sutil unificado con el resto del sitio */}
            <div className="absolute inset-0 bg-foreground/[0.02] -z-10" />

            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

                {/* 1. HEADER EDITORIAL (Alineado con ComponentLab y Architecture) */}
                <div className="max-w-3xl mb-20 md:mb-32">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-6">
                        <ShieldCheck size={14} />
                        {header.eyebrow}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {header.title} <br />
                        <span className="text-foreground/40">{header.subtitle}</span>
                    </h3>
                    <p className="text-foreground/70 text-lg leading-relaxed text-pretty max-w-2xl">
                        {header.description}
                    </p>
                </div>

                {/* 2. THE GRID OF PILLARS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item, idx) => {
                        const IconComponent = ICON_MAP[item.icon] || Layers

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                // Diseño: Monolito de Cristal
                                className="group relative bg-white/60 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-colors transition-transform transition-shadow duration-500 flex flex-col justify-between overflow-hidden min-h-[320px]"
                            >
                                {/* Número Gigante de Fondo (Detalle Editorial) */}
                                <span className="absolute -right-4 -top-4 text-[8rem] font-display font-bold text-foreground/[0.03] select-none leading-none group-hover:text-foreground/[0.05] transition-colors duration-500">
                                    0{idx + 1}
                                </span>

                                {/* Contenido Superior */}
                                <div className="relative z-10">
                                    {/* Icono Flotante */}
                                    <div className="w-14 h-14 bg-white rounded-2xl border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        <IconComponent size={24} className="text-foreground/80 group-hover:text-accent transition-colors duration-300" />
                                    </div>

                                    <h4 className="font-bold text-xl text-foreground mb-4 leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-base text-foreground/70 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Footer de la Tarjeta: El "Highlight" Técnico */}
                                <div className="relative z-10 mt-8 pt-6 border-t border-border/40">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                                            {item.highlight}
                                        </span>
                                    </div>
                                </div>

                                {/* Brillo sutil en hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}