"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { whyPurple } from "@/data/home";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-60 relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 lg:sticky lg:top-40 items-center lg:items-start">
            <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-left">
                WHY WE EXIST
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground leading-none text-center lg:text-left">
                THE
                <br />
                <span className="text-tpm border-b-2 border-primary py-2 md:py-4 block">
                  PHILOSOPHY
                </span>
              </h2>
            </div>
            <p className="text-foreground/40 font-bold tracking-widest text-xs leading-loose max-w-xs text-center lg:text-left">
              PURPLE REPRESENTS WHAT HAPPENS WHEN TWO WORLDS COLLIDE. ENERGY MEETS EXPERIENCE.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center lg:items-start"
            >
              <span className="text-[20vw] absolute -top-10 md:-top-20 -left-4 md:-left-10 font-black text-foreground/[0.03] leading-none pointer-events-none select-none">
                &ldquo;PURPLE&rdquo;
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-foreground leading-[1.1] relative z-10 text-center lg:text-left">
                {whyPurple.quote.split(". ")[0]}. <br className="hidden sm:block" />
                <span className="text-tpm">{whyPurple.quote.split(". ")[1]}</span>
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative">
              {whyPurple.duality.map((item, index) => {
                const isEnergy = item.id === "01";
                const bgClass = isEnergy ? "bg-energy/30" : "bg-steady/30";
                const borderClass = isEnergy ? "border-energy/10" : "border-steady/10";
                const hoverBgClass = isEnergy ? "hover:bg-energy/40" : "hover:bg-steady/40";
                const textClass = isEnergy ? "text-energy" : "text-steady";

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${bgClass} backdrop-blur-3xl border ${borderClass} p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group ${hoverBgClass} transition-all duration-700 ${index === 1 ? "sm:mt-12" : ""} flex flex-col items-center sm:items-start`}
                  >
                    <span
                      className={`${textClass} font-black tracking-widest text-xs block mb-6 md:mb-8 uppercase text-center sm:text-left`}
                    >
                      {item.id} / {item.title}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6 uppercase text-center sm:text-left">
                      {item.label}
                    </h4>
                    <p className="text-foreground/60 text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
                      {item.text.split(":")[0]}:{" "}
                      <span className={`${textClass} font-bold`}>
                        {item.text.split(":")[1].trim().split(",")[0]}
                      </span>
                      , {item.text.split(":")[1].trim().split(",").slice(1).join(",")}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="w-full p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden group">
              <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase leading-none text-center lg:text-left">
                  WE AIM TO
                  <br />
                  <span className="text-primary">BRIDGE THAT GAP.</span>
                </h3>

                <p className="text-base md:text-xl lg:text-2xl text-foreground/50 leading-relaxed max-w-xl text-center lg:text-left">
                  Today, a gap exists. No bridge, no shared space. We are here to reclaim the
                  collective power of curiosity and experience.
                </p>

                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full sm:w-max px-8 md:px-12 py-4 md:py-5 border-2 border-primary/30 rounded-full text-foreground font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] hover:bg-primary transition-all duration-500 hover:textforeground"
                >
                  <span className="flex items-center gap-3 md:gap-4">
                    Explore The Deep Dive
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
                          <div className="h-1 w-12 bg-primary" />
                          <p className="text-foreground font-bold text-base md:text-lg uppercase tracking-widest">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 md:mt-20 p-8 md:p-12 bg-foreground/5 border border-foreground/5 rounded-[2rem] md:rounded-[3rem]">
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary uppercase leading-[0.9]">
                        WE&apos;RE HERE TO MAKE THAT{" "}
                        <span className="text-foreground">PLACE REAL.</span>
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
