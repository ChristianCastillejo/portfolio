import Link from "next/link";

export const Button = ({ href, children, icon: Icon, primary = false, stable = false }: {
    href: string; children: React.ReactNode; icon?: any, primary?: boolean, stable?: boolean
}) => (
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
