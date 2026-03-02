"use client";

import { motion } from "framer-motion";

export const VisionMission = () => {
  return (
    <section
      id="about"
      className="w-full py-24 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative flex flex-col items-center justify-center"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16 sm:gap-24 md:gap-32 relative">
        <div className="absolute top-0 left-0 w-full select-none pointer-events-none opacity-[0.02] overflow-hidden">
          <span className="text-[30vw] font-black uppercase text-foreground leading-none">PURPOSE</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start relative z-10">
          <div className="lg:col-span-1 lg:block hidden" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-10 items-center lg:items-start"
          >
            <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-start">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-left">The Foundation</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground leading-[0.9] text-center lg:text-left">
                OUR<br />
                <span className="text-tpm">VISION</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/50 border-l-0 lg:border-l border-foreground/10 lg:pl-10 text-center lg:text-left">
              We aim to build a world free of barriers and privilege, where
              compassion and fairness open the door for everyone to rise and realize
              their potential.
            </p>
          </motion.div>
          <div className="lg:col-span-1 lg:block hidden" />
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-10 items-center lg:items-end lg:text-right lg:mt-32"
          >
            <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-end">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-right">The Propulsion</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground leading-[0.9] text-center lg:text-right">
                OUR<br />
                <span className="text-tpm">MISSION</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/50 lg:border-r border-l-0 border-foreground/10 lg:pr-10 text-center lg:text-right">
              A community that rises beyond borders, syllabus limits, and
              gatekeepers, where curiosity and generosity guide how we learn and
              grow.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center border-t border-b border-foreground/5 py-12 px-4"
        >
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-foreground leading-tight uppercase opacity-80">
            Together, we create an open cycle of shared learning, mutual
            support, and lifelong empowerment because{" "}
            <br className="hidden md:block" />
            <span className="text-primary tracking-[0.15em] md:tracking-[0.2em] font-normal text-lg md:text-2xl mt-6 md:mt-8 block">
              REAL PROGRESS BEGINS WITH GENEROSITY.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};
