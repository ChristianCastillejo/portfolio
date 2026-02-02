"use client"

import Link from "next/link"

export const AboutButton = ({ href, children, icon: Icon, primary = false, stable = false }: {
    href: string; children: React.ReactNode; icon?: any, primary?: boolean, stable?: boolean
}) => (
    <Link href={href} target="_blank" className="group relative inline-flex">
        <div className={`
      relative px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-2 md:gap-3 font-display font-medium text-base md:text-lg border transition-all duration-300 ease-out
      ${stable ? 'active:scale-[0.98]' : 'hover:-translate-y-0.5 active:scale-[0.98]'} 
      ${primary
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90'
                : 'bg-white/80 backdrop-blur-md border-border/60 text-foreground shadow-sm hover:border-foreground '}
    `}>
            <span>{children}</span>
            {Icon && <Icon size={18} className={`${primary ? "text-white" : "text-black"} transition-opacity opacity-90 group-hover:opacity-100`} />}
        </div>
    </Link>
)

export const AboutSeparator = () => (
    <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="w-full border-t border-border/60 my-16 md:my-20" />
    </div>
)