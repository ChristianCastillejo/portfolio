"use client"

import { motion } from "framer-motion"
import { Variants } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}


const itemVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
}

export function HeroSection() {
    return (
        <section className="w-full px-4 pt-24 pb-12 md:pt-32 md:pb-16 lg:px-8">
            <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <h1 className="flex flex-col font-display text-4xl font-bold leading-none text-accent md:text-5xl lg:text-6xl">
                        <div className="overflow-hidden">
                            <motion.span variants={itemVariants} className="block pt-[0.12em]">
                                Hi, I&apos;m Christian.
                            </motion.span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.span variants={itemVariants} className="block text-primary/80 pt-[0.12em]">
                                Design Engineer.
                            </motion.span>
                        </div>
                    </h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl font-sans text-lg text-accent/80 md:text-xl"
                    >
                        Bridging the gap between design and engineering. I build scalable products
                        combining architectural logic with creative curiosity.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}