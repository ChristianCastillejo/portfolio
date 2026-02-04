"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
export const HomeHero = () => {
    return (<section className="relative z-10 pt-40 md:pt-52 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-between">
            <div className="max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>

                    <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm shadow-sm hover:bg-white/60 hover:border-accent/30 transition-all duration-300 cursor-default group">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent group-hover:scale-125 transition-transform duration-300"></span>
                        </div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent/80 group-hover:text-accent transition-colors">
                            Design Engineer
                        </span>
                    </div>

                    <h1 className="font-display text-6xl md:text-[5.5rem] leading-[0.95] font-bold text-foreground tracking-tight text-balance mb-8">
                        I bridge the gap between <br />
                        <span className="text-foreground/30">pure design</span> & <span className="text-accent">production code.</span>
                    </h1>

                    <p className="font-sans text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl text-pretty">
                        Building digital products requires two languages. I speak both fluently, ensuring that the soul of the design survives the engineering process.
                    </p>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="flex items-center gap-4 opacity-40">
                <div className="h-px w-12 bg-foreground"/>
                <span className="font-mono text-xs uppercase tracking-widest">Selected Work</span>
                <ArrowDown className="w-4 h-4 mt-1 animate-bounce"/>
            </motion.div>
        </section>);
};
