"use client";

import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-[40vw] font-black uppercase text-white leading-none absolute -top-20 -right-20">MANIFESTO</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          {/* Big Title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h2 className="text-[10vw] uppercase flex flex-col">
              <span>MANIFESTO <span className="text-purple-600">.</span></span>
            </h2>
            <div className="max-w-2xl mt-8 md:mt-12 pl-2 sm:pl-4 md:pl-8 border-l-4 border-purple-600">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/60 leading-tight">
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
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase">
                THE<br /><span className="text-purple-600">MANIFESTORS</span>
              </h3>
              <div className="max-w-3xl md:ml-[10vw] lg:ml-[20vw]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-white">
                  &ldquo;We are the Manifestors of Change. Not waiting for the future, but
                  building it with <span className="text-purple-600 font-bold not-italic">courage, code, creativity, and clarity</span>.&rdquo;
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
              <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black uppercase">
                THE<br /><span className="text-indigo-500">PRODUCERS</span>
              </h3>
              <div className="max-w-3xl md:mr-[5vw] lg:mr-[10vw]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-white">
                  We are not consumers of culture;{" "}
                  <span className="bg-purple-600 text-foreground px-4 md:px-6 py-1 md:py-2 inline-block md:block w-auto md:w-max md:ml-auto mt-4 md:mt-6 not-italic font-black uppercase tracking-widest text-lg md:text-2xl lg:text-4xl">
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
            className="py-12 sm:py-20 md:py-32 flex flex-col items-center text-center justify-center rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group px-6 md:px-12"
          >
            <h4 className="text-[7vw] lg:text-[5vw] font-black leading-[0.9] space-y-2 mb-4 uppercase">
              IN ACCESS,<br />NOT GATEKEEPING.
            </h4>
            <div className="h-1 w-24 md:w-40 bg-purple-600 my-6 md:my-10" />
            <h4 className="text-[7vw] lg:text-[5vw] font-black leading-[0.9] text-purple-600 uppercase">
              IN BOLD VISIONS,<br />NOT TEMPLATES.
            </h4>
            <p className="mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-white/40 max-w-4xl px-4 md:px-10 leading-relaxed">
              We are here to reclaim the narrative. To give confidence to the
              curious, networks to the bold, and direction to the determined.
            </p>
          </motion.div>

          {/* Final Pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-24 text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300%] bg-purple-600/5 blur-[150px] -z-10" />
            <div className="flex flex-col gap-12 sm:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-5xl mx-auto"
              >
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-purple-600">energy.</span>
                </h4>
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] mb-6">
                  We are the <span className="text-indigo-500">strategy.</span>
                </h4>
                <h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.9] text-white">
                  We are the <span className="text-purple-400">spark.</span>
                </h4>
              </motion.div>
            </div>
            <p className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-purple-500 tracking-[0.3em] md:tracking-[0.4em] uppercase animate-pulse">
              AND IT STARTS NOW
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
