"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQs: FAQItem[] = [
  {
    question: "What is The Purple Movement?",
    answer:
      `The Purple Movement is where curious, purpose-driven people come together to explore big 
ideas, solve real problems, and spark meaningful change. 
A barrier-free community where your skills actually matter.`,
  },
  {
    question: "Who can join?",
    answer:
      `If you're driven by purpose, you belong here. No limitations. A place to connect and grow alongside 
others on the same path.`,
  },
  {
    question: "What does 'Beyond Syllabus' mean?",
    answer:
      `Beyond Syllabus is where learning stops being boring. It is about picking up real skills, trying 
new things, and exploring what actually excites you, not just what is written in textbooks.`,
  },
  {
    question: "What does 'Beyond Gatekeepers' mean?",
    answer:
      `Beyond Gatekeepers gives everyone a real chance to grow. By lifting each other up, we create a space 
where anyone with purpose can connect, contribute, and move forward without limitations.`,
  },
  {
    question: "What does 'Beyond Borders' mean?",
    answer:
      `Beyond Borders is all about breaking limits. It helps people connect, share ideas, and 
access opportunities without being held back by geography, systems, or labels.`,
  },
  {
    question: "How can I contribute?",
    answer: (
      <>
        Click{" "}
        <Link href="/join" className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-600 underline-offset-4">
          Join Us
        </Link>
        {" "}that&apos;s all it takes to get started.
      </>
    ),
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20">
        {/* Left: Header */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="h-[1px] w-12 bg-purple-600" />
            <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs">Assistance</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-8">
            GOT <br /><span className="text-purple-600">QUESTIONS?</span>
          </h2>
          <p className="text-base md:text-lg text-white/50">
            Got questions? We&apos;ve got answers. Here are some of the most common things people ask
            about the Purple Movement.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="lg:w-2/3 space-y-4 md:space-y-6">
          {FAQs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border transition-all duration-500 flex items-center justify-between gap-4 md:gap-8 ${openIndex === index
                  ? "bg-purple-900/10 border-purple-500/50"
                  : "bg-zinc-900/30 border-white/5 hover:border-white/20"
                  }`}
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <MinusCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-500 shrink-0" />
                ) : (
                  <PlusCircle className="w-6 h-6 md:w-8 md:h-8 text-white/10 group-hover:text-purple-500 transition-colors shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 md:p-10 md:px-12 text-white/50 text-base md:text-lg leading-relaxed border-l-2 border-purple-600/30 ml-6 md:ml-10 mt-3 md:mt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};