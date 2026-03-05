"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MotionDiv } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

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
          controls={false}
          onContextMenu={(e) => e.preventDefault()}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={viewportConfig}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-28 flex flex-col items-center text-center"
      >
        <div className="w-full flex flex-col items-center">
          <MotionDiv
            variants={fadeInUp}
            viewport={viewportConfig}
            className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md mb-4 md:mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <span className="text-[10px] text-foreground font-bold tracking-[0.25em] uppercase">
              {hero.badge}
            </span>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} viewport={viewportConfig} className="w-full">
            <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest mb-2 opacity-80">
              {hero.title1}
            </h1>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} viewport={viewportConfig} className="w-full">
            <h2 className="text-tpm text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1]">
              {hero.title2}
            </h2>
          </MotionDiv>
        </div>

        <MotionDiv
          variants={fadeInUp}
          viewport={viewportConfig}
          className="flex flex-col items-center gap-6 md:gap-10 w-full max-w-3xl mt-8"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground">
            {hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full justify-center">
            <span className="text-foreground font-bold tracking-widest text-xs uppercase hidden sm:block">
              Sounds like you?
            </span>
            <Link href="/join">
              <Button
                variant="default"
                size="lg"
                className="group relative rounded-full overflow-hidden font-bold uppercase h-auto"
              >
                Join Us
              </Button>
            </Link>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
