"use client"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, Github, Globe, Code2, Layers, Database, Cpu, Zap, Box } from "lucide-react"
import { ProjectCaseStudy } from "@/types/project"
import { Button } from "@/components/ui/button1"
import { useRef } from "react"

const TECH_ICONS: Record<string, any> = {
    "globe": Globe, "code": Code2, "layers": Layers,
    "database": Database, "cpu": Cpu,
    "file-json": Box
}

interface ProjectHeroProps {
    project: ProjectCaseStudy
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const rampTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (videoRef.current) {
            if (latest > 0.05) {
                if (videoRef.current.paused) {
                    if (rampTimeoutRef.current) clearTimeout(rampTimeoutRef.current)

                    videoRef.current.playbackRate = 0.6
                    videoRef.current.play().catch(() => { })


                    rampTimeoutRef.current = setTimeout(() => {
                        if (videoRef.current) {
                            videoRef.current.playbackRate = 1.0
                        }
                    }, 1200)
                }
            } else {

                if (!videoRef.current.paused) {
                    if (rampTimeoutRef.current) clearTimeout(rampTimeoutRef.current)
                    videoRef.current.pause()
                }
            }
        }
    })

    return (
        <section ref={containerRef} className="relative w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-40 min-h-[90vh] flex flex-col justify-between">

            <div className="mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-4 block">
                        Case Study / 01
                    </span>
                    <h1 className="text-foreground font-display text-6xl md:text-[8vw] font-bold tracking-tight leading-[0.9] mb-6">
                        {project.title}
                    </h1>
                    <p className="font-sans text-xl md:text-3xl leading-relaxed font-medium text-foreground/70 max-w-3xl text-pretty">
                        {project.tagline}
                    </p>
                </motion.div>
            </div>


            <motion.div
                style={{ y }}
                className="relative w-full aspect-video mt-16 mb-24 md:aspect-[21/9] bg-card rounded-[2rem] overflow-hidden shadow-sm border border-border/50 mb-12"
            >
                <video
                    ref={videoRef}
                    src="/videos/silvestra/hero.webm"
                    muted loop playsInline
                    className="w-full h-full object-cover opacity-95 mix-blend-multiply grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </motion.div>


            <div className="w-full border-t border-border/50 pt-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 md:divide-x divide-border/50">

                    <div className="md:col-span-5 md:pr-8 flex flex-col justify-between gap-4">
                        <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-wider">Core Stack</span>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {project.techStack.map((tech) => {
                                const IconComponent = TECH_ICONS[tech.iconKey] || Box
                                return (
                                    <div key={tech.name} className="flex items-center gap-2 group">
                                        <IconComponent size={16} className="text-foreground/60 group-hover:text-accent transition-colors" />
                                        <span className="font-sans text-sm font-medium text-foreground/80">
                                            {tech.name}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="md:col-span-4 md:px-8 flex flex-col justify-between gap-4">
                        <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-wider">Key Metric</span>
                        <div>
                            <div className="flex items-baseline gap-2 text-foreground font-display text-4xl font-bold mb-1">
                                <Zap size={24} className="fill-accent text-accent" />
                                <span>100</span>
                                <span className="text-xl text-foreground/40 font-sans font-medium">/100</span>
                            </div>
                            <p className="text-sm text-foreground/60 font-medium">
                                Lighthouse Performance Score. <br /> Engineered for instant loads.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-3 md:pl-8 flex flex-col justify-end gap-4">
                        <div className="flex flex-col gap-3 w-full">
                            <Button href={project.links.live} icon={ArrowUpRight} variant="primary" className="w-full justify-between">
                                Visit Live Site
                            </Button>
                            <Button href={project.links.repo} icon={Github} variant="secondary" className="w-full justify-between bg-transparent border-border/50 hover:bg-card/50 hover:border-accent/20">
                                View Source
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}