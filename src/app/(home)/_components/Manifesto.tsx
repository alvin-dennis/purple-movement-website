import { MotionDiv, MotionSection } from "@/components/Framer";
import { levels, manifesto } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Manifesto = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="uppercase flex flex-col items-center mb-4 md:mb-6">
          <span>
            MANIFESTO<span className="text-primary">.</span>
          </span>
        </h2>
        <div className="max-w-4xl mb-12">
          <p className="text-xl sm:text-2xl text-foreground/50 font-medium leading-tight">
            {manifesto.description}
          </p>
        </div>
        <section className="mb-5 max-w-6xl">
          <div className="flex flex-wrap items-baseline text-justify">
            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-4xl md:text-[46px] font-black leading-tight">
                We are a group of {manifesto.sections[0].title.split(" ").pop()}
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-black">who have been</span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-black text-energy uppercase">
                HUMILIATED{" "}
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-normal text-energy">
                by archaic systems, processes, and syllabus for years.
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-semibold">
                We are tired of Borders, Gatekeepers, and any limitations
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-light">getting in the way of...</span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-semibold">The Collective Rise.</span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-normal text-energy">
                We are tired of being told we must follow the rules that were made to keep us small.
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-black text-energy uppercase">
                A Forced Syllabus Chain Gang
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-lg md:text-[17px] font-normal text-energy">
                without any time to
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-normal text-energy">
                be creative because we aren&apos;t trusted to be...
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-black text-energy">
                Beyond Syllabus.
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-light">
                We must destroy these systems that get in the way of...
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-black">The Movement.</span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-xl md:text-[21px] font-normal text-energy">
                Imagine what we do falling into one of three categories:
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block gap-3 flex">
              <span className="text-lg md:text-[17px] font-black uppercase tracking-wider">
                Beyond Borders.
              </span>
              <span className="text-lg md:text-[17px] font-black uppercase tracking-wider">
                Beyond Gatekeepers.
              </span>
              <span className="text-lg md:text-[17px] font-black uppercase tracking-wider">
                Beyond Syllabus.
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="inline-block">
              <span className="text-2xl md:text-[30px] font-semibold">
                {manifesto.statements.reclaim}
              </span>
            </MotionDiv>
          </div>
        </section>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <MotionDiv variants={fadeInUp} className="border-t border-energy">
            <h3 className="text-energy mb-6">We are the energy.</h3>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="border-t border-primary">
            <h3 className="text-primary mb-6">We are the strategy.</h3>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="border-t border-spark">
            <h3 className="text-spark mb-6">We are the spark.</h3>
          </MotionDiv>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <MotionDiv variants={fadeInUp}>
            <h2>{manifesto.statements.startsNow}</h2>
          </MotionDiv>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[28vw] font-black leading-none uppercase tracking-tighter">
          MANIFESTO
        </span>
      </div>
    </MotionSection>
  );
};
