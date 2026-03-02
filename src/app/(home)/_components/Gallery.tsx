"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/data/home";
import type { Gallery as GalleryType } from "@/lib/types";


const GalleryItem = ({ item, index }: { item: GalleryType; index: number }) => {
    const [currentImage, setCurrentImage] = useState(gallery[index % gallery.length].src);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => {
                let next: string;
                do {
                    next = gallery[Math.floor(Math.random() * gallery.length)].src;
                } while (next === prev);
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getSpan = (idx: number) => {
        switch (idx) {
            case 0: return "md:col-span-2 md:row-span-2 min-h-[400px]";
            case 1: return "md:col-span-1 md:row-span-1 min-h-[300px]";
            case 2: return "md:col-span-1 md:row-span-2 min-h-[300px]";
            case 3: return "md:col-span-1 md:row-span-1 min-h-[300px]";
            case 4: return "md:col-span-2 md:row-span-1 min-h-[300px]";
            case 5: return "md:col-span-1 md:row-span-1 min-h-[300px]";
            case 6: return "md:col-span-1 md:row-span-1 min-h-[300px]";
            default: return "md:col-span-1 md:row-span-1 min-h-[300px]";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                delay: index * 0.15,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] group ${getSpan(index)}`}
        >
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.2, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={currentImage}
                        alt={item.alt}
                        fill
                        unoptimized
                        className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.alt}</h3>
                    <div className="w-12 h-1 bg-primary rounded-full" />
                </div>
            </div>
        </motion.div>
    );
};

export const Gallery = () => {
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
                        <h2 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] leading-[0.85] space-y-2 text-center lg:text-left">
                            THE <br /><span className="text-tpm">ENERGY</span> OF US.
                        </h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-base md:text-lg lg:pl-8 text-foreground/50 text-center lg:text-left">
                            Snapshots from a community that rises together. Not just faces, but the energy of collective progress.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {gallery.slice(0, 7).map((img, idx) => (
                        <GalleryItem key={`${img.alt}-${idx}`} item={img} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
