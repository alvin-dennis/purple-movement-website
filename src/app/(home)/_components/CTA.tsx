"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { cta } from "@/data/home";

export const CallToAction = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-10">
          {/* Text Section */}
          <div className="lg:w-2/3 text-center lg:text-left w-full flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 flex flex-col items-center lg:items-start"
            >
              <h2 className="text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] leading-[0.85] space-y-2 mb-6 md:mb-10 text-center lg:text-left">
                {cta.title1} <br /><span className="text-tpm">{cta.title2}</span> {cta.title3}
              </h2>
              <div className="max-w-2xl border-l-0 lg:border-l border-primary/30 lg:pl-10 space-y-4 md:space-y-8 text-center lg:text-left">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl textforeground/60 leading-relaxed">
                  {cta.description}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl textforeground">
                  {cta.statement.split(" THE ")[0]} THE <span className="text-primary">{cta.statement.split(" THE ")[1]}</span>
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
                className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-8 group"
              >
                <div className="px-10 sm:px-12 md:px-16 py-4 md:py-6 bg-primary rounded-full font-bold tracking-widest text-sm group-hover:bg-primary transition-all duration-500 group-hover:px-14 md:group-hover:px-20 active:scale-95 shadow-[0_0_40px_-10px_rgba(142,0,255,0.4)]">
                  {cta.buttonText}
                </div>
                <div className="items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] opacity-0 group-hover:opacity-100 transition-all transform md:translate-x-[-20px] group-hover:translate-x-0 hidden sm:flex">
                  GET STARTED <div className="w-12 h-[1px] bg-primary" />
                </div>
              </Link>
            </motion.div>
          </div>

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