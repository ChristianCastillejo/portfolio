"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Disc } from "lucide-react"
import { cn } from "@/lib/utils"

const SOCIAL_LINKS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/christiancastillejo", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/christiancastillejo", icon: Github },
    { name: "Email", href: "mailto:christiancastillejo@proton.me", icon: Mail },
]

const SITEMAP = [
    { name: "Work", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // { name: "Lab", href: "/lab" }, // Descomentar cuando exista
]

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative w-full px-4 md:px-6 pb-6 pt-20 z-10">

            {/* ESTRUCTURA: LOSA DE CRISTAL DE ALTA DENSIDAD
               AJUSTE SDE: 
               1. 'bg-white/80': Más opaco que antes (/60). Se diferencia más del fondo beige.
               2. 'border-white/80': Borde más nítido.
               3. 'shadow-2xl': Sombra más profunda para elevarlo visualmente del fondo.
            */}
            <div className="relative w-full max-w-[1400px] mx-auto bg-white/80 backdrop-blur-3xl saturate-150 border border-white/60 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/[0.02]">

                {/* 1. TEXTURA ORGÁNICA (NOISE) - Mantenemos esto, es tu firma */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <filter id="noiseFilterFooter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilterFooter)" />
                    </svg>
                </div>

                {/* 2. ILUMINACIÓN SUPERIOR (Borde de luz) */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />


                {/* CONTENIDO INTERIOR */}
                <div className="relative z-10 p-8 md:p-12 lg:p-16">

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16 md:mb-24">

                        {/* A. MANIFIESTO (Izquierda) */}
                        <div className="flex flex-col justify-between gap-8">
                            <div>
                                <span className="font-mono text-xs text-accent font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Disc size={14} className="animate-spin-slow" />
                                    System Offline
                                </span>
                                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-tight text-balance">
                                    Crafting logic into <br />
                                    <span className="text-foreground/40">organic experiences.</span>
                                </h2>
                            </div>

                            <p className="text-foreground/60 font-medium text-lg max-w-md text-pretty">
                                Based in Seville, working globally. Bridging the gap between engineering rigidity and design intuition.
                            </p>
                        </div>

                        {/* B. NAVEGACIÓN (Derecha) */}
                        <div className="grid grid-cols-2 gap-10 lg:gap-20 content-start lg:justify-end">
                            {/* Sitemap */}
                            <div className="flex flex-col gap-4">
                                <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-widest mb-2">
                                    Explore
                                </span>
                                {SITEMAP.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="group flex items-center gap-2 text-lg font-display font-bold text-foreground hover:text-accent transition-colors duration-300"
                                    >
                                        <span className="relative">
                                            {item.name}
                                            {/* El subrayado ahora es accent para dar vida */}
                                            <span className="absolute left-0 -bottom-1 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            {/* Connect */}
                            <div className="flex flex-col gap-4">
                                <span className="font-mono text-xs text-foreground/40 font-bold uppercase tracking-widest mb-2">
                                    Connect
                                </span>
                                {SOCIAL_LINKS.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        className="group flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors duration-300"
                                    >
                                        <div className="p-2 bg-white rounded-full border border-border group-hover:border-accent group-hover:text-accent transition-colors shadow-sm">
                                            <social.icon size={16} />
                                        </div>
                                        <span className="font-medium text-sm">{social.name}</span>
                                        <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* C. FOOTER TÉCNICO (Bottom Bar) */}
                    <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-foreground/50">

                        <div className="flex items-center gap-6">
                            <span>© {currentYear} Christian Castillejo</span>
                            <span className="hidden md:inline-block w-px h-3 bg-foreground/20" />
                            <span className="hidden md:inline-block">Designed & Engineered in Spain</span>
                        </div>

                        {/* El Flex Técnico */}
                        <div className="flex flex-wrap gap-4 items-center">
                            <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/50 border border-white/60 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
                                All Systems Normal
                            </span>
                            <span className="hover:text-accent transition-colors cursor-help opacity-70 hover:opacity-100" title="Built with Next.js 15, Tailwind v4, Framer Motion">
                                v4.2.0 (Stable)
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    )
}