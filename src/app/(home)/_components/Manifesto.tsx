"use client";

import React from "react";
import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="w-full bg-transparent text-white py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 border-t border-white/5 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[40vw] font-black uppercase text-white leading-none absolute -top-20 -right-20">MANIFESTO</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {/* Big Title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h2 className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase mb-0 flex flex-col italic">
              <span>MANI</span>
              <span className="flex items-center gap-4 md:gap-12 -mt-[2vw] flex-wrap">
                FESTO
                <div className="h-4 w-4 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-purple-600 rounded-full animate-pulse shadow-[0_0_50px_rgba(142,0,255,0.7)] flex-shrink-0" />
              </span>
            </h2>
            <div className="max-w-2xl mt-8 md:mt-12 pl-2 sm:pl-4 md:pl-8 border-l-4 border-purple-600">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-white/60 leading-tight">
                A declaration of our purpose, our power, and the future we are building.
              </p>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="flex flex-col gap-24 md:gap-40">
            {/* The Manifestors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 md:gap-12"
            >
              <div className="flex items-center gap-6 md:gap-8">
                <span className="text-purple-500 font-bold tracking-[1em] uppercase text-xs whitespace-nowrap">01</span>
                <div className="h-[1px] w-full bg-white/10" />
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter movement-title">
                THE<br /><span className="text-purple-600">MANIFESTORS</span>
              </h3>
              <div className="max-w-3xl md:ml-[10vw] lg:ml-[20vw]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-[1.3] text-white italic">
                  &ldquo;We are the Manifestors of Change. Not waiting for the future, but
                  building it with <span className="text-white font-bold not-italic">courage, code, creativity, and clarity</span>.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* The Producers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 md:gap-12 md:items-end md:text-right"
            >
              <div className="flex items-center gap-6 md:gap-8 w-full">
                <div className="h-[1px] w-full bg-white/10" />
                <span className="text-purple-500 font-bold tracking-[1em] uppercase text-xs whitespace-nowrap">02</span>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter movement-title italic">
                THE<br /><span className="text-indigo-500">PRODUCERS</span>
              </h3>
              <div className="max-w-3xl md:mr-[5vw] lg:mr-[10vw]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-[1.3] text-white">
                  We are not consumers of culture;{" "}
                  <span className="bg-white text-black px-4 md:px-6 py-1 md:py-2 inline-block md:block w-auto md:w-max md:ml-auto mt-4 md:mt-6 not-italic font-black uppercase tracking-widest text-lg md:text-2xl lg:text-4xl">
                    we are producers of purpose.
                  </span>
                  {" "}We hold the key to ecosystems that empower, not limit.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Large Statement Block */}
          <motion.div
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="py-16 sm:py-24 md:py-40 lg:py-60 flex flex-col items-center text-center justify-center bg-[#101015] rounded-[3rem] md:rounded-[6rem] border border-white/5 shadow-2xl relative overflow-hidden group px-6 md:px-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h4 className="text-[9vw] lg:text-[6vw] font-black leading-[0.9] mb-4 uppercase tracking-tighter">
              IN ACCESS,<br />NOT GATEKEEPING.
            </h4>
            <div className="h-1 w-24 md:w-40 bg-purple-600 my-6 md:my-10" />
            <h4 className="text-[9vw] lg:text-[6vw] font-black leading-[0.9] text-purple-600 uppercase tracking-tighter italic">
              IN BOLD VISIONS,<br />NOT TEMPLATES.
            </h4>
            <p className="mt-8 md:mt-16 text-base sm:text-lg md:text-xl lg:text-3xl text-white/40 max-w-4xl px-4 md:px-10 leading-relaxed font-light">
              We are here to reclaim the narrative. To give confidence to the
              curious, networks to the bold, and direction to the determined.
            </p>
          </motion.div>

          {/* Final Pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-40 text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300%] bg-purple-600/5 blur-[150px] -z-10" />
            <h2 className="text-[20vw] font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none uppercase">ENERGY</h2>
            <h2 className="text-5xl sm:text-7xl md:text-[10vw] font-black text-white italic tracking-tighter uppercase relative z-10 leading-none">THE SPARK.</h2>
            <p className="mt-8 md:mt-12 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-purple-500 tracking-[0.3em] md:tracking-[0.4em] uppercase animate-pulse">
              AND IT STARTS NOW
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
