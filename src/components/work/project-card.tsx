"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string // En producción, usarías StaticImport de next/image
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

    // Card Content: Lo extraemos para no repetirlo en la lógica condicional del Link
    const CardContent = () => (
        <div
            className={cn(
                "group relative flex aspect-[5/4] w-full flex-col justify-end overflow-hidden rounded-[32px] p-6 sm:p-8",
                "bg-cover bg-center transition-transform duration-500 ease-out hover:scale-[0.98]",
                "shadow-[0px_50px_100px_-10px_rgba(0,0,0,0.1)]"
            )}
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            {/* Overlay "Coming Soon" */}
            {isComingSoon && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#01231e]/10 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-2xl bg-white/90 px-6 py-3 font-sans text-lg text-[#4c6763]">
                        Coming soon...
                    </span>
                </div>
            )}

            {/* Text Container (Bottom) */}
            <div className="relative z-10 flex w-full flex-col gap-2 rounded-3xl">
                {/* Title Tag */}
                <div className="w-fit rounded-2xl bg-[#01231e]/40 px-4 py-2 backdrop-blur-sm">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                        {title}
                    </h3>
                </div>

                {/* Description Tag */}
                <div className="w-fit rounded-xl bg-[#01231e]/40 px-3 py-1 backdrop-blur-sm">
                    <p className="font-sans text-base text-white sm:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )

    // Motion Wrapper para entrada escalonada
    const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {children}
        </motion.div>
    )

    if (isComingSoon) {
        return (
            <MotionWrapper>
                <div className="cursor-not-allowed">
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