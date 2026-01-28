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

    return (
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-8 py-12 md:py-24 border-t border-border/40">
            <div className="grid md:grid-cols-12 gap-12">

                <div className="md:col-span-4">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
                        <ShieldCheck size={14} />
                        The Ground Rules
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        My technical <br />
                        <span className="text-foreground/40">non-negotiables.</span>
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-pretty">
                        I’m naturally curious and love trying new tools, but I’ve learned that innovation without stability is just noise. For Silvestra, I drew a line in the sand: the code had to be as high-quality as the design. These are the baselines I refused to compromise on.
                    </p>
                </div>

                <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                    {items.map((item, idx) => {
                        const IconComponent = ICON_MAP[item.icon] || Layers

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/40 border border-border hover:border-accent/30 hover:bg-white/60 transition-colors transition-shadow duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-background rounded-lg border border-border group-hover:border-accent/20 group-hover:text-accent transition-colors">
                                            <IconComponent size={20} />
                                        </div>
                                        <div className="px-2 py-1 bg-green-500/10 text-green-700 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border border-green-500/20">
                                            {item.highlight}
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}