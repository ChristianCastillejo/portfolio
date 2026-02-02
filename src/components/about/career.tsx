"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Section } from "@/components/ui/section"
import { EXPERIENCE_ITEMS } from "@/data/about"
import { Button } from "@/components/ui/button"

export const AboutCareer = () => {
    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-display text-4xl text-accent font-bold"
                >
                    Career Path
                </motion.h3>
                <Button href="https://drive.google.com/file/d/1cE6hIODhup4KMDNrsBn3LwXE80ajxqwS/view?usp=sharing" icon={Download}>
                    Download CV
                </Button>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide w-full lg:grid lg:grid-cols-5 lg:overflow-visible snap-x snap-mandatory">
                {EXPERIENCE_ITEMS.map((job, index) => (
                    <motion.div
                        key={job.company}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        // Ajuste de ancho: 
                        // - Móvil: 260px (Mantenemos)
                        // - Tablet (md): 280px/300px (Para que no se vea gigante pero sea legible)
                        // - Desktop (lg): w-auto (Grid automático)
                        className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-auto h-full group snap-center first:pl-6 lg:first:pl-0 last:pr-6 lg:last:pr-0"
                    >
                        <div className="flex flex-col h-full bg-white/50 p-6 rounded-2xl border border-transparent hover:border-accent/40 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md gap-4">  <div className="flex flex-col gap-1">
                            <span className="font-display text-2xl text-accent block leading-tight">{job.company}</span>
                            <span className="font-sans text-foreground/80 text-sm leading-snug font-medium min-h-[3rem] flex items-center">
                                {job.role}
                            </span>
                        </div>

                            <div className="mt-auto pt-2">
                                <span className="font-mono text-xs text-accent/40 uppercase tracking-wider group-hover:text-accent/80 transition-colors">
                                    {job.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}