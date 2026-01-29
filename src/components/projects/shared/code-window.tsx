import { cn } from "@/lib/utils"

export const CodeWindow = ({ code, lang, title, className }: { code: string, lang: string, title: string, className?: string }) => (
    <div className={cn(
        // BASE: Usamos bg-foreground (tu negro carbón) para contraste máximo con el beige
        "relative w-full rounded-[1.5rem] bg-foreground text-background shadow-2xl overflow-hidden font-mono text-sm group",
        // BORDE: Un borde blanco muy sutil (10% opacidad) para definirlo sobre fondos oscuros o claros
        "border border-white/10",
        className
    )}>

        {/* HEADER: Minimalista estilo macOS pero con tu identidad */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-lg border-b border-white/5 select-none">

            {/* Traffic Lights: Colores estándar pero suavizados (opacity-60) hasta hover */}
            <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" /> {/* Red */}
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" /> {/* Yellow */}
                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" /> {/* Green */}
            </div>

            {/* Título: Centrado, sutil y técnico */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="text-xs font-medium tracking-widest text-white/30 uppercase font-sans group-hover:text-white/50 transition-colors">
                    {title}
                </span>
            </div>

            {/* Spacer visual para equilibrar el flex */}
            <div className="w-12" />
        </div>

        {/* CONTENIDO: Padding generoso para que el código respire */}
        <div className="p-6 md:p-8 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {/* TEXTO: Usamos text-background/90 (tu beige) en lugar de blanco puro. Mucho más elegante. */}
            <pre className="text-background/90 leading-loose font-normal tracking-tight tab-4">
                <code>{code}</code>
            </pre>
        </div>

        {/* DETALLE PREMIUM: Un brillo sutil en la esquina para dar volumen */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2" />
    </div>
)