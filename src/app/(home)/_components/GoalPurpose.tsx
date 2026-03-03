import { MotionDiv } from "@/components/Framer";
import { vision } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const VisionMission = () => {
  return (
    <section
      id="about"
      className="w-full py-24 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative flex flex-col items-center justify-center"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-16 sm:gap-24 md:gap-32 relative">
        <div className="absolute top-0 left-0 w-full select-none pointer-events-none opacity-[0.02] overflow-hidden">
          <span className="text-[30vw] font-black uppercase text-foreground leading-none">
            PURPOSE
          </span>
        </div>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6 md:gap-10 items-center lg:items-start"
          >
            <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-start">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-left">
                The Foundation
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground leading-[0.9] text-center lg:text-left">
                OUR
                <br />
                <span className="text-tpm">{vision.vision.title}</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/50 border-l-0 lg:border-l border-foreground/10 lg:pl-10 text-center lg:text-left">
              {vision.vision.text}
            </p>
          </MotionDiv>
          <MotionDiv variants={fadeInUp} className="p-8 md:p-12 backdrop-blur-xl group">
            <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-end">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-right">
                The Propulsion
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground leading-[0.9] text-center lg:text-right">
                OUR
                <br />
                <span className="text-tpm">{vision.mission.title}</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/50 lg:border-r border-l-0 border-foreground/10 lg:pr-10 text-center lg:text-right">
              {vision.mission.text}
            </p>
          </MotionDiv>
        </MotionDiv>
        <MotionDiv
          variants={fadeInUp}
          className="mt-12 md:mt-20 pt-12 md:pt-20 border-t border-foreground/5 text-center"
        >
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-foreground leading-tight uppercase opacity-80">
            {vision.statement}
            <br className="hidden md:block" />
            <span className="text-primary tracking-[0.15em] md:tracking-[0.2em] font-normal text-lg md:text-2xl mt-6 md:mt-8 block">
              REAL PROGRESS BEGINS WITH GENEROSITY.
            </span>
          </h3>
        </MotionDiv>
      </div>
    </section>
  );
};
