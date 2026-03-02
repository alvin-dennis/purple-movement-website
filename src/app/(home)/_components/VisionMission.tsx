"use client";

import { motion } from "framer-motion";

export const VisionMission = () => {
  return (
    <section
      id="about"
      className="w-full py-24 sm:py-32 md:py-40 lg:py-60 bg-transparent px-4 sm:px-6 relative flex flex-col items-center justify-center border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16 sm:gap-24 md:gap-32 relative">
        {/* Background Big Text */}
        <div className="absolute top-0 left-0 w-full select-none pointer-events-none opacity-[0.02] overflow-hidden">
          <span className="text-[30vw] font-black uppercase text-white leading-none">PURPOSE</span>
        </div>

        {/* Asymmetric Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start relative z-10">
          {/* Vision Half */}
          <div className="lg:col-span-1 lg:block hidden" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-10"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="text-purple-500 font-bold tracking-[0.6em] uppercase text-[10px]">The Foundation</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl movement-title text-white leading-[0.9] tracking-tighter">
                OUR<br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent italic">VISION</span>
              </h2>
            </div>
            <p className="movement-subtitle text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-white/50 border-l border-white/10 pl-6 md:pl-10">
              We aim to build a world free of barriers and privilege, where
              compassion and fairness open the door for everyone to rise and realize
              their potential.
            </p>
          </motion.div>

          <div className="lg:col-span-1 lg:block hidden" />

          {/* Mission Half */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-10 lg:items-end lg:text-right lg:mt-32"
          >
            <div className="flex flex-col gap-3 md:gap-4 lg:items-end">
              <span className="text-purple-500 font-bold tracking-[0.6em] uppercase text-[10px]">The Propulsion</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl movement-title text-white leading-[0.9] tracking-tighter">
                OUR<br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent italic">MISSION</span>
              </h2>
            </div>
            <p className="movement-subtitle text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-white/50 lg:border-r lg:border-l-0 border-l border-white/10 lg:pr-10 lg:pl-0 pl-6 lg:text-right">
              A community that rises beyond borders, syllabus limits, and
              gatekeepers, where curiosity and generosity guide how we learn and
              grow.
            </p>
          </motion.div>
        </div>

        {/* Center statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center border-t border-b border-white/5 py-12 md:py-24 px-4"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-white italic leading-tight uppercase opacity-80">
            Together, we create an open cycle of shared learning, mutual
            support, and lifelong empowerment because{" "}
            <br className="hidden md:block" />
            <span className="text-purple-500 not-italic tracking-[0.15em] md:tracking-[0.2em] font-normal text-sm md:text-lg mt-6 md:mt-8 block">
              REAL PROGRESS BEGINS WITH GENEROSITY.
            </span>
          </h3>
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/10 blur-[180px] rounded-full pointer-events-none" />
    </section>
  );
};
