"use client";

import { MotionDiv, MotionSection } from "@/components/Framer";
import LogoLoop from "@/components/ui/logoloop";
import { gallery } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export function Gallery() {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInDown}>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl">
            THE <span className="text-tpm">GALLERY</span>
          </h2>
        </MotionDiv>
      </div>

      <MotionDiv variants={slideUp} className="w-full max-w-7xl mx-auto">
        <LogoLoop
          logos={gallery.left}
          speed={50}
          direction="left"
          logoHeight={180}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Gallery - 1"
        />
        <LogoLoop
          logos={gallery.right}
          speed={50}
          direction="right"
          logoHeight={180}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Gallery - 2"
        />
      </MotionDiv>
    </MotionSection>
  );
}
