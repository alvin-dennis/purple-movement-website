import Image from "next/image";
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
          <p className="text-xl sm:text-2xl text-foreground/50 font-medium leading-tight text-center md:text-left">
            A declaration of our purpose, our power, and the future we are building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          <div className="md:col-span-2">
            <section className="mb-5 max-w-6xl">
              <div className="flex flex-wrap items-baseline text-justify">
                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-4xl md:text-[46px] font-black leading-tight">
                    We are a group of {manifesto.sections[0].title.split(" ").pop()}
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-xl md:text-[21px] font-black mr-2">who have been</span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-xl md:text-[21px] font-black text-energy uppercase">
                    HUMILIATED
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
                  <span className="text-2xl md:text-[30px] font-light mr-2">
                    getting in the way of...
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-2xl md:text-[30px] font-semibold text-primary">
                    The Collective Rise.
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-xl md:text-[21px] font-normal text-energy">
                    We are tired of being told we must follow the rules that were made to keep us
                    small.
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-xl md:text-[21px] font-black text-energy uppercase">
                    A Forced Syllabus Chain Gang
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-lg md:text-[17px] font-normal text-energy mr-2">
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
                  <span className="text-2xl md:text-[30px] font-light mr-2">
                    We must destroy these systems that get in the way of...
                  </span>
                </MotionDiv>

                <MotionDiv variants={fadeInUp} className="inline-block">
                  <span className="text-2xl md:text-[30px] font-black text-primary">
                    The Movement.
                  </span>
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
                    We are here to reclaim the narrative. To give confidence to the curious,
                    networks to the bold, and direction to the determined.
                  </span>
                </MotionDiv>
              </div>
            </section>
          </div>
          <div className="relative aspect-square w-full opacity-60">
            <Image
              src="/images/manifesto.png"
              alt="Unchained Movement Symbol"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-wrap md:flex-row gap-6 justify-center">
          <MotionDiv variants={fadeInUp} className="border-t border-energy pt-4 min-w-[120px]">
            <h3 className="text-energy mb-2 text-sm uppercase font-black">Energy</h3>
            <p className="font-black text-xl">We are the energy.</p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="border-t border-primary pt-4 min-w-[120px]">
            <h3 className="text-primary mb-2 text-sm uppercase font-black">Strategy</h3>
            <p className="font-black text-xl">We are the strategy.</p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="border-t border-spark pt-4 min-w-[120px]">
            <h3 className="text-spark mb-2 text-sm uppercase font-black">Spark</h3>
            <p className="font-black text-xl">We are the spark.</p>
          </MotionDiv>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-20">
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black">AND IT STARTS NOW</h2>
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
