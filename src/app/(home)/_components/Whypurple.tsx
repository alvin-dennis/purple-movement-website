"use client";

import { useState } from "react";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { whyPurple } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative w-full px-4 py-20 overflow-hidden"
      id="whypurple"
    >
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInUp}>
          <h2 className="mb-16 leading-tight">
            Why <span className="text-tpm">Purple?</span>
          </h2>
        </MotionDiv>
        <MotionDiv variants={fadeInUp} className="w-full relative">
          <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed">
            <p className="text-base md:text-lg lg:text-xl border-l-4 border-primary pl-8 py-2">
              {whyPurple.quote}
            </p>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-xl">
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

                  <p className="text-foreground/70 text-base md:text-lg lg:text-xl">
                    {whyPurple.gap.description}
                  </p>

                  <p className="text-secondary-foreground font-bold text-base md:text-lg lg:text-xl">
                    {whyPurple.gap.title}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
                    {whyPurple.deepDive.map((item) => (
                      <li key={item} className="bg-card p-6 border-l-2 border-primary text-base">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-card p-10 border border-primary">
                    <p className="md:text-lg lg:text-xl mb-6 uppercase font-black tracking-widest text-sm">
                      Outcome
                    </p>
                    <p className="text-base md:text-lg lg:text-xl italic">{whyPurple.outcome}</p>
                  </div>

                  <p className="text-secondary-foreground italic text-base md:text-lg lg:text-xl">
                    {whyPurple.thought}
                  </p>

                  <p className="font-black text-tpm uppercase tracking-tight pt-4 text-base md:text-lg lg:text-xl">
                    {whyPurple.final}
                  </p>
                </div>
              </div>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
              )}
            </div>
          </div>
          <MotionDiv
            variants={fadeInUp}
            viewport={viewportConfig}
            className="mt-16 flex justify-center w-full"
          >
            <InteractiveHoverButton onClick={() => setIsExpanded(!isExpanded)} className="group">
              <span className="text-sm font-black uppercase tracking-widest">
                {isExpanded ? "Close" : "The Deep Dive"}
              </span>
            </InteractiveHoverButton>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
