"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    image: "/images/flow.png",
    title: "Kochi Creative Meet",
    description: "Exploring the intersections of traditional Kerala art and modern digital expressions.",
    size: "md:col-span-2 md:row-span-2",
    tag: "Art & Tech",
  },
  {
    image: "/images/saddle.jpg",
    title: "Alleppey Backwaters Pulse",
    description: "A journey through the waters, finding rhythm in community movement.",
    size: "md:col-span-1 md:row-span-1",
    tag: "Community",
  },
  {
    image: "/images/p80-1.jpg",
    title: "Wayanad Tech Retreat",
    description: "Deep growth and shared learning amidst the mist of the Western Ghats.",
    size: "md:col-span-1 md:row-span-2",
    tag: "Growth",
  },
  {
    image: "/images/hkbr.jpg",
    title: "Trivandrum Open Loop",
    description: "Building open source culture in the heart of the capital city.",
    size: "md:col-span-1 md:row-span-1",
    tag: "Open Source",
  },
  {
    image: "/images/aic.jpg",
    title: "Munnar Mindscape",
    description: "Elevating human compassion above the clouds, a collective peak experience.",
    size: "md:col-span-2 md:row-span-1",
    tag: "Impact",
  },
];

export const Events = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 bg-transparent px-4 sm:px-6 relative overflow-hidden" id="events">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-900/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-purple-400 font-bold tracking-[0.4em] uppercase text-xs">
                Kerala Stories
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8 leading-[1.1]">
              Lived <span className="italic text-purple-400">Experiences</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg lg:text-xl leading-relaxed">
              Our movement is rooted in real moments. These aren&apos;t just events;
              they are the heartbeat of a community rising together.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[280px] lg:auto-rows-[320px]">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border border-white/5 min-h-[280px] sm:min-h-0 ${event.size}`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-purple-300 uppercase tracking-widest mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {event.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                    {event.title}
                  </h3>
                  <p className="text-white/40 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2rem] md:rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-24 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 md:px-12 py-4 md:py-5 overflow-hidden rounded-full transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 group-hover:from-purple-700 group-hover:to-purple-500 transition-colors" />
            <span className="relative z-10 text-white font-bold tracking-widest text-sm flex items-center gap-3">
              BECOME THE STORY
              <div className="w-5 h-[1px] bg-white group-hover:w-8 transition-all" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
