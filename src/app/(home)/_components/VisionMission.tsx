import { MotionDiv, MotionSection } from "@/components/Framer";
import { vision } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const VisionMission = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 sm:py-32 md:py-48 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Vision */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <MotionDiv
              variants={fadeInUp}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8 block"
            >
              OUR VISION
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight">
                {vision.vision.title.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-tpm" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
                {vision.vision.text}
              </p>
            </MotionDiv>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <MotionDiv
              variants={fadeInUp}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8 block"
            >
              OUR MISSION
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight">
                {vision.mission.title.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-tpm" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInUp}>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
                {vision.mission.text}
              </p>
            </MotionDiv>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[28vw] md:text-[30vw] font-black leading-none uppercase tracking-tighter">
          ABOUT
        </span>
      </div>
    </MotionSection>
  );
};
