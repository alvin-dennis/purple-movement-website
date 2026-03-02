"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/home";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
        {!videoLoaded && (
          <Image
            src="/images/hero.webp"
            alt="Hero fallback"
            fill
            priority
            className="object-cover opacity-60 grayscale-[0.2]"
          />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-28 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse flex-shrink-0" />
            <span className="text-[10px] text-foreground font-bold tracking-[0.25em] uppercase">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest mb-2 opacity-80">
            {hero.title1}
          </h1>

          <h2 className="text-tpm text-[16vw] sm:text-[13vw] lg:text-[9vw] xl:text-[8vw] font-black uppercase leading-[1]">
            {hero.title2}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-3xl mt-8"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground">
            {hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full justify-center">
            <span className="text-foreground/40 font-bold tracking-widest text-xs uppercase hidden sm:block">
              Sounds like you?
            </span>
            <Link href="/join">
              <Button
                variant="default"
                size="lg"
                className="group relative rounded-full overflow-hidden font-bold uppercase tracking-[0.3em] h-auto"
              >
                <span className="relative z-10">Join Us</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
