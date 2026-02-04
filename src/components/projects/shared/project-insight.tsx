"use client";
import { motion } from "framer-motion";
import { ProjectCaseStudy } from "@/types/project";
import { BrainCircuit, Lightbulb, ArrowRight, CornerDownRight } from "lucide-react";
export const ProjectInsight = ({ project }: {
    project: ProjectCaseStudy;
}) => {
    if (!project.lessons || project.lessons.length === 0)
        return null;
    return (<section className="w-full border-t border-border/40 relative overflow-hidden py-24 md:py-48">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-32">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-6">
                        <BrainCircuit size={14}/>
                        Retrospective
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Engineering <br /> <span className="text-foreground/40">Trade-offs.</span>
                    </h3>
                    <p className="text-foreground/70 text-lg md:text-xl leading-relaxed text-pretty">
                        Every project is a series of decisions. Here are the critical pivot points where I had to balance technical purity with business reality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {project.lessons.map((lesson, idx) => (<motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.6 }} className="group relative bg-white/60 backdrop-blur-md border border-white/60 p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-colors transition-transform transition-shadow duration-500 overflow-hidden flex flex-col justify-between min-h-[360px]">

                            <div className="absolute -right-8 -bottom-8 text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors duration-500 rotate-12 scale-75 md:scale-100 origin-bottom-right">
                                <Lightbulb size={200} strokeWidth={1}/>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="flex items-center justify-center w-10 h-10 leading-none pt-[3px] rounded-full bg-white border border-border text-accent font-mono text-sm font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="leading-none">0{idx + 1}</span>
                                    </span>
                                    <div className="h-px flex-1 bg-border/60"/>
                                </div>

                                <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                                    {lesson.title}
                                </h4>

                                <p className="font-sans text-lg text-foreground/70 leading-relaxed font-medium text-pretty">
                                    {lesson.content}
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 pt-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-accent">
                                <CornerDownRight size={20}/>
                                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                                    Key Takeaway
                                </span>
                            </div>
                        </motion.div>))}
                </div>
            </div>
        </section>);
};
