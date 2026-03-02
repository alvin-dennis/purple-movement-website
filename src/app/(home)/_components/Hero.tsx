"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      {/* Background Media & Overlays */}
      <div className="absolute inset-0 z-0 scale-105 overflow-hidden">
        {!videoLoaded && (
          <Image
            src="/images/hero.webp"
            alt="Hero fallback"
            fill
            priority
            className="object-cover opacity-60 grayscale-[0.2]"
            unoptimized
          />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-60" : "opacity-0"
            }`}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020205_100%)] opacity-80 z-[2]" />
        <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-[3]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left/Center Column */}
        <div className="lg:col-span-8 flex flex-col items-start gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-md mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] text-purple-200 font-bold tracking-[0.25em] uppercase">
                The Collective Rise
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest movement-title mb-2 opacity-80">
              We Are the
            </h1>

            <h2 className="bg-gradient-to-br from-[#f8f6f9] via-[#8E00FF] to-[#D8B0FA] bg-clip-text text-transparent
              text-[16vw] sm:text-[13vw] lg:text-[9vw] xl:text-[8vw] font-black uppercase leading-[0.85] -ml-1 tracking-tighter drop-shadow-[0_20px_50px_rgba(142,0,255,0.4)]">
              Purple<br />Movement
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 md:gap-10 w-full max-w-2xl"
          >
            <p className="movement-subtitle text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/70 border-l-2 border-purple-600/50 pl-5 md:pl-8">
              Where purposeful people gather to explore, tackle issues, and
              create meaningful change. A community without barriers, where your
              skills matter and open new possibilities.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 w-full">
              <Link
                href="/join"
                className="group relative px-10 sm:px-14 py-4 sm:py-6 bg-purple-600 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_-10px_rgba(142,0,255,0.5)] active:scale-95"
              >
                <span className="relative z-10 text-white text-sm font-bold uppercase tracking-[0.3em] group-hover:text-purple-100 italic">
                  Join Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#8E00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <span className="text-white/40 font-bold tracking-widest text-xs uppercase hidden sm:block">
                Sounds like you?
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Grain overlay */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
