"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
export const AboutPersonal = () => {
    return (<Section className="grid md:grid-cols-12 gap-12 items-center">
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
                <motion.div whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }} className="absolute top-16 left-16 w-60 h-60 bg-white p-3 pb-6 shadow-xl -rotate-6 rounded-lg z-0 transition-all duration-500 ease-out cursor-pointer">
                    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                        <Image src="/images/about/3.webp" fill alt="Nature" className="object-cover"/>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }} className="absolute top-10 right-16 w-80 h-80 bg-white p-3 pb-8 shadow-2xl rotate-3 rounded-lg z-20 transition-all duration-500 ease-out cursor-pointer origin-bottom-left">
                    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                        <Image src="/images/about/2.webp" fill alt="Travel" className="object-cover"/>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }} className="absolute bottom-12 left-8 w-72 h-72 bg-white p-3 pb-8 shadow-2xl -rotate-2 rounded-lg z-10 transition-all duration-500 ease-out cursor-pointer origin-top-right">
                    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                        <Image src="/images/about/1.webp" fill alt="Garden" className="object-cover"/>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }} className="absolute bottom-20 right-10 w-64 h-72 bg-white p-3 pb-8 shadow-xl rotate-6 rounded-lg z-5 transition-all duration-500 ease-out cursor-pointer">
                    <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                        <Image src="/images/about/4.webp" fill alt="Texture" className="object-cover"/>
                    </div>
                </motion.div>
            </div>

            <div className="md:hidden grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4].map((n) => (<div key={n} className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                        <Image src={`/images/about/${n}.webp`} fill alt="Photo" className="object-cover"/>
                    </div>))}
            </div>
        </Section>);
};
