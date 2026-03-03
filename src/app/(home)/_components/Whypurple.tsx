import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/Framer";
import { Card, CardContent } from "@/components/ui/card";
import { whyPurple } from "@/data/home";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export const Whypurple = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-60 relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          <div className="w-full lg:w-1/3 flex flex-col gap-8 md:gap-12 lg:sticky lg:top-40 items-center lg:items-start">
            <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start">
              <span className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] text-center lg:text-left">
                Why we exist
              </span>

              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-foreground uppercase leading-none text-center lg:text-left">
                The
                <br />
                <span className="text-tpm border-b-2 border-primary py-2 md:py-4 block">
                  Philosophy
                </span>
              </h2>
            </div>
            <p className="text-foreground/40 font-bold tracking-widest uppercase text-xs leading-loose max-w-xs text-center lg:text-left">
              Purple represents what happens when two worlds collide. Energy meets experience.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative flex flex-col items-center lg:items-start"
            >
              <span className="text-[20vw] absolute -top-10 md:-top-20 -left-4 md:-left-10 font-black text-foreground/[0.03] leading-none pointer-events-none select-none">
                &ldquo;PURPLE&rdquo;
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-foreground leading-[1.1] relative z-10 text-center lg:text-left">
                {whyPurple.quote.includes(". ") ? (
                  <>
                    {whyPurple.quote.split(". ")[0]}. <br className="hidden sm:block" />
                    <span className="text-tpm">{whyPurple.quote.split(". ")[1]}</span>
                  </>
                ) : (
                  <>
                    {whyPurple.quote.split(", ")[0]}, <br className="hidden sm:block" />
                    <span className="text-tpm">{whyPurple.quote.split(", ")[1]}</span>
                  </>
                )}
              </h3>
            </MotionDiv>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative">
              {whyPurple.duality.map((item, index) => {
                const isEnergy = item.id === "01";
                const bgClass = isEnergy ? "bg-energy/30" : "bg-steady/30";
                const borderClass = isEnergy ? "border-energy/10" : "border-steady/10";
                const hoverBgClass = isEnergy ? "hover:bg-energy/40" : "hover:bg-steady/40";
                const textClass = isEnergy ? "text-energy" : "text-steady";

                return (
                  <MotionDiv
                    key={item.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className={`${bgClass} backdrop-blur-3xl border ${borderClass} p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group ${hoverBgClass} transition-all duration-700 ${
                      index === 1 ? "sm:mt-12" : ""
                    } flex flex-col items-center sm:items-start`}
                  >
                    <span
                      className={`${textClass} font-black tracking-widest text-xs block mb-6 md:mb-8 uppercase text-center sm:text-left`}
                    >
                      {item.id} / {item.title}
                    </span>

                    <h4 className="text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6 uppercase text-center sm:text-left">
                      {item.label}
                    </h4>

                    <p className="text-foreground/60 text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
                      {item.text.split(":")[0]}:{" "}
                      <span className={`${textClass} font-bold`}>
                        {item.text.split(":")[1].trim().split(",")[0]}
                      </span>
                      , {item.text.split(":")[1].trim().split(",").slice(1).join(",")}
                    </p>
                  </MotionDiv>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden group mt-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24">
          <AnimatePresence>
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-hidden"
            >
              <div className="pt-12 md:pt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {whyPurple.deepDive.map((text) => (
                  <div key={text} className="flex flex-col gap-4">
                    <div className="h-1 w-12 bg-primary" />
                    <p className="text-foreground font-bold text-base md:text-lg uppercase tracking-widest">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-16 md:mt-24 flex flex-col items-center gap-12 text-center">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl font-medium">
                  {whyPurple.outcome}
                </p>

                <p className="text-xl md:text-3xl text-foreground italic leading-relaxed max-w-4xl">
                  {whyPurple.thought}
                </p>

                <div className="w-full flex justify-center">
                  <Card className="bg-tpm backdrop-blur-xl border border-primary/50 rounded-2xl md:rounded-3xl max-w-5xl w-full">
                    <CardContent className="p-8 md:p-12 text-center">
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1]">
                        {whyPurple.final.toUpperCase()}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
