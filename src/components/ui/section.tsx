import React from "react";
interface SectionProps {
    children: React.ReactNode;
    className?: string;
}
export const Section = ({ children, className = "" }: SectionProps) => (<section className={`w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-20 flex flex-col gap-10 md:gap-14 ${className}`}>
        {children}
    </section>);
