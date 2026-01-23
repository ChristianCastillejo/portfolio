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
                "group relative flex aspect-[5/4] w-full flex-col justify-end overflow-hidden rounded-[32px] p-6 sm:p-8",
                // FIX JITTER: Usamos 'transform-gpu' aquí también para forzar la capa
                "transform-gpu",
                isComingSoon
                    ? "cursor-not-allowed"
                    : "shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.2)]"
            )}
        >
            {/* 1. IMAGEN DE FONDO */}
            <div
                className={cn(
                    "absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform",
                    !isComingSoon && "group-hover:scale-110"
                )}
                style={{ backgroundImage: `url(${imageSrc})` }}
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

            {/* 2. OVERLAY "COMING SOON" (ESTO FALTABA EN TU ARCHIVO) */}
            {isComingSoon && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span className="rounded-2xl bg-white/90 px-6 py-3 font-sans text-lg font-medium text-[#4c6763] shadow-lg">
                        Coming soon...
                    </span>
                </div>
            )}

            {/* 3. CONTENIDO DE TEXTO */}
            <div className="relative z-10 flex w-full items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <div className="w-fit rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 transition-colors group-hover:bg-white/20">
                        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                            {title}
                        </h3>
                    </div>

                    <div className="w-fit max-w-[90%] rounded-xl px-2 py-1">
                        <p className="font-sans text-base text-white/90 sm:text-lg">
                            {description}
                        </p>
                    </div>
                </div>

                {/* BOTÓN (Solo si NO es coming soon) */}
                {!isComingSoon && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                )}
            </div>
        </div>
    )

    // FIX JITTER (EL CAMBIO IMPORTANTE ESTÁ AQUÍ ABAJO)
    const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full w-full"
            // ESTO ES LA CLAVE: 'will-change' le dice al navegador que no recalcule el layout al hacer hover
            style={{
                willChange: "transform",
                backfaceVisibility: "hidden"
            }}
        >
            {children}
        </motion.div>
    )

    if (isComingSoon) {
        return (
            <MotionWrapper>
                <div className="h-full w-full">
                    <CardContent />
                </div>
            </MotionWrapper>
        )
    }

    return (
        <MotionWrapper>
            <Link href={href} className="block h-full w-full">
                <CardContent />
            </Link>
        </MotionWrapper>
    )
}