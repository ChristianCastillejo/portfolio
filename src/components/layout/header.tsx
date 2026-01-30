"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
    { name: "Work", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export const Header = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none"
            >
                <div
                    className={cn(
                        "pointer-events-auto relative flex items-center justify-between w-full max-w-4xl rounded-full transition-[padding,background-color,border-color,box-shadow,transform,opacity,filter,backdrop-filter] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden",                        // --- LIQUID GLASS 26 PHYSICS ---
                        // 1. Fondo base con opacidad variable
                        scrolled
                            ? "py-3 px-5 md:py-3 md:px-6 bg-white/70"
                            : "py-4 px-6 md:py-5 md:px-8 bg-white/40",
                        // 2. Blur extremo + Saturación (Efecto Prisma)
                        "backdrop-blur-2xl saturate-150",
                        // 3. Borde Sutil (Corte de diamante)
                        "border border-white/40",
                        // 4. Sombra suave difusa (Ambient Occlusion)
                        scrolled ? "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]" : "shadow-sm"
                    )}
                >
                    {/* SVG NOISE TEXTURE (El secreto del aspecto orgánico) */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <filter id="noiseFilter">
                                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            </filter>
                            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                        </svg>
                    </div>

                    {/* ILUMINACIÓN INTERNA (Highlight superior) */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70" />


                    {/* 1. IDENTITY */}
                    <Link href="/" className="group relative z-20 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                        {/* 'items-start' asegura alineación izquierda perfecta */}
                        <div className="relative flex flex-col justify-center items-start">

                            {/* NOMBRE: 
                                - Se mueve hacia arriba (-translate-y-[9px]) en hover para re-centrar el grupo ópticamente.
                                - Mantiene el color accent en hover.
                            */}
                            <span className="font-display font-bold text-lg md:text-xl text-foreground pt-[0.5px] tracking-tight leading-none transition-shadow transition-transform transition-color transition-opacity duration-500 group-hover:-translate-y-2 group-hover:text-accent">
                                Christian Castillejo
                            </span>

                            {/* CARGO:
                                - 'absolute top-full': Empieza justo debajo del nombre.
                                - 'pt-2': Añade el espacio de separación (gap).
                                - '-translate-y-[9px]': Sube exactamente lo mismo que el nombre para mantenerse pegado.
                                - 'left-0': Alineado a la izquierda.
                            */}
                            <span className="absolute top-full left-0 pt-[6px] font-mono text-[9px] text-foreground/40 uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-shadow transition-transform transition-color transition-opacity                                                                     duration-500 group-hover:-translate-y-[9px] pointer-events-none">
                                Design Engineer
                            </span>
                        </div>
                    </Link>

                    {/* 2. DESKTOP NAVIGATION (Magnetic Pills) */}
                    <nav className="hidden md:flex items-center gap-1 relative z-20">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-500",
                                        isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="liquid-nav"
                                            className="absolute inset-0 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] rounded-full border border-white/50"
                                            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-4 z-20">
                        <div
                            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.03] border border-accent/10 group cursor-help transition-colors hover:bg-accent/[0.05]"
                            title="Status: Open to discuss new collaborations"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 mt-[0.5px] bg-accent"></span>
                            </span>

                            <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-foreground/60 group-hover:text-accent transition-colors duration-300">
                                Selectively Open
                            </span>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-foreground/80 hover:text-foreground active:scale-95 transition-shadow transition-transform transition-color transition-opacity                                                                    "
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>

            </motion.header >

            {/* MOBILE MENU (Glass Sheet) */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                            className="fixed top-24 left-4 right-4 z-40 bg-white/80 backdrop-blur-[40px] saturate-150 border border-white/40 shadow-2xl rounded-[2.5rem] p-2 flex flex-col gap-1 md:hidden overflow-hidden"
                        >
                            {/* Noise texture también aquí */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <filter id="noiseFilterMobile">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                                    </filter>
                                    <rect width="100%" height="100%" filter="url(#noiseFilterMobile)" />
                                </svg>
                            </div>

                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "relative p-5 rounded-[1.8rem] text-xl font-display font-bold transition-shadow transition-transform transition-color transition-opacity                                                                     flex items-center justify-between group overflow-hidden",
                                        pathname === item.href
                                            ? "bg-white text-foreground shadow-sm"
                                            : "hover:bg-white/40 text-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="mobile-dot"
                                            className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(2,90,78,0.4)]"
                                        />
                                    )}
                                </Link>
                            ))}
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    )
}