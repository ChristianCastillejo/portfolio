"use client";
import { HomeHero } from "@/components/home/hero";
import { ProjectList } from "@/components/home/project-list";
import { HomeMethodology } from "@/components/home/methodology";
import { HomeCTA } from "@/components/home/cta";
export default function HomePage() {
    return (<main className="w-full min-h-screen bg-background text-foreground selection:bg-accent/20 overflow-x-hidden">

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0"/>

      <HomeHero />

      <ProjectList />

      <HomeMethodology />

      <HomeCTA />

    </main>);
}
