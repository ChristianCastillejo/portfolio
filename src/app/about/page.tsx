"use client"

import { AboutHero } from "@/components/about/hero"
import { AboutPhilosophy } from "@/components/about/philosophy"
import { AboutCareer } from "@/components/about/career"
import { AboutPersonal } from "@/components/about/personal"
import { AboutCTA } from "@/components/about/cta"
import { AboutSeparator } from "@/components/about/shared"

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-background text-black selection:bg-primary/20 overflow-x-hidden">

            {/* Global Noise Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0" />

            <AboutHero />

            <AboutPhilosophy />

            <AboutSeparator />

            <AboutCareer />

            <AboutSeparator />

            <AboutPersonal />

            <AboutCTA />

        </main>
    )
}