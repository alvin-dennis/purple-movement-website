"use client";

import { MotionDiv, MotionSection } from "@/components/Framer";
import { TimelineClient } from "@/components/ui/timeline";
import { timeline } from "@/data/home";
import {
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const Timeline = ({ forceVisible = false }: { forceVisible?: boolean }) => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial={forceVisible ? "visible" : "hidden"}
      {...(forceVisible ? {} : { whileInView: "visible", viewport: viewportConfig })}
      className="w-full px-4 py-12 md:py-16 relative overflow-hidden"
      id="timeline"
    >
      <div className="max-w-7xl mx-auto relative mb-8 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInDown}>
          <h2 className="text-foreground leading-tight text-3xl md:text-4xl lg:text-5xl">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </MotionDiv>
        <MotionDiv
          variants={slideUp}
          {...(forceVisible ? { animate: "visible", initial: "visible" } : {})}
          className="w-full text-left mt-8"
        >
          <TimelineClient data={timeline} forceVisible={forceVisible} />
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
