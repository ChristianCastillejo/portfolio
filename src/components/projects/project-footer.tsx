import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const ProjectFooter = ({ nextProjectSlug }: { nextProjectSlug: string }) => (
    <footer className="w-full py-32 border-t border-border bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-4 block">Next Project</span>
            <Link href={`/projects/${nextProjectSlug}`} className="group inline-flex items-center gap-4">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-accent group-hover:text-primary transition-colors tracking-tight">
                    {nextProjectSlug}
                </h2>
                <ArrowRight size={48} className="text-foreground/20 group-hover:text-primary group-hover:translate-x-4 transition-all duration-300" />
            </Link>
        </div>
    </footer>
)