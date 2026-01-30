"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionTemplate, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, Code2, Layers, Zap, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

// --- DATOS DUMMY (Placeholders para Silvestra y futuros proyectos) ---
const PROJECTS = [
  {
    slug: "silvestra",
    title: "Silvestra",
    subtitle: "E-commerce Ecosystem",
    description: "A headless Shopify architecture bridging high-end aesthetics with rigid engineering standards.",
    tags: ["Next.js 15", "Shopify Headless", "Design System"],
    image: "/images/silvestra-cover.webp",
    video: "/videos/silvestra/hero.webm", // <--- Video añadido
    color: "bg-[#E35028]" // Color de acento del proyecto (Vermilion)
  },
  // Puedes duplicar este objeto para visualizar más tarjetas
  {
    slug: "chronos",
    title: "Chronos",
    subtitle: "Internal Tooling",
    description: "Reducing operational friction by 40% through a custom React-based dashboard for data visualization.",
    tags: ["React", "D3.js", "TypeScript"],
    image: "/images/chronos-cover.webp",
    // video: "...", 
    color: "bg-[#3B82F6]"
  }
]
const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { margin: "-10% 0px -10% 0px" })

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => { })
    } else {
      videoRef.current.pause()
    }
  }, [isInView])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative w-full"
    >
      <Link href={`/projects/${project.slug}`} className="block w-full">
        {/* 1. EL CONTENEDOR */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-sm transition-colors transition-transform transition-shadow duration-700 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:-translate-y-2">

          {/* Ruido sutil */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 mix-blend-overlay bg-noise" />

          {/* --- ESTRUCTURA DE MARCO --- */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">

            {/* MARCO DE COLOR */}
            <div className={cn("w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-700", project.color)} />

            {/* CONTENEDOR DE VIDEO (Inset) */}
            <div className="absolute inset-4 md:inset-8 rounded-[2rem] overflow-hidden bg-white shadow-inner isolate">
              {project.video ? (
                // VIDEO
                <video
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105 opacity-95 mix-blend-multiply grayscale-[20%]"
                />
              ) : (
                // Fallback
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-foreground/20 font-display text-4xl">
                  {project.title}
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* --- UI LAYER: THE SMOKED GLASS HUD --- */}
          {/* Alineamos todo abajo a la izquierda para dejar el video respirar */}
          {/* --- UI LAYER: THE LIQUID OBSIDIAN HUD --- */}
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start z-20 pointer-events-none">

            {/* LA CAJA FLOTANTE */}
            <div className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 w-full max-w-md">

              <div className="relative overflow-hidden rounded-[2rem] bg-black/40 group-hover:bg-black/70 backdrop-blur-2xl border border-white/10 shadow-lg group-hover:shadow-2xl transition-all duration-500 p-6 md:p-8 flex flex-col gap-4">

                {/* 1. TOP ROW: Tags & Arrow */}
                <div className="flex items-center justify-between gap-4">
                  {/* STACK TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/5 text-[10px] font-mono uppercase tracking-widest font-bold text-white/90 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ACTION ARROW (Integrada y reactiva) */}
                  <div className="w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight size={16} className="text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* 2. TEXT CONTENT */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold !text-white mb-2 leading-none tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/70 group-hover:text-white/90 leading-relaxed line-clamp-2 font-medium text-pretty transition-colors duration-500">
                    {project.description}
                  </p>
                </div>

              </div>
            </div>



          </div>
        </div>
      </Link>
    </motion.div>
  )
}
// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground selection:bg-accent/20 overflow-x-hidden">

      {/* 1. FONDO DE RUIDO GLOBAL */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0" />


      {/* 2. HERO SECTION */}
      <section className="relative z-10 pt-40 md:pt-52 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-between">

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent/80">
                Senior Design Engineer
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-4 opacity-40"
        >
          <div className="h-px w-12 bg-foreground" />
          <span className="font-mono text-xs uppercase tracking-widest">Selected Work</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>


      {/* 3. WORK GALLERY */}
      <section id="work" className="relative z-10 px-6 md:px-12 pb-32 md:pb-48 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>


      {/* 4. THE METHOD */}
      <section className="relative z-10 px-6 md:px-12 pb-32 md:pb-48 max-w-[1400px] mx-auto">
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
                <Layers size={24} />
              </div>
              <h3 className="font-display text-xl font-bold">System Thinking</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                I don't build isolated pages. I build scalable design systems where every component is a reusable, typed, and accessible Lego block.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md flex flex-col gap-4 group hover:bg-white/60 transition-colors duration-500">
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="font-display text-xl font-bold">Fluid Interaction</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Motion isn't an afterthought. It's the connective tissue of UX. I use Framer Motion to make interfaces feel biological, not mechanical.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/40 border border-white/60 backdrop-blur-md flex flex-col gap-4 group hover:bg-white/60 transition-colors duration-500">
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="font-display text-xl font-bold">Production Grade</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Semantic HTML, type-safe TypeScript, and server-side rendering. Beautiful code that performs as well as it looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOFT CTA */}
      <section className="relative z-10 px-6 md:px-12 pb-20 max-w-[1400px] mx-auto text-center">
        <Link href="/contact" className="group inline-block">
          <div className="relative overflow-hidden rounded-full bg-foreground text-background px-10 py-5 flex items-center gap-4 transition-colors transition-transform transition-shadow duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
            <span className="font-display text-xl font-bold relative z-10">
              Available for select projects
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

            {/* Brillo de fondo en hover */}
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>
      </section>

    </main>
  )
}