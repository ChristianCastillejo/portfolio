"use client"
import { motion } from "framer-motion"
import { ProjectCaseStudy } from "@/types/project"
import { BrainCircuit, CheckCircle2, ArrowRight } from "lucide-react"

export const ProjectInsight = ({ project }: { project: ProjectCaseStudy }) => {
    if (!project.lessons || project.lessons.length === 0) return null;

    return (
        <section className="w-full max-w-[1000px] mx-auto px-6 md:px-8 py-32">
            <div className="flex flex-col gap-16">

                {/* Header Centrado - Diferente a Standards */}
                <div className="text-center max-w-2xl mx-auto">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-6">
                        <BrainCircuit size={14} />
                        Retrospective
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Engineering <br /> <span className="text-foreground/40">Trade-offs</span>
                    </h3>
                </div>

                {/* Lista Editorial (No Cards) */}
                <div className="flex flex-col divide-y divide-border/50 border-y border-border/50">
                    {project.lessons.map((lesson, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 hover:bg-foreground/[0.02] transition-colors px-4 rounded-xl -mx-4"
                        >
                            {/* Columna Izquierda: Título y Contexto */}
                            <div className="md:w-1/3 flex flex-col justify-between">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="font-mono text-xs text-foreground/40">0{idx + 1}</span>
                                    <h4 className="font-bold text-xl text-foreground">
                                        {lesson.title}
                                    </h4>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 size={14} />
                                    <span>SOLVED</span>
                                </div>
                            </div>

                            {/* Columna Derecha: El contenido técnico */}
                            <div className="md:w-2/3">
                                <p className="text-lg text-foreground/70 leading-relaxed text-pretty font-sans">
                                    {lesson.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}