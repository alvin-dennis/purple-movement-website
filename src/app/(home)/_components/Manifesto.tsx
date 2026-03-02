"use client";

import { motion } from "framer-motion";
import { manifesto } from "@/data/home";

export const Manifesto = () => {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative">
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[40vw] font-black uppercase text-foreground leading-none absolute -top-20 -right-20">
          MANIFESTO
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center md:items-start"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase flex flex-col items-center md:items-start text-center md:text-left">
              <span>
                MANIFESTO <span className="text-primary">.</span>
              </span>
            </h2>
            <div className="max-w-2xl mt-8 md:mt-12 pl-0 md:pl-8 border-l-0 md:border-l-4 border-primary text-center md:text-left">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 leading-tight">
                {manifesto.description}
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col gap-24 md:gap-40">
            {manifesto.sections.map((section, idx) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-8 md:gap-12 items-center ${idx % 2 === 0 ? "md:items-start" : "md:items-end text-center md:text-right"}`}
              >
                <div className="flex items-center gap-6 md:gap-8 w-full">
                  {idx % 2 !== 0 && <div className="h-[1px] w-full bg-foreground/10" />}
                  <span className="text-primary font-bold tracking-[1em] uppercase text-xs whitespace-nowrap">
                    {section.id}
                  </span>
                  {idx % 2 === 0 && <div className="h-[1px] w-full bg-foreground/10" />}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase">
                  {section.title.split(" ")[0]}
                  <br />
                  <span className={idx % 2 === 0 ? "text-primary" : "text-steady"}>
                    {section.title.split(" ")[1]}
                  </span>
                </h3>
                <div
                  className={`max-w-3xl ${idx % 2 === 0 ? "md:ml-[10vw] lg:ml-[20vw]" : "md:mr-[5vw] lg:mr-[10vw]"}`}
                >
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] text-foreground">
                    {section.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="py-12 sm:py-20 md:py-32 flex flex-col items-center text-center justify-center rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group px-6 md:px-12"
          >
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] space-y-2 mb-4 uppercase">
              IN ACCESS,
              <br />
              NOT GATEKEEPING.
            </h4>
            <div className="h-1 w-24 md:w-40 bg-primary my-6 md:my-10" />
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] text-primary uppercase">
              IN BOLD VISIONS,
              <br />
              NOT TEMPLATES.
            </h4>
            <div className="mt-8 md:mt-12 text-sm sm:text-base md:text-lg lg:text-xl text-foreground/40 max-w-4xl px-4 md:px-10 leading-relaxed">
              We are here to reclaim the narrative. To give confidence to the curious, networks to
              the bold, and direction to the determined.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-24 text-center relative"
          >
            <div className="flex flex-col gap-12 sm:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-5xl mx-auto"
              >
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-primary">energy.</span>
                </h4>
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-steady">strategy.</span>
                </h4>
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-foreground">
                  We are the <span className="text-energy">spark.</span>
                </h4>
              </motion.div>
            </div>
            <p className="mt-6 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl font-black text-primary tracking-[0.3em] md:tracking-[0.4em] uppercase animate-pulse">
              AND IT STARTS NOW
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
