"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Linkedin, FileText, Download } from "lucide-react"

// --- 1. DATOS (Clean Data Structure) ---
// Todo el texto original, sin el ruido de HTML

const PHILOSOPHY_ITEMS = [
    {
        id: "01",
        title: "Bridge Code and Empathy",
        content: "My background as a software engineer is one of my greatest assets as a designer. It allows me to design with a deep understanding of technical possibilities and constraints, ensuring my work is not just visionary but also viable. I foster seamless collaboration between design and development, speaking both languages to build better products, faster."
    },
    {
        id: "02",
        title: "Design from a Place of Presence",
        content: "True innovation comes from clarity and deep focus. I approach complex problems with a calm, methodical mindset, allowing me to see the signal in the noise. My practice is centered on creating experiences that promote well-being, reduce cognitive load, and bring a sense of organic ease to the user's digital life."
    },
    {
        id: "03",
        title: "Embrace the Unpaved Path",
        content: "Experience has taught me to thrive in ambiguity and make confident decisions with limited resources. I am highly adaptable, resourceful, and skilled at finding creative solutions when the path isn't clear. This adventurous spirit translates into a resilient and proactive approach to the iterative design process."
    },
    {
        id: "04",
        title: "Nurture Long-Term Growth",
        content: "I believe great products, like living systems, require patience and a long-term vision. I am passionate about creating digital ecosystems that are sustainable and healthy, iterating thoughtfully and listening deeply to ensure they grow and evolve organically with the people who use them."
    }
]

const EXPERIENCE_ITEMS = [
    { company: "Nectar Studio", role: "Founding Product Design Engineer", period: "2025 - Present" },
    { company: "Grandado", role: "Lead Frontend & Design Engineer", period: "2020 - 2023" },
    { company: "OGD", role: "Full Stack Engineer", period: "2018 - 2020" },
    { company: "Stack Shuttle", role: "Full Stack Engineer", period: "2018" },
    { company: "IBT", role: "Software Engineer", period: "2016 - 2017" },
]

// --- 2. COMPONENTES UI REUTILIZABLES ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`w-full max-w-[1200px] mx-auto px-6 md:px-8 py-24 flex flex-col gap-16 ${className}`}>
        {children}
    </section>
)

// EL NUEVO BOTÓN "TECHNICAL PILL"
// Elegante, sutil, pero con una interacción satisfactoria.
const Button = ({ href, children, icon: Icon, variant = "primary" }: { href: string; children: React.ReactNode; icon?: any, variant?: "primary" | "secondary" }) => {
    const isPrimary = variant === "primary";

    return (
        <Link href={href} target="_blank" className="group relative inline-flex">
            {/* Fondo que se expande */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ease-out 
        ${isPrimary ? 'bg-primary translate-y-1 group-hover:translate-y-0' : 'bg-accent translate-y-1 group-hover:translate-y-0'}`}
            />

            {/* Contenedor frontal */}
            <div className={`relative px-6 py-3 rounded-full flex items-center gap-3 font-display font-semibold text-lg transition-all duration-300 ease-out border-2
        group-hover:-translate-y-0.5 group-active:translate-y-0.5
        ${isPrimary
                    ? 'bg-[#EDEBE8] border-primary text-primary'
                    : 'bg-[#EDEBE8] border-accent text-accent'
                }`}>
                {Icon && <Icon size={20} strokeWidth={2} />}
                {children}
            </div>
        </Link>
    )
}

// --- 3. PÁGINA (Composition) ---

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-background text-foreground bg-noise selection:bg-primary/20">

            {/* --- HERO SECTION --- */}
            <Section className="items-center text-center !pt-32 md:!pt-48">
                {/* Foto de Perfil con borde orgánico */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full overflow-hidden p-1 bg-white/40 backdrop-blur-sm border border-white/60 p-1 shadow-sm hover:shadow-md"
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
                        <Image
                            src="/images/profile.webp"
                            alt="Christian Castillejo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-3xl space-y-8"
                >
                    <div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-accent mb-6 leading-[0.9]">
                            I’m Christian.
                        </h1>
                        <h2 className="font-display text-2xl md:text-3xl text-accent/80 leading-tight text-balance">
                            A holistic product designer & researcher bridging the logic of code with the art of human-centered experience.
                        </h2>
                    </div>

                    <div className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto space-y-6">
                        <p>
                            With a foundation in software engineering, I bring a uniquely grounded perspective to UX/UI design, ensuring a seamless bridge between creative vision and technical execution.
                        </p>
                        <p>
                            I create products that are not only intuitive and beautiful but also feasible and robust. My goal is to craft digital experiences that make people's lives simpler, more conscious, and more connected to what truly matters.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* --- PHILOSOPHY GRID --- */}
            <Section>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {PHILOSOPHY_ITEMS.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            // Tarjeta limpia con borde sutil al hover
                            className="group bg-surface/40 backdrop-blur-sm border border-border p-8 md:p-10 rounded-[2rem] hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 flex flex-col gap-4"
                        >
                            <span className="font-mono text-primary text-sm font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.id}
                            </span>
                            <h3 className="font-display text-2xl md:text-3xl text-accent font-bold">
                                {item.title}
                            </h3>
                            <p className="font-sans text-foreground/70 leading-relaxed text-lg">
                                {item.content}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </Section>
            {/* 2. PHILOSOPHY GRID */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PHILOSOPHY_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/40 backdrop-blur-sm border border-white/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                        >
                            <h3 className="font-display text-2xl text-accent font-semibold">
                                {item.title}
                            </h3>
                            <p className="font-sans text-gray-600 leading-relaxed text-lg">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Section>
            {/* --- CAREER STRIP (Estilo Timeline Moderno) --- */}
            <div className="w-full border-y border-border/60 bg-surface/30 py-24 overflow-hidden relative">
                <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <h3 className="font-display text-4xl text-accent font-bold">
                            Career Path
                        </h3>
                        <Button href="https://drive.google.com/file/d/1cE6hIODhup4KMDNrsBn3LwXE80ajxqwS/view?usp=sharing" icon={Download} variant="secondary">
                            Download CV
                        </Button>
                    </div>

                    {/* Grid responsive: Scroll en móvil, Grid limpio en desktop */}
                    <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 md:overflow-visible">
                        {EXPERIENCE_ITEMS.map((job) => (
                            <div
                                key={job.company}
                                className="flex-shrink-0 w-[260px] md:w-auto flex flex-col justify-between h-full group"
                            >
                                <div>
                                    <div className="h-1 w-full bg-border/50 mb-6 group-hover:bg-accent/40 transition-colors rounded-full overflow-hidden">
                                        <div className="h-full w-0 group-hover:w-full bg-accent transition-all duration-700 ease-out" />
                                    </div>
                                    <span className="font-display text-2xl text-accent mb-2 block">{job.company}</span>
                                    <p className="font-sans text-foreground/60 text-sm font-medium leading-snug">{job.role}</p>
                                </div>
                                <span className="font-mono text-xs text-foreground/40 mt-8 block uppercase tracking-wider">{job.period}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full bg-white/50 border-y border-border py-24">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-display text-4xl text-accent mb-12 text-center md:text-left"
                    >
                        Career Path
                    </motion.h3>

                    {/* Scroll horizontal en móvil, Grid en desktop */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-4 overflow-x-auto pb-8 md:pb-0 scrollbar-hide">
                        {EXPERIENCE_ITEMS.map((job, index) => (
                            <motion.div
                                key={job.company}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-shrink-0 w-full md:w-auto md:flex-1 min-w-[200px]"
                            >
                                <div className="flex flex-col h-full bg-background/80 p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors">
                                    <span className="font-display text-2xl text-accent mb-1">{job.company}</span>
                                    <span className="font-sans text-sm font-bold text-primary mb-3">{job.period}</span>
                                    <span className="font-sans text-gray-600 text-sm leading-snug">{job.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center md:justify-start">
                        <Button href="https://drive.google.com/file/d/1cE6hIODhup4KMDNrsBn3LwXE80ajxqwS/view?usp=sharing" icon={FileText}>
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
            {/* --- PERSONAL FOCUS & PHOTOS --- */}
            <Section className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="space-y-16">
                    <article className="space-y-4">
                        <h3 className="font-display text-3xl text-accent font-bold">My Professional Focus</h3>
                        <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                            I am driven to design and improve digital products that genuinely make people's lives easier and more intentional. My focus is on creating holistic experiences for products related to wellness, sustainability, and personal growth.
                        </p>
                    </article>

                    <article className="space-y-4">
                        <h3 className="font-display text-3xl text-accent font-bold">Behind Screens</h3>
                        <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                            When I'm not designing, I'm often exploring. Finding stillness through meditation, traveling across different cultures, or nurturing my vegetable garden. A defining 18-month solo journey through Asia and South America taught me profound lessons in resilience, adaptability, and resourcefulness.
                        </p>
                    </article>
                </div>

                {/* Grid Visual (Masonry Simulado) */}
                <div className="grid grid-cols-2 gap-4 h-full relative">
                    {/* Decoración de fondo */}
                    <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] -z-10 rotate-2" />

                    <div className="space-y-4 pt-12">
                        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-200 border border-white/20 shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <Image src="/images/about/1.webp" fill className="object-cover" alt="Travel moment" />
                        </div>
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-200 border border-white/20 shadow-lg rotate-[1deg] hover:rotate-0 transition-transform duration-500">
                            <Image src="/images/about/2.webp" fill className="object-cover" alt="Garden detail" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-200 border border-white/20 shadow-lg rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                            <Image src="/images/about/3.webp" fill className="object-cover" alt="Nature texture" />
                        </div>
                        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-200 border border-white/20 shadow-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                            <Image src="/images/about/4.webp" fill className="object-cover" alt="Camping view" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA FINAL --- */}
            <section className="w-full px-4 pb-32">
                <div className="max-w-[900px] mx-auto bg-surface border border-accent/10 rounded-[3rem] p-10 md:p-20 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    {/* Gradiente sutil para dar volumen */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                    <h2 className="font-display text-4xl md:text-6xl text-accent font-bold mb-8 leading-[0.95] relative z-10">
                        Let's Create Together
                    </h2>
                    <p className="font-sans text-xl text-foreground/60 mb-12 max-w-2xl mx-auto text-balance relative z-10">
                        If you're building a product with a mindful mission, I would be delighted to explore how my holistic approach to design and technology could help your team thrive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                        <Button href="mailto:christiancastillejo@proton.me" icon={Mail} variant="primary">
                            Email Me
                        </Button>
                        <Button href="https://www.linkedin.com/in/christiancastillejo" icon={Linkedin} variant="secondary">
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    )
}