"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-60 bg-transparent border-t border-white/5 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(142,0,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Pillar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 lg:sticky lg:top-40">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-purple-500 font-bold tracking-[0.6em] uppercase text-[10px]">WHY WE EXIST</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl movement-title text-white leading-none">
                THE<br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic border-b-2 border-purple-600 py-2 md:py-4 block">PHILOSOPHY</span>
              </h2>
            </div>

            <div className="hidden lg:block h-32 w-[1px] bg-gradient-to-b from-purple-600 to-transparent ml-2" />

            <p className="text-white/40 font-bold tracking-widest text-xs leading-loose max-w-xs">
              PURPLE REPRESENTS WHAT HAPPENS WHEN TWO WORLDS COLLIDE. ENERGY MEETS EXPERIENCE.
            </p>
          </div>

          {/* Right Pillar */}
          <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
            {/* Pullquote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-[20vw] absolute -top-10 md:-top-20 -left-4 md:-left-10 font-black text-white/[0.03] leading-none pointer-events-none select-none italic">&ldquo;PURPLE&rdquo;</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white leading-[1.1] relative z-10">
                Purple isn&apos;t just a colour.{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent italic">It is a bridge between worlds.</span>
              </h3>
            </motion.div>

            {/* Duality Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5 hidden sm:block" />

              {/* Youth Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-red-500/5 backdrop-blur-3xl border border-red-500/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group hover:bg-red-500/10 transition-all duration-700"
              >
                <span className="text-red-500 font-black tracking-widest text-xs block mb-6 md:mb-8 uppercase">01 / The Energy</span>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">RED</h4>
                <p className="text-white/60 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  Symbolizes the <span className="text-red-400 font-bold">youth</span>: energetic, passionate, curious, and
                  unapologetically ready to create change.
                </p>
              </motion.div>

              {/* Professional Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-500/5 backdrop-blur-3xl border border-blue-500/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group hover:bg-blue-500/10 transition-all duration-700 sm:mt-12"
              >
                <span className="text-blue-500 font-black tracking-widest text-xs block mb-6 md:mb-8 uppercase">02 / The Steady</span>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter">BLUE</h4>
                <p className="text-white/60 text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  Symbolizes <span className="text-blue-400 font-bold">professionals</span>: steady, knowledgeable,
                  and capable of unlocking doors previously bolted shut.
                </p>
              </motion.div>
            </div>

            {/* Bridge CTA */}
            <div className="w-full glass-panel p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-purple-600/10 blur-[100px] group-hover:bg-purple-600/20 transition-all duration-1000" />
              <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                  WE AIM TO<br />
                  <span className="text-purple-500 italic">BRIDGE THAT GAP.</span>
                </h3>

                <p className="text-base md:text-xl lg:text-2xl text-white/50 leading-relaxed max-w-xl">
                  Today, a gap exists. No bridge, no shared space. We are here to reclaim the collective power of curiosity and experience.
                </p>

                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full sm:w-max px-8 md:px-12 py-4 md:py-5 border-2 border-purple-500/30 rounded-full text-white font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] hover:bg-purple-600 transition-all duration-500"
                >
                  <span className="flex items-center gap-3 md:gap-4">
                    {isExpanded ? "Minimize Philosophy" : "Explore The Deep Dive"}
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </span>
                </button>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-12 md:pt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                      {[
                        "Prove change is necessary",
                        "Inspire & open doors",
                        "Lift each other up",
                      ].map((text) => (
                        <div key={text} className="flex flex-col gap-4">
                          <div className="h-1 w-12 bg-purple-600" />
                          <p className="text-white font-bold italic text-base md:text-lg uppercase tracking-widest">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 md:mt-20 p-8 md:p-12 bg-white/5 border border-white/5 rounded-[2rem] md:rounded-[3rem]">
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-purple-500 uppercase leading-[0.9]">
                        WE&apos;RE HERE TO MAKE THAT <span className="text-white italic">PLACE REAL.</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};