"use client";
import { Mail, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
export const AboutCTA = () => {
    return (<Section className="!pb-32">
            <div className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white/60 px-6 py-16 md:px-20 md:py-24 text-center overflow-hidden shadow-xl shadow-black/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-40 pointer-events-none"/>

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-bla leading-[1.05] tracking-tight mb-6">
                        Let’s build something that lasts.
                    </h2>

                    <div className="font-sans text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
                        <p>
                            I partner with teams that value technical craftsmanship and design integrity. If that sounds like your approach, let’s see if we are a fit.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
                        <Button href="mailto:christiancastillejo@proton.me" icon={Mail} variant="primary">
                            Say hello
                        </Button>
                        <Button href="https://www.linkedin.com/in/christiancastillejo" icon={Linkedin}>
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </div>
        </Section>);
};
