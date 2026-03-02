"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const communityMoments = [
    { src: "https://placehold.co/600x800", alt: "Faces of the Movement", size: "md:col-span-1 md:row-span-2" },
    { src: "https://placehold.co/800x600", alt: "Collective Rise", size: "md:col-span-2 md:row-span-1" },
    { src: "https://placehold.co/600x600", alt: "The Spark", size: "md:col-span-1 md:row-span-1" },
    { src: "https://placehold.co/800x400", alt: "Shared Space", size: "md:col-span-2 md:row-span-1" },
    { src: "https://placehold.co/400x400", alt: "Community Core", size: "md:col-span-1 md:row-span-1" },
];

export const CommunityMosaic = () => {
    return (
        <section className="w-full py-20 sm:py-28 md:py-40 bg-transparent px-4 sm:px-6 relative overflow-hidden" id="gallery">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] right-[5%] w-48 md:w-96 h-48 md:h-96 bg-purple-900/30 blur-[150px] rounded-full" />
                <div className="absolute bottom-[20%] left-[10%] w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-indigo-900/20 blur-[180px] rounded-full" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4 md:mb-6"
                        >
                            <div className="h-[1px] w-12 bg-purple-500" />
                            <span className="text-purple-400 font-bold tracking-[0.5em] uppercase text-xs">
                                Living Community
                            </span>
                        </motion.div>
                        <h2 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] movement-title text-white leading-[0.85]">
                            THE <br /><span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic">ENERGY</span> OF US.
                        </h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="movement-subtitle text-base md:text-lg border-l border-white/10 pl-6 md:pl-8 text-white/50">
                            Snapshots from a community that rises together. Not just faces, but the energy of collective progress.
                        </p>
                    </div>
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[280px] lg:auto-rows-[300px] gap-4 md:gap-6">
                    {communityMoments.map((img, idx) => (
                        <motion.div
                            key={img.alt}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative min-h-[280px] sm:min-h-[320px] md:min-h-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] group bg-zinc-900/50 border border-white/5 ${img.size}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                unoptimized
                                className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    MOMENT_{idx + 1}
                                </span>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{img.alt}</h3>
                                    <div className="w-12 h-1 bg-purple-600 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Filler card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[3rem] p-8 text-center col-span-1"
                    >
                        <h4 className="movement-title text-xl text-white/20 uppercase mb-4">Join the Story</h4>
                        <p className="text-[10px] text-white/10 tracking-widest leading-relaxed">
                            Every face here is a pioneer of the future. <br />Add your pulse to the movement.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
