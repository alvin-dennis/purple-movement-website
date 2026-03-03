import { MotionDiv } from "@/components/Framer";
import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Timeline = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6" id="timeline">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
          >
            OUR EVOLUTION
          </MotionDiv>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
            THE <span className="text-tpm">RISE</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-tpm hidden md:block" />
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-12 md:space-y-24"
          >
            {timeline.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-0 ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <MotionDiv key={item.title} variants={fadeInUp} className="w-full md:w-[45%] group">
                  <Card className="backdrop-blur-xl border border-primary/50 transition-all duration-500">
                    <CardContent className="p-6 sm:p-8 md:p-10">
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 md:mb-6 gap-4">
                        <span className="text-foreground font-bold tracking-widest text-[10px] uppercase border border-primary/20 px-3 py-1 rounded-full flex-shrink-0">
                          {item.status}
                        </span>

                        <span className="text-foreground/20 font-bold text-xs md:text-sm tracking-widest">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 text-center md:text-left">
                        {item.title}
                      </h3>

                      <p className="text-foreground/50 text-base md:text-lg leading-relaxed text-center md:text-left">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
                <div className="relative z-10 hidden md:flex items-center justify-center w-20 flex-shrink-0">
                  <MotionDiv
                    variants={fadeInUp}
                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
                  />
                </div>
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
