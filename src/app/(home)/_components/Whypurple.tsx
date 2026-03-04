"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { MotionDiv } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { whyPurple } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full px-6 py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="w-full flex flex-col items-center md:items-start text-center md:text-left"
        >
          <MotionDiv variants={fadeInUp} viewport={viewportConfig} className="mb-8">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
              THE PHILOSOPHY
            </span>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} viewport={viewportConfig}>
            <h2 className="mb-16 lg:text-8xl">Why Purple?</h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} viewport={viewportConfig} className="w-full relative">
            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed">
              <p className="border-l-4 border-primary pl-8 py-2">{whyPurple.quote}</p>
              <p className="text-secondary-foreground">
                {whyPurple.duality[0].text}
                <br className="hidden md:block" />
                {whyPurple.duality[1].text}
              </p>
              <div className="relative">
                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-[115px] opacity-90"
                  }`}
                >
                  <div className="space-y-8 pt-8">
                    <p className="text-primary font-black uppercase tracking-wider text-sm">
                      The Gap we fill
                    </p>

                    <p>{whyPurple.gap.description}</p>

                    <p className="text-secondary-foreground font-bold">{whyPurple.gap.title}</p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
                      {whyPurple.deepDive.map((item) => (
                        <li key={item} className="bg-card p-6 border-l-2 border-primary text-base">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-card p-10 border border-primary">
                      <p className="mb-6 uppercase font-black tracking-widest text-sm">Outcome</p>
                      <p className="text-xl italic">{whyPurple.outcome}</p>
                    </div>

                    <p className="text-secondary-foreground italic">{whyPurple.thought}</p>

                    <p className="text-2xl font-black text-tpm uppercase tracking-tight pt-4">
                      {whyPurple.final}
                    </p>
                  </div>
                </div>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/65 to-transparent pointer-events-none" />
                )}
              </div>
            </div>
            <MotionDiv
              variants={fadeInUp}
              viewport={viewportConfig}
              className="mt-16 flex justify-center w-full"
            >
              <Button
                variant="default"
                onClick={() => setIsExpanded(!isExpanded)}
                className="group px-8 py-6"
              >
                <span className="text-sm font-black uppercase tracking-widest">
                  {isExpanded ? "Close Deep Dive" : "The Deep Dive"}
                </span>

                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" />
                )}
              </Button>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
