import { MotionDiv, MotionSection } from "@/components/Framer";
import LogoLoop from "@/components/ui/logoloop";
import { gallery } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Gallery() {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInUp}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl text-foreground">
            THE <span className="text-tpm">GALLERY</span>
          </h2>
        </MotionDiv>
      </div>

      <MotionDiv variants={fadeInUp} className="w-full">
        <LogoLoop
          logos={gallery.left}
          speed={50}
          direction="left"
          logoHeight={200}
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
          logoHeight={200}
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
