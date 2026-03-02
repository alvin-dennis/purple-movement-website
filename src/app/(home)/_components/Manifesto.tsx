"use client";

import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[40vw] font-black uppercase text-foreground leading-none absolute -top-20 -right-20">MANIFESTO</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          {/* Big Title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center md:items-start"
          >
            <h2 className="text-[10vw] uppercase flex flex-col items-center md:items-start text-center md:text-left">
              <span>MANIFESTO <span className="text-primary">.</span></span>
            </h2>
            <div className="max-w-2xl mt-8 md:mt-12 pl-0 md:pl-8 border-l-0 md:border-l-4 border-primary text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/60 leading-tight">
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
              className="flex flex-col gap-8 md:gap-12 items-center md:items-start"
            >
              <div className="flex items-center gap-6 md:gap-8 w-full">
                <span className="text-primary font-bold tracking-[1em] uppercase text-xs whitespace-nowrap">01</span>
                <div className="h-[1px] w-full bg-foreground/10" />
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase text-center md:text-left">
                THE<br /><span className="text-primary">MANIFESTORS</span>
              </h3>
              <div className="max-w-3xl md:ml-[10vw] lg:ml-[20vw] text-center md:text-left">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground">
                  &ldquo;We are the Manifestors of Change. Not waiting for the future, but
                  building it with <span className="text-primary font-bold">courage, code, creativity, and clarity</span>.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* The Producers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 md:gap-12 items-center md:items-end text-center md:text-right"
            >
              <div className="flex items-center gap-6 md:gap-8 w-full">
                <div className="h-[1px] w-full bg-foreground/10" />
                <span className="text-primary font-bold tracking-[1em] uppercase text-xs whitespace-nowrap">02</span>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase">
                THE<br /><span className="text-steady">PRODUCERS</span>
              </h3>
              <div className="max-w-3xl md:mr-[5vw] lg:mr-[10vw]">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-foreground text-center md:text-right">
                  We are not consumers of culture;{" "}
                  <span className="bg-tpm px-4 md:px-6 py-1 md:py-2 inline-block md:block w-auto md:w-max md:ml-auto mt-4 md:mt-6 font-black uppercase tracking-widest text-lg md:text-2xl lg:text-4xl">
                    we are producers of purpose.
                  </span>
                  {" "}We hold the key to ecosystems that empower, not limit.
                </div>
              </div>
            </motion.div>
          </div>
          {/* Large Statement Block */}
          <motion.div
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="py-12 sm:py-20 md:py-32 flex flex-col items-center text-center justify-center rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group px-6 md:px-12"
          >
            <h4 className="text-[7vw] lg:text-[5vw] font-black leading-[0.9] space-y-2 mb-4 uppercase">
              IN ACCESS,<br />NOT GATEKEEPING.
            </h4>
            <div className="h-1 w-24 md:w-40 bg-primary my-6 md:my-10" />
            <h4 className="text-[7vw] lg:text-[5vw] font-black leading-[0.9] text-primary uppercase">
              IN BOLD VISIONS,<br />NOT TEMPLATES.
            </h4>
            <div className="mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/40 max-w-4xl px-4 md:px-10 leading-relaxed">
              We are here to reclaim the narrative. To give confidence to the
              curious, networks to the bold, and direction to the determined.
            </div>
          </motion.div>

          {/* Final Pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-24 text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300%] bg-primary/5 blur-[150px] -z-10" />
            <div className="flex flex-col gap-12 sm:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-5xl mx-auto"
              >
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-primary">energy.</span>
                </h4>
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-steady">strategy.</span>
                </h4>
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] text-foreground">
                  We are the <span className="text-brand-light">spark.</span>
                </h4>
              </motion.div>
            </div>
            <p className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-primary tracking-[0.3em] md:tracking-[0.4em] uppercase animate-pulse">
              AND IT STARTS NOW
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
