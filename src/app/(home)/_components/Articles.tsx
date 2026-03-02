"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { articles } from "@/data/home";

export const Articles = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6" id="resources">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block text-center lg:text-left"
            >
              Knowledge Loop
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight text-center lg:text-left">
              Shared <span className="text-tpm">Wisdom</span>.
            </h2>
            <p className="textforeground/40 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
              Resources are not static archives. They are living seeds for our community to plant
              and grow together. Explore the collective intelligence of the movement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bgforeground/5 rounded-2xl overflow-hidden">
          <AnimatePresence>
            {articles.map((res, idx) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#020205] p-8 md:p-10 hover:bg-zinc-900/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8 md:mb-12 gap-4">
                  <div className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/30 px-3 py-1 rounded-full flex-shrink-0">
                    {res.category}
                  </div>
                  <span className="text-[10px] textforeground/20 font-mono flex-shrink-0">
                    {res.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 group-hover:text-primary transition-colors">
                  {res.title}
                </h3>
                <p className="textforeground/30 text-sm mb-8 md:mb-12 leading-relaxed max-w-md">
                  {res.description}
                </p>

                <a
                  href={res.link}
                  className="inline-flex items-center gap-3 md:gap-4 font-bold tracking-widest text-[10px] hover:text-primary transition-colors"
                >
                  READ ARTICLE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>

                <div className="absolute top-0 right-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
