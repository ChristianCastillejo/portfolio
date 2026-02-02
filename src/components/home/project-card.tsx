"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { HomeProject } from "@/data/home"

export const ProjectCard = ({ project, index }: { project: HomeProject, index: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const rampTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Lógica de activación "Center Stage"
    const isInView = useInView(videoRef, { margin: "-40% 0px -40% 0px" })

    useEffect(() => {
        if (!videoRef.current) return;

        if (isInView) {
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

                {/* CONTENEDOR PRINCIPAL */}
                <div className={cn(
                    "relative w-full aspect-[3/4] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden transition-all duration-700",
                    "border-[3px] border-white/60 bg-white/40 backdrop-blur-xl",
                    "group-hover:border-accent/50 group-hover:shadow-2xl group-hover:shadow-accent/10 group-hover:-translate-y-2"
                )}>

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 mix-blend-overlay bg-noise" />

                    {/* MARCO Y VIDEO */}
                    <div className="absolute inset-0 overflow-hidden ">
                        <div className="w-full h-full opacity-0" /> {/* Spacer */}

                        <div className="absolute inset-0 overflow-hidden ">
                            {project.video ? (
                                <video
                                    ref={videoRef}
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105 opacity-95 mix-blend-multiply grayscale-[20%]"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-foreground/20 font-display text-4xl">
                                    {project.title}
                                </div>
                            )}
                            {/* Bottom Gradient Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-60" />
                        </div>
                    </div>

                    {/* OBSIDIAN HUD */}
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end items-start z-20 pointer-events-none">
                        <div className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 w-full max-w-md">
                            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black/40 group-hover:bg-black/60 backdrop-blur-2xl border border-white/10 shadow-lg group-hover:shadow-2xl transition-[background-color,box-shadow] duration-500 p-5 md:p-8 flex flex-col justify-end">

                                {/* 1. ARROW (Ahora absoluta en la esquina, no ocupa espacio de flujo) */}
                                <div className="absolute top-5 right-5 md:top-8 md:right-8 w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-[background-color,color,border-color] duration-300 z-10">
                                    <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
                                </div>

                                {/* 2. TEXT CONTENT (Con padding-right para no chocar con la flecha) */}
                                <div className="pr-16 md:pr-20">
                                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold !text-white mb-2 leading-none tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="font-sans text-sm md:text-base text-white/70 group-hover:text-white/90 leading-relaxed line-clamp-5 font-medium text-pretty transition-colors duration-500">                                        {project.description}
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