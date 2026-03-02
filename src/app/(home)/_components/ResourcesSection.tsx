"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const resources = [
    {
        title: "The Architecture of Fairness",
        source: "Beyond Borders Journal",
        category: "Philosophy",
        link: "#",
        description: "Exploring how decentralized systems can foster genuine human generosity and collective rise.",
        date: "MAR 2026",
    },
    {
        title: "Learning Without Limits",
        source: "Curiosity Collective",
        category: "Learning",
        link: "#",
        description: "A guide to breaking free from the conventional syllabus mindset and embracing curiosity.",
        date: "FEB 2026",
    },
    {
        title: "The Power of Many",
        source: "Impact Weekly",
        category: "Community",
        link: "#",
        description: "Case studies on collective growth and mutual support networks within the Kerala ecosystem.",
        date: "JAN 2026",
    },
    {
        title: "Mentorship as a Loop",
        source: "Generosity Lab",
        category: "Impact",
        link: "#",
        description: "Redefining leadership as a continuous cycle of empowerment and shared knowledge.",
        date: "DEC 2025",
    },
];

export const ResourcesSection = () => {
    return (
        <section className="w-full py-20 sm:py-28 md:py-32 bg-transparent px-4 sm:px-6 border-t border-white/5" id="resources">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-purple-500 font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
                        >
                            Knowledge Loop
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight">
                            Shared <span className="text-purple-400">Wisdom</span>.
                        </h2>
                        <p className="text-white/40 text-base md:text-lg lg:text-xl leading-relaxed">
                            Resources are not static archives. They are living seeds for our community to plant
                            and grow together. Explore the collective intelligence of the movement.
                        </p>
                    </div>
                </div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
                    <AnimatePresence>
                        {resources.map((res, idx) => (
                            <motion.div
                                key={res.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative bg-[#020205] p-8 md:p-10 hover:bg-zinc-900/30 transition-all duration-500"
                            >
                                <div className="flex justify-between items-start mb-8 md:mb-12 gap-4">
                                    <div className="text-[10px] font-bold tracking-widest text-purple-400 uppercase border border-purple-400/30 px-3 py-1 rounded-full flex-shrink-0">
                                        {res.category}
                                    </div>
                                    <span className="text-[10px] text-white/20 font-mono tracking-tighter flex-shrink-0">
                                        {res.date}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 group-hover:text-purple-200 transition-colors">
                                    {res.title}
                                </h3>
                                <p className="text-white/30 text-sm mb-8 md:mb-12 leading-relaxed max-w-md">
                                    {res.description}
                                </p>

                                <a
                                    href={res.link}
                                    className="inline-flex items-center gap-3 md:gap-4 text-white font-bold tracking-widest text-[10px] hover:text-purple-400 transition-colors"
                                >
                                    READ ARTICLE
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </a>

                                <div className="absolute top-0 right-0 w-0 h-[1px] bg-purple-500 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
