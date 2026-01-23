"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    href: string
    isComingSoon?: boolean
    index: number
}

export function ProjectCard({
    title,
    description,
    imageSrc,
    href,
    isComingSoon = false,
    index
}: ProjectCardProps) {

    const CardContent = () => (
        <div
            className={cn(
                "isolation-isolate group relative flex aspect-[5/4] w-full flex-col justify-end overflow-hidden rounded-[24px] p-6 sm:p-8 transform-gpu",
                // 1. FONDO BLANCO Y BORDE SUTIL: Clave para la limpieza visual
                "bg-surface border border-black/5",
                isComingSoon
                    ? "cursor-not-allowed grayscale-[0.8]" // Desaturar si está desactivado
                    : "shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            )}
            style={{ transform: "translateZ(0)" }}
        >
            {/* Imagen de fondo */}
            <div
                className={cn(
                    "absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform",
                    !isComingSoon && "group-hover:scale-110"
                )}
                style={{ backgroundImage: `url(${imageSrc})` }}
            />

            {/* Overlay oscuro (Gradiente técnico) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Coming Soon Overlay (REINSERTADO) */}
            {isComingSoon && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span className="rounded-full bg-white px-6 py-2 font-sans text-sm font-semibold tracking-wide text-zinc-800 shadow-xl">
                        COMING SOON
                    </span>
                </div>
            )}

            {/* Contenido de Texto */}
            <div className="relative z-10 flex w-full items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    {/* Título en píldora blur */}
                    <div className="w-fit rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 transition-colors group-hover:bg-white/20">
                        <h3 className="font-display text-2xl font-semibold !text-white sm:text-3xl">
                            {title}
                        </h3>
                    </div>

                    {/* Descripción */}
                    <div className="w-fit max-w-[90%] px-1">
                        <p className="font-sans text-base text-zinc-200 line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Botón de Acción (Usa el PRIMARY/Naranja) */}
                {!isComingSoon && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                )}
            </div>
        </div>
    )

    const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full relative"
        >
            {children}
        </motion.div>
    )

    if (isComingSoon) {
        return (
            <MotionWrapper>
                <div className="w-full">
                    <CardContent />
                </div>
            </MotionWrapper>
        )
    }

    return (
        <MotionWrapper>
            <Link href={href} className="block w-full">
                <CardContent />
            </Link>
        </MotionWrapper>
    )
}