import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { RadialFlow } from "@/components/ui/radialflow";
import { hero, heroflow } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Hero() {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      viewport={viewportConfig}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl">
            <MotionDiv
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md mb-4 md:mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-[10px] text-foreground font-bold tracking-[0.25em] uppercase">
                {hero.badge}
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="w-full">
              <h1 className="text-foreground opacity-80">{hero.title1}</h1>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="pr-4">
              <h1 className="text-tpm w-fit">{hero.title2}</h1>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="flex flex-col items-start gap-8 w-full">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl">
                {hero.subtext}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full justify-start">
                <span className="text-foreground/60 font-medium tracking-widest text-[10px] uppercase">
                  Sounds like you?
                </span>
                <Link href="/join">
                  <InteractiveHoverButton className="group relative">
                    Join Us
                  </InteractiveHoverButton>
                </Link>
              </div>
            </MotionDiv>
          </div>

          <MotionDiv
            variants={fadeInUp}
            className="hidden lg:block relative w-full aspect-square max-w-xl mx-auto"
          >
            <RadialFlow
              topics={heroflow}
              badgeName="THE PURPLE MOVEMENT"
              centralDotColor="var(--primary)"
            />
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
