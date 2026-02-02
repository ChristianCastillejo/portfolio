"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const HomeCTA = () => {
    return (
        <section className="relative z-10 px-6 md:px-12 pb-20 max-w-[1400px] mx-auto text-center">
            <Link href="/contact" className="group inline-block">
                <div className="relative overflow-hidden rounded-full bg-foreground text-background px-8 py-4 md:px-10 md:py-5 flex items-center gap-3 md:gap-4 transition-colors transition-transform transition-shadow duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                    <span className="font-display text-lg md:text-xl font-bold relative z-10">
                        Discuss a collaboration
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

                    {/* Brillo de fondo en hover */}
                    <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </Link>
        </section>
    )
}