"use client";

import React from "react";
import { motion } from "framer-motion";

const milestones = [
    {
        year: "DISCOVERY",
        title: "The Spark",
        description: "It started with a simple question: Can we create a space without gatekeepers?",
        status: "ORIGIN",
    },
    {
        year: "CURIOSITY",
        title: "First Connections",
        description: "People from different backgrounds started sharing their learning journeys beyond borders.",
        status: "STIRRING",
    },
    {
        year: "PARTICIPATION",
        title: "Rising Together",
        description: "Our first collective projects broke the syllabus limits and opened new doors for everyone.",
        status: "FLOW",
    },
    {
        year: "CONTRIBUTION",
        title: "Shared Progress",
        description: "Every contribution became a seed for someone else's growth, completing the loop.",
        status: "PEAK",
    },
];

export const LivingTimeline = () => {
    return (
        <section className="w-full py-20 sm:py-28 md:py-32 bg-transparent px-4 sm:px-6 border-t border-white/5" id="timeline">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
                    >
                        OUR EVOLUTION
                    </motion.span>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl movement-title text-white">
                        THE <span className="text-purple-600">RISE</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Vertical Line – desktop only */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-0 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full md:w-[45%] group"
                                >
                                    <div className="bg-zinc-900/30 border border-white/5 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] group-hover:border-purple-500/30 transition-all duration-500 group-hover:bg-zinc-900/50">
                                        <div className="flex justify-between items-center mb-4 md:mb-6 gap-4">
                                            <span className="text-purple-400 font-bold tracking-widest text-[10px] uppercase border border-purple-500/20 px-3 py-1 rounded-full flex-shrink-0">
                                                {item.status}
                                            </span>
                                            <span className="text-white/20 font-bold text-xs md:text-sm tracking-widest">
                                                {item.year}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-base md:text-lg leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Dot on Line */}
                                <div className="relative z-10 hidden md:flex items-center justify-center w-20 flex-shrink-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_20px_#8E00FF]"
                                    />
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
