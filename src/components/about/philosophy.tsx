"use client";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { PHILOSOPHY_ITEMS } from "@/data/about";
export const AboutPhilosophy = () => {
    return (<Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {PHILOSOPHY_ITEMS.map((item, index) => (<motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1, duration: 0.5 }} className="group relative h-full p-8 md:p-14 rounded-[2rem] md:rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-colors transition-shadow duration-500 ease-out flex flex-col items-start">
                        <div className="flex flex-col gap-4 mb-8 md:mb-12 w-full">
                            <span className="font-mono text-accent/60 text-sm font-bold tracking-widest uppercase group-hover:text-accent transition-colors">
                                {item.id}
                            </span>
                            <h3 className="font-display text-2xl md:text-3xl text-accent font-bold leading-tight">
                                {item.title}
                            </h3>
                        </div>

                        <div className="mt-auto">
                            <p className="font-sans text-foreground/70 leading-relaxed text-lg text-balance">
                                {item.content}
                            </p>
                        </div>
                    </motion.article>))}
            </div>
        </Section>);
};
