"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { whyPurple } from "@/data/home";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full px-6 py-16 md:px-12 md:py-24 flex justify-center items-center">
      <div className="max-w-3xl w-full text-center md:text-left">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">Why Purple?</h2>

          <div className="h-1 w-24 md:w-32 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="relative text-base md:text-lg leading-relaxed space-y-6 text-left">
          <p>{whyPurple.quote}</p>

          <p>
            {whyPurple.duality[0].text}
            <br className="hidden md:block" />
            {whyPurple.duality[1].text}
          </p>

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-6 pt-4">
              <p>{whyPurple.gap.description}</p>

              <p>{whyPurple.gap.title}</p>

              <ul className="list-none space-y-2">
                {whyPurple.deepDive.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p>{whyPurple.outcome}</p>

              <p>{whyPurple.thought}</p>

              <p className="pt-2">{whyPurple.final}</p>
            </div>
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant={"default"}
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              {isExpanded ? "Read Less" : "Read More"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};
