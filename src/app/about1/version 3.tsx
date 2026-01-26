"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Linkedin, Download, Sparkles } from "lucide-react"

// --- DATOS (Mismos datos, nueva presentación) ---
const PHILOSOPHY_ITEMS = [
    {
        id: "01",
        title: "Bridge Code & Empathy",
        content: "My engineering background isn't just a skill—it's a lens. It allows me to design with a deep grasp of feasibility, ensuring visionary work is also viable product."
    },
    {
        id: "02",
        title: "Presence & Focus",
        content: "Innovation requires clarity. I approach problems with a calm, methodical mindset, reducing cognitive load to bring organic ease to the user's digital life."
    },
    {
        id: "03",
        title: "The Unpaved Path",
        content: "I thrive in ambiguity. My solo travels taught me resilience and adaptability—traits I bring to the iterative, often chaotic process of product design."
    },
    {
        id: "04",
        title: "Long-Term Growth",
        content: "Great products are living systems. I design sustainable digital ecosystems that evolve organically with the people who use them, not just for launch day."
    }
]

const EXPERIENCE_ITEMS = [
    { company: "Nectar Studio", role: "Founding Design Engineer", period: "2025 - Present" },
    { company: "Grandado", role: "Lead Frontend Engineer", period: "2020 - 2023" },
    { company: "OGD", role: "Full Stack Engineer", period: "2018 - 2020" },
    { company: "Stack Shuttle", role: "Full Stack Engineer", period: "2018" },
    { company: "IBT", role: "Software Engineer", period: "2016 - 2017" },
]

// --- COMPONENTES UI REFINADOS (Apple-esque) ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`w-full max-w-[1100px] mx-auto px-6 md:px-12 py-32 flex flex-col gap-20 ${className}`}>
        {children}
    </section>
)

// BOTÓN "SOFT TOUCH" 
// Menos mecánico, más orgánico. Sin bordes duros, usa luz y sombra.
const Button = ({ href, children, icon: Icon, primary = false }: { href: string; children: React.ReactNode; icon?: any, primary?: boolean }) => (
    <Link href={href} target="_blank">
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`
        relative px-8 py-4 rounded-full flex items-center gap-3 font-display font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300
        ${primary
                    ? 'bg-primary text-white shadow-primary/20'
                    : 'bg-white/80 backdrop-blur-md text-foreground border border-white/40 shadow-black/5 hover:bg-white'}
      `}
        >
            <span>{children}</span>
            {Icon && <Icon size={18} className={primary ? "opacity-90" : "text-accent"} />}
        </motion.button>
    </Link>
)

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-[#EDEBE8] text-[#1D1D1F] overflow-hidden selection:bg-accent/20">

            {/* Fondo Ambiental Sutil (Atmósfera) */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* --- HERO SECTION --- */}
            <Section className="items-center text-center !pt-40 md:!pt-52">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-12 group"
                >
                    {/* Foto con "Squircle" y sombra suave difusa */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 z-10 transform transition-transform duration-700 group-hover:scale-[1.02]">
                        <Image
                            src="/images/profile.webp"
                            alt="Christian Castillejo"
                            fill
                            className="object-cover scale-110" // Ligero zoom para evitar bordes blancos
                            priority
                        />
                    </div>
                    {/* Glow trasero */}
                    <div className="absolute inset-4 bg-accent/20 blur-2xl -z-10 rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl space-y-8"
                >
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F]">
                        Logic meets <span className="text-accent italic">Intuition.</span>
                    </h1>

                    <p className="font-sans text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light text-balance">
                        I’m Christian. A Design Engineer bridging the gap between <strong className="font-medium text-primary">architectural code</strong> and <strong className="font-medium text-accent">human emotion</strong>.
                    </p>
                </motion.div>
            </Section>

            {/* --- PHILOSOPHY (Bento Grid Suave) --- */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {PHILOSOPHY_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-all duration-500"
                        >
                            <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/50 text-accent font-display font-bold text-sm">
                                {item.id}
                            </div>
                            <h3 className="font-display text-2xl text-[#1D1D1F] font-semibold mb-4 pr-12">
                                {item.title}
                            </h3>
                            <p className="font-sans text-gray-600 leading-relaxed text-lg">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- EXPERIENCE (Clean List - Estilo Ajustes iOS) --- */}
            <Section className="!gap-12">
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-black/5 pb-8">
                    <h3 className="font-display text-4xl font-bold text-[#1D1D1F]">Path</h3>
                    <Link href="https://drive.google.com/file/d/1cE6hIODhup4KMDNrsBn3LwXE80ajxqwS/view?usp=sharing" target="_blank" className="text-primary font-medium hover:opacity-80 flex items-center gap-2 transition-opacity">
                        Download CV <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="space-y-4">
                    {EXPERIENCE_ITEMS.map((job, index) => (
                        <motion.div
                            key={job.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-3xl hover:bg-white/40 transition-colors duration-300 group cursor-default"
                        >
                            <div className="flex items-center gap-6">
                                {/* Indicador visual minimalista */}
                                <div className="w-3 h-3 rounded-full bg-accent/20 group-hover:bg-accent transition-colors duration-500" />
                                <div>
                                    <h4 className="font-display text-2xl font-medium text-[#1D1D1F]">{job.company}</h4>
                                    <p className="font-sans text-gray-500 text-base">{job.role}</p>
                                </div>
                            </div>
                            <span className="font-mono text-sm text-gray-400 mt-2 md:mt-0 pl-9 md:pl-0 tabular-nums">
                                {job.period}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* --- PERSONAL & PHOTOS (Polaroid Vibe) --- */}
            <Section>
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 space-y-8">
                        <h3 className="font-display text-4xl font-bold text-[#1D1D1F]">Beyond the Code</h3>
                        <p className="font-sans text-xl text-gray-600 leading-relaxed">
                            When I'm not designing, I'm finding stillness. Whether it's tending to my vegetable garden, meditating, or exploring remote corners of Asia and South America.
                        </p>
                        <p className="font-sans text-xl text-gray-600 leading-relaxed">
                            These moments of disconnection are exactly where I find the clarity to solve complex connection problems.
                        </p>
                    </div>

                    <div className="md:col-span-7 relative h-[500px] w-full">
                        {/* Foto Principal */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                            className="absolute top-0 right-0 w-72 h-80 bg-white p-3 pb-8 shadow-2xl rotate-3 rounded-lg z-0 transition-all duration-500 ease-out"
                        >
                            <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                                <Image src="/images/about/1.webp" fill alt="Travel" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </motion.div>

                        {/* Foto Secundaria */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                            className="absolute bottom-10 left-10 w-64 h-72 bg-white p-3 pb-8 shadow-xl -rotate-6 rounded-lg z-10 transition-all duration-500 ease-out"
                        >
                            <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                                <Image src="/external/about/2.webp" fill alt="Garden" className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* --- CTA FINAL (Apple Glass Card) --- */}
            <Section className="!pb-32">
                <div className="relative rounded-[3rem] bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-2xl border border-white/50 p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-accent/5">
                    {/* Luz de fondo */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-50" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-accent mb-4">
                            <Sparkles size={32} />
                        </div>

                        <h2 className="font-display text-4xl md:text-6xl font-bold text-[#1D1D1F]">
                            Let's create something<br />meaningful.
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button href="mailto:christiancastillejo@proton.me" icon={Mail} primary>
                                Get in Touch
                            </Button>
                            <Button href="https://www.linkedin.com/in/christiancastillejo" icon={Linkedin}>
                                LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}