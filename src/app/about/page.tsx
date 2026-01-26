"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Linkedin, Download } from "lucide-react"

const PHILOSOPHY_ITEMS = [
    {
        id: "01",
        title: "The Design-Code Bridge",
        content: "I comfortably discuss React Architecture and Design Tokens in the same sentence. I translate design needs into component structures that engineers actually enjoy maintaining."
    },
    {
        id: "02",
        title: "Product Vision",
        content: "Clean code is useless if it solves the wrong problem. I question the 'why' before the 'how', prioritizing business value and user experience over just writing code."
    },
    {
        id: "03",
        title: "Design Systems",
        content: "I don’t believe in reinventing the wheel. I build systems that function as true infrastructure, allowing the team to ship faster without accumulating technical debt."
    },
    {
        id: "04",
        title: "Engineering Rigor",
        content: "Visual sensitivity doesn't mean lowering the engineering bar. I focus on strict TypeScript and stability, writing solid code that others can read, extend, and trust."
    }
]

const EXPERIENCE_ITEMS = [
    { company: "Nectar Studio", role: "Founding Design Engineer", period: "2024 - Present" },
    { company: "Grandado", role: "Lead Frontend Engineer & Design Engineer", period: "2020 - 2023" },
    { company: "OGD", role: "Full Stack Engineer", period: "2018 - 2020" },
    { company: "Stack Shuttle", role: "Full Stack Engineer", period: "2017 - 2018" },
    { company: "IBT", role: "Software Engineer", period: "2016 - 2017" },
]

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <section className={`w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col gap-10 md:gap-14 ${className}`}>
        {children}
    </section>
)

const Button = ({ href, children, icon: Icon, primary = false, stable = false }: { href: string; children: React.ReactNode; icon?: any, primary?: boolean, stable?: boolean }) => (
    <Link href={href} target="_blank" className="group relative inline-flex">
        <div className={`
      relative px-8 py-4 rounded-full flex items-center gap-3 font-display font-medium text-lg border transition-all duration-300 ease-out
      ${stable ? 'active:scale-[0.98]' : 'hover:-translate-y-0.5 active:scale-[0.98]'} 
      ${primary
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90'
                : 'bg-white/80 backdrop-blur-md border-border/60 text-foreground shadow-sm hover:border-accent hover:text-accent hover:bg-accent/5'}
    `}>
            <span>{children}</span>
            {Icon && <Icon size={18} className={`${primary ? "text-white" : "text-accent"} transition-opacity opacity-90 group-hover:opacity-100`} />}
        </div>
    </Link>
)

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-background text-black selection:bg-primary/20 overflow-x-hidden">

            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay z-0" />

            <Section className="items-center text-center !pt-28 md:!pt-44 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden p-1.5 bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm hover:shadow-md transition-shadow duration-500"
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
                    className="max-w-3xl space-y-6"
                >
                    <div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-accent mb-4 leading-[0.9] tracking-tight">
                            I’m Christian.
                        </h1>

                        <h2 className="!font-sans text-xl md:text-2xl font-medium text-accent/90 leading-snug text-balance max-w-2xl mx-auto">
                            I bridge code and design so you don’t have to choose between scalability and a great user experience.
                        </h2>
                    </div>

                    <div className="font-sans text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto space-y-5">
                        <p>
                            Across 7+ years—from fast-paced startups in Dublin to architecting massive e-commerce ecosystems in Amsterdam—I’ve seen a recurring pattern: products break when design and engineering don’t speak the same language.
                        </p>
                        <p>
                            I operate in the hybrid space to fix this. I don’t just close tickets. I align technical reality with design intent, removing friction to deliver software that is robust, not just functional.
                        </p>
                    </div>
                </motion.div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {PHILOSOPHY_ITEMS.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            // Layout: h-full + flex-col + justify-between para igualar alturas
                            className="group relative h-full p-10 md:p-14 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-colors transition-shadow duration-500 ease-out flex flex-col items-start"
                        >
                            <div className="flex flex-col gap-4 mb-8 md:mb-12 w-full">
                                <span className="font-mono text-accent/60 text-sm font-bold tracking-widest uppercase group-hover:text-accent transition-colors">
                                    {item.id}
                                </span>
                                <h3 className="font-display text-2xl md:text-3xl text-accent font-bold leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mt-auto">
                                <p className="font-sans text-foreground/70 leading-relaxed text-lg text-balance">
                                    {item.content}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>


            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="w-full border-t border-border/60 my-16 md:my-20" />
            </div>


            <Section>
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="font-display text-4xl text-accent font-bold"
                    >
                        Career Path
                    </motion.h3>
                    <Button href="https://drive.google.com/file/d/1cE6hIODhup4KMDNrsBn3LwXE80ajxqwS/view?usp=sharing" icon={Download}>
                        Download CV
                    </Button>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide w-full md:grid md:grid-cols-5 md:overflow-visible">
                    {EXPERIENCE_ITEMS.map((job, index) => (
                        <motion.div
                            key={job.company}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-shrink-0 w-[260px] md:w-auto h-full group"
                        >
                            <div className="flex flex-col h-full bg-white/50 p-6 rounded-2xl border border-transparent hover:border-accent/40 hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="font-display text-2xl text-accent block leading-tight">{job.company}</span>
                                    {/* Reserva de espacio (min-h) para alinear el año en todas las cards */}
                                    <span className="font-sans text-foreground/80 text-sm leading-snug font-medium min-h-[3rem] flex items-center">
                                        {job.role}
                                    </span>
                                </div>

                                <div className="mt-auto pt-2">
                                    <span className="font-mono text-xs text-accent/40 uppercase tracking-wider group-hover:text-accent/80 transition-colors">
                                        {job.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
                <div className="w-full border-t border-border/60 my-16 md:my-20" />
            </div>


            <Section className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 space-y-8">
                    <h3 className="font-display text-4xl font-bold text-black">
                        Life beyond code
                    </h3>
                    <div className="space-y-6 font-sans text-lg text-foreground/70 leading-relaxed text-balance">
                        <p>
                            I’m driven by a genuine curiosity for how things work—whether that’s a complex software architecture or a permaculture garden. To keep my mind sharp and balanced, I rely on meditation and stepping away from the screen.
                        </p>
                        <p>
                            That same curiosity pushed me to backpack solo through Asia and the Americas for 18 months. Navigating the unknown with just a backpack taught me more about problem-solving than any job could. It made me comfortable with uncertainty and highly autonomous.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-7 relative h-[600px] w-full hidden md:block">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
                        className="absolute top-16 left-16 w-60 h-60 bg-white p-3 pb-6 shadow-xl -rotate-6 rounded-lg z-0 transition-all duration-500 ease-out cursor-pointer"
                    >
                        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                            <Image src="/images/about/3.webp" fill alt="Nature" className="object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                        className="absolute top-10 right-16 w-80 h-80 bg-white p-3 pb-8 shadow-2xl rotate-3 rounded-lg z-20 transition-all duration-500 ease-out cursor-pointer origin-bottom-left"
                    >
                        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                            <Image src="/images/about/2.webp" fill alt="Travel" className="object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                        className="absolute bottom-12 left-8 w-72 h-72 bg-white p-3 pb-8 shadow-2xl -rotate-2 rounded-lg z-10 transition-all duration-500 ease-out cursor-pointer origin-top-right"
                    >
                        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                            <Image src="/images/about/1.webp" fill alt="Garden" className="object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                        className="absolute bottom-20 right-10 w-64 h-72 bg-white p-3 pb-8 shadow-xl rotate-6 rounded-lg z-5 transition-all duration-500 ease-out cursor-pointer"
                    >
                        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                            <Image src="/images/about/4.webp" fill alt="Texture" className="object-cover" />
                        </div>
                    </motion.div>
                </div>

                <div className="md:hidden grid grid-cols-2 gap-4 w-full">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                            <Image src={`/images/about/${n}.webp`} fill alt="Photo" className="object-cover" />
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="!pb-32">
                <div className="relative rounded-[3rem] bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-xl border border-white/60 px-6 py-16 md:px-20 md:py-24 text-center overflow-hidden shadow-xl shadow-black/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-40 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-bla leading-[1.05] tracking-tight mb-6">
                            Let’s build something that lasts.
                        </h2>

                        <div className="font-sans text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
                            <p>
                                I partner with teams that value technical craftsmanship and design integrity. If that sounds like your approach, let’s see if we are a fit.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                            <Button href="mailto:christiancastillejo@proton.me" icon={Mail} primary>
                                Say hello
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