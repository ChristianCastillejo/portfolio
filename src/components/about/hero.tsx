"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"

export const AboutHero = () => {
    return (
        <Section className="items-center text-center !pt-36 md:!pt-44 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden p-1.5 bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-md transition-shadow duration-500"
            >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                    <Image
                        src="/images/avatar.webp"
                        alt="Christian Castillejo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-3xl space-y-6"
            >
                <div>
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-accent mb-4 leading-[0.9] tracking-tight">
                        I’m Christian.
                    </h1>

                    <h2 className="!font-sans text-xl md:text-2xl font-medium text-accent/90 leading-snug text-balance max-w-2xl mx-auto">
                        I bridge code and design so you don’t have to choose between scalability and a great user experience.
                    </h2>
                </div>

                <div className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto space-y-5">
                    <p>
                        Across 7+ years—from fast-paced startups in Dublin to architecting massive e-commerce ecosystems in Amsterdam—I’ve seen a recurring pattern: products break when design and engineering don’t speak the same language.
                    </p>
                    <p>
                        I operate in the hybrid space to fix this. I don’t just close tickets. I align technical reality with design intent, removing friction to deliver software that is robust, not just functional.
                    </p>
                </div>
            </motion.div>
        </Section>
    )
}