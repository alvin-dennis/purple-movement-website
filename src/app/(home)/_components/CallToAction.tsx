"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
          {/* Text Section */}
          <div className="lg:w-2/3 text-left w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] text-white leading-[0.85] space-y-2 mb-6 md:mb-10">
                YOUR JOURNEY <br /><span className="text-purple-600">BEGINS</span> HERE.
              </h2>
              <div className="max-w-2xl border-l border-purple-600/30 pl-6 md:pl-10 space-y-4 md:space-y-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 leading-relaxed">
                  You&apos;ve sparked the start of a borderless, collaborative journey. Ideas will grow,
                  connections will flourish, and together, we&apos;ll turn ambition into real impact.
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                  TOGETHER, WE ARE THE <span className="text-purple-500">PURPLE MOVEMENT.</span>
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/join"
                className="inline-flex items-center gap-4 md:gap-8 group"
              >
                <div className="px-10 sm:px-12 md:px-16 py-4 md:py-6 bg-purple-600 rounded-full font-bold tracking-widest text-sm text-white group-hover:bg-purple-500 transition-all duration-500 group-hover:px-14 md:group-hover:px-20 active:scale-95 shadow-[0_0_40px_-10px_rgba(142,0,255,0.4)]">
                  JOIN THE SPARKS
                </div>
                <div className="flex items-center gap-3 text-purple-400 font-bold uppercase tracking-[0.3em] text-[10px] opacity-0 group-hover:opacity-100 transition-all transform md:translate-x-[-20px] group-hover:translate-x-0 hidden sm:flex">
                  GET STARTED <div className="w-12 h-[1px] bg-purple-400" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 relative w-full flex justify-center">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:aspect-square"
            >
              <Image
                fill
                src="/images/spiral.png"
                alt="Purple Movement spiral illustration"
                className="object-contain opacity-40"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};