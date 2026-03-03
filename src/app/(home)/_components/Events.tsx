import Image from "next/image";
import { MotionDiv } from "@/components/Framer";
import { Card } from "@/components/ui/card";
import { events } from "@/data/home";
import { containerVariants, fadeInUp, viewportConfig } from "@/lib/animations";

export const Events = () => {
  return (
    <section
      className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 relative overflow-hidden"
      id="events"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-4xl">
            <MotionDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex items-center justify-center sm:justify-start gap-3 mb-4 md:mb-6"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                Kerala Stories
              </span>
            </MotionDiv>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 text-center sm:text-left">
              Lived <span className="text-tpm">Experiences</span>
            </h2>

            <p className="text-foreground/50 text-base md:text-lg lg:text-xl leading-relaxed text-center sm:text-left">
              Our movement is rooted in real moments. These aren&apos;t just events; they are the
              heartbeat of a community rising together.
            </p>
          </div>
        </div>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Card className="w-full backdrop-blur-xl rounded-[40px] border-2 border-primary md:p-6">
            <div className="group flex max-md:flex-col justify-center gap-4 md:gap-6 mx-auto">
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className="group/article relative w-full rounded-xl overflow-hidden 
                  md:group-hover:[&:not(:hover)]:w-[25%] 
                  transition-all duration-500 
                  ease-[cubic-bezier(.3,.85,.3,1)]
                  before:absolute before:inset-x-0 before:bottom-0 before:h-full 
                  before:bg-gradient-to-t before:from-background/90 before:to-transparent 
                  before:transition-opacity md:before:opacity-0 
                  md:hover:before:opacity-100"
                >
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/30 md:opacity-70 md:group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <div
                    className={`hidden md:flex absolute inset-0 ${
                      index % 2 === 0 ? "items-start pt-4" : "items-end pb-4"
                    } justify-center z-20 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300`}
                  >
                    <span className="px-4 py-2 text-sm font-medium text-center max-w-[90%] overflow-hidden backdrop-blur-sm bg-background/50 rounded-full">
                      {event.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/article:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative overflow-hidden">
                      <h3 className="text-2xl md:text-3xl font-medium md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-300 ease-out delay-200">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base font-medium mt-2 md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-300 ease-out delay-300 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-background/10 group-hover/article:bg-background/0 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent z-10" />
                  <Image
                    className="object-cover h-72 w-68 md:h-[550px] md:w-full"
                    src={event.image}
                    alt={event.title}
                    width={960}
                    height={480}
                    loading="lazy"
                  />
                </article>
              ))}
            </div>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
};
