"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Linkedin, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
// --- DATOS (Single Source of Truth) ---
const aButton = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) => (
    <Link href={href} target="_blank" className="group relative inline-flex">
        {/* Sombra sólida (Vermilion) */}
        <div className="absolute inset-0 bg-[var(--primary)] rounded-full translate-y-1 transition-transform group-hover:translate-y-0 duration-300 ease-out" />

        {/* Contenedor principal (Surface/White) */}
        <div className="relative bg-[var(--surface)] border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-full flex items-center gap-3 font-display font-semibold text-lg transition-transform group-hover:-translate-y-0.5 duration-300 ease-out group-active:translate-y-0.5">
            {Icon && <Icon size={20} strokeWidth={2.5} />}
            {children}
        </div>
    </Link>
)
const PHILOSOPHY_ITEMS = [
    {
        id: 1,
        title: "1. Bridge Code and Empathy",
        content: "My background as a software engineer is one of my greatest asset as a designer. It allows me to design with a deep understanding of technical possibilities and constraints, ensuring my work is not just visionary but also viable. I foster seamless collaboration between design and development, speaking both languages to build better products, faster."
    },
    {
        id: 2,
        title: "2. Design from a Place of Presence",
        content: "True innovation comes from clarity and deep focus. I approach complex problems with a calm, methodical mindset, allowing me to see the signal in the noise. My practice is centered on creating experiences that promote well-being, reduce cognitive load, and bring a sense of organic ease to the user's digital life."
    },
    {
        id: 3,
        title: "3. Embrace the Unpaved Path",
        content: "Experience has taught me to thrive in ambiguity and make confident decisions with limited resources. I am highly adaptable, resourceful, and skilled at finding creative solutions when the path isn't clear. This adventurous spirit translates into a resilient and proactive approach to the iterative design process."
    },
    {
        id: 4,
        title: "4. Nurture Long-Term Growth",
        content: "I believe great products, like living systems, require patience and a long-term vision. I am passionate about creating digital ecosystems that are sustainable and healthy, iterating thoughtfully and listening deeply to ensure they grow and evolve organically with the people who use them."
    }
]

// Actualizado con datos reales de tu CV para coherencia SDE
const EXPERIENCE_ITEMS = [
    { company: "Nectar Studio", role: "Founding Product Design Engineer", period: "2025 - Present" },
    { company: "Grandado", role: "Lead Frontend & Design Engineer", period: "2020 - 2023" },
    { company: "OGD", role: "Full Stack Engineer", period: "2018 - 2020" },
    { company: "Stack Shuttle", role: "Full Stack Engineer", period: "2018" },
    { company: "IBT", role: "Software Engineer", period: "2016 - 2017" },
]

// --- COMPONENTES UI REUTILIZABLES ---

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`w-full max-w-[1200px] mx-auto px-4 md:px-8 py-24 flex flex-col gap-16 ${className}`}>
        {children}
    </section>
)

// --- PÁGINA PRINCIPAL ---

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-background text-foreground bg-noise">

            {/* 1. HERO SECTION */}
            <Section className="items-center text-center !pt-40">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-48 h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-4 border-white/50 shadow-xl"
                >
                    <Image
                        src="/images/profile.webp" // Asegúrate de que esta imagen exista en public
                        alt="Christian Castillejo"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl space-y-6"
                >
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-accent">
                        I’m Christian.
                    </h1>
                    <h2 className="font-display text-2xl md:text-3xl text-accent/90 leading-tight">
                        A holistic product designer and researcher bridging the logic of code with the art of human-centered experience.
                    </h2>

                    <div className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto space-y-6 pt-4">
                        <p>
                            With a foundation in software engineering, I bring a uniquely grounded perspective to UX/UI design, ensuring a seamless bridge between creative vision and technical execution.
                        </p>
                        <p>
                            I create products that are not only intuitive and beautiful but also feasible and robust. My goal is to craft digital experiences that make people's lives simpler, more conscious, and more connected to what truly matters, delivering solutions that are both human-centered and built to last.
                        </p>
                    </div>
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

            {/* 3. EXPERIENCE TIMELINE (Refactorizado a Grid Horizontal) */}
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

            {/* 4. PERSONAL & BEHIND SCREENS */}
            <Section className="items-center text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-3xl space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="font-display text-4xl text-accent">My Professional Focus</h3>
                        <p className="font-sans text-lg text-gray-600 leading-relaxed">
                            I am driven to design and improve digital products that genuinely make people's lives easier and more intentional. My focus is on creating holistic experiences for products related to wellness, sustainability, and personal growth. I thrive on bringing a global vision to a project—from initial research to final UI—and am adept at collaborating within a fully remote team to ensure every detail serves a conscious purpose.
                        </p>
                    </div>

                    <div className="space-y-4 pt-12">
                        <h3 className="font-display text-4xl text-accent">Behind Screens</h3>
                        <p className="font-sans text-lg text-gray-600 leading-relaxed">
                            When I'm not designing, I'm often exploring. This can mean finding stillness through meditation, traveling across different cultures or nurturing the quiet patience of my own vegetable garden. My perspective is also shaped by formative experiences, from a 18-month solo journey through Asia and South America... which taught me profound lessons in resilience, adaptability and resourcefulness.
                        </p>
                    </div>
                </motion.div>

                {/* Photo Grid - Masonry Style Simplified */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-12 h-96 md:h-80">
                    {/* Reemplaza src con tus imágenes reales 1.webp, 2.webp, etc */}
                    {[1, 2, 3, 4].map((num, i) => (
                        <motion.div
                            key={num}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-2xl overflow-hidden shadow-lg ${i % 2 === 0 ? 'mt-0' : 'mt-8 md:mt-12'}`} // Staggered effect
                        >
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder */}
                            <Image src={`/images/about/${num}.webp`} fill className="object-cover" alt="Personal photo" />
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 5. CTA SECTION */}
            <section className="w-full px-4 pb-24">
                <div className="max-w-[800px] mx-auto border-2 border-accent/30 rounded-3xl p-8 md:p-16 bg-white/30 backdrop-blur-md text-center shadow-lg">
                    <h2 className="font-display text-4xl md:text-5xl text-accent mb-6">
                        Let's Create Together
                    </h2>
                    <p className="font-sans text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                        I am always open to conversations about projects that bring more awareness, health, and organic simplicity into people's lives.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button href="mailto:christiancastillejo@proton.me" icon={Mail}>
                            Email Me
                        </Button>
                        <Button href="https://www.linkedin.com/in/christiancastillejo" icon={Linkedin}>
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    )
}