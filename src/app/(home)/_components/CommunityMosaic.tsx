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
        <section className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden" id="gallery">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24 items-end">
                    <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6"
                        >
                            <div className="h-[1px] w-12 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">
                                Living Community
                            </span>
                        </motion.div>
                        <h2 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] text-white leading-[0.85] space-y-2 text-center lg:text-left">
                            THE <br /><span className="text-tpm">ENERGY</span> OF US.
                        </h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-base md:text-lg border-l-0 lg:border-l border-white/10 lg:pl-8 text-white/50 text-center lg:text-left">
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
                                    <div className="w-12 h-1 bg-primary rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
