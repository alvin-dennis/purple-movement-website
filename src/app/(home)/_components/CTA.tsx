"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cta } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  fadeInRight,
  fadeInUp,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const CallToAction = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative overflow-hidden px-6 md:px-10 lg:px-16 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16 relative z-10">
          <div className="lg:w-2/3 text-center lg:text-left w-full flex flex-col items-center lg:items-start">
            <MotionDiv
              variants={slideUp}
              viewport={viewportConfig}
              className="mb-8 md:mb-10 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h2 className="mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                {cta.title1} <br />
                <span className="text-tpm">{cta.title2}</span> {cta.title3}
              </h2>
              <div className="max-w-2xl lg:pl-8 space-y-4 md:space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  You&apos;ve sparked the start of a{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    borderless, collaborative journey
                  </Highlighter>
                  . Ideas will grow,{" "}
                  <Highlighter action="circle" color="#0061CE">
                    connections will flourish
                  </Highlighter>
                  , and together, we&apos;ll turn{" "}
                  <Highlighter action="box" color="#ffd1dc">
                    ambition into real impact
                  </Highlighter>
                  .
                </p>
                <h3 className="text-foreground text-xl md:text-2xl font-bold">
                  {cta.statement.split(" THE ")[0]} THE{" "}
                  <span className="text-primary">{cta.statement.split(" THE ")[1]}</span>
                </h3>
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeIn} viewport={viewportConfig}>
              <Link
                href="/join"
                className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 group cursor-pointer"
              >
                <InteractiveHoverButton>{cta.buttonText}</InteractiveHoverButton>
                <div className="items-center gap-3 text-primary font-bold uppercase tracking-[0.25em] text-[10px] opacity-0 group-hover:opacity-100 transition-all transform md:translate-x-[-15px] group-hover:translate-x-0 hidden sm:flex">
                  GET STARTED <div className="w-10 h-[1px] bg-primary" />
                </div>
              </Link>
            </MotionDiv>
          </div>

          <MotionDiv
            variants={fadeInRight}
            viewport={viewportConfig}
            className="lg:w-1/3 relative w-full flex justify-center"
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                fill
                src="/assets/events/spiral.webp"
                alt="Purple Movement spiral illustration"
                className="object-contain opacity-30"
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};
