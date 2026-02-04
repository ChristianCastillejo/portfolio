"use client";
import { Layers, Zap, Palette } from "lucide-react";
export const HomeMethodology = () => {
    return (<section className="relative z-10 px-6 md:px-12 pb-32 md:pb-48 max-w-[1400px] mx-auto">
            <div className="border-t border-border/60 pt-20">
                <div className="mb-16">
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-4 block">
                        The Methodology
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                        Not just code. <span className="text-foreground/40">Craft.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="p-8 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md flex flex-col gap-4 group hover:bg-white/60 transition-colors duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                            <Layers size={24}/>
                        </div>
                        <h3 className="font-display text-xl font-bold">Atomic Architecture</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            I engineer ecosystems, not pages. Using React and SSR, I build reusable, accessible blocks backed by strict TypeScript safety.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md flex flex-col gap-4 group hover:bg-white/60 transition-colors duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                            <Zap size={24}/>
                        </div>
                        <h3 className="font-display text-xl font-bold">Physics-Driven UX</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Motion is body language. I leverage Framer Motion to inject physics, ensuring interactions feel biological and fluid, never mechanical.
                        </p>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md flex flex-col gap-4 group hover:bg-white/60 transition-colors duration-500">
                        <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                            <Palette size={24}/>
                        </div>
                        <h3 className="font-display text-xl font-bold">The Design Bridge</h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            Code mirrors design. Strict Figma variables and tokens map 1:1 to React components, eliminating the gap between vision and code.
                        </p>
                    </div>
                </div>
            </div>
        </section>);
};
