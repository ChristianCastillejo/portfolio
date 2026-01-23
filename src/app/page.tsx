import { HeroSection } from "@/components/sections/hero-section"
import { WorkSection } from "@/components/sections/work-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-noise">
      <HeroSection />
      <WorkSection />
    </main>
  )
}