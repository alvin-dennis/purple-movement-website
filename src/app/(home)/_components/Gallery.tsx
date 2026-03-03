"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/Framer";
import { gallery } from "@/data/home";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import type { Gallery as GalleryType } from "@/lib/types";

const GalleryItem = ({ item, index }: { item: GalleryType; index: number }) => {
  const [currentImage, setCurrentImage] = useState(gallery[index % gallery.length].src);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
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
      case 0:
        return "md:col-span-2 md:row-span-2 min-h-[400px]";
      case 1:
        return "md:col-span-1 md:row-span-1 min-h-[300px]";
      case 2:
        return "md:col-span-1 md:row-span-2 min-h-[300px]";
      case 3:
        return "md:col-span-1 md:row-span-1 min-h-[300px]";
      case 4:
        return "md:col-span-2 md:row-span-1 min-h-[300px]";
      case 5:
        return "md:col-span-1 md:row-span-1 min-h-[300px]";
      case 6:
        return "md:col-span-1 md:row-span-1 min-h-[300px]";
      default:
        return "md:col-span-1 md:row-span-1 min-h-[300px]";
    }
  };

  return (
    <MotionDiv
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[3rem] group ${getSpan(index)}`}
    >
      <AnimatePresence mode="popLayout">
        <MotionDiv
          key={currentImage}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute inset-0"
        >
          <Image
            src={currentImage}
            alt={item.alt}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
          />
        </MotionDiv>
      </AnimatePresence>
    </MotionDiv>
  );
};

export const Gallery = () => {
  return (
    <section
      className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24 items-end">
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">
                Living Community
              </span>
            </MotionDiv>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  leading-[0.85] space-y-2 text-center lg:text-left">
              THE <span className="text-tpm">ENERGY</span> OF US.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base md:text-lg lg:pl-8 text-foreground/50 text-center lg:text-left">
              Snapshots from a community that rises together. Not just faces, but the energy of
              collective progress.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.slice(0, 7).map((img, idx) => (
            <GalleryItem key={`${img.alt}`} item={img} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
