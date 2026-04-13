"use client";

import Image from "next/image";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card } from "@/components/ui/card";
import { events } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const Events = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16 px-4 relative overflow-hidden"
      id="events"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-center mb-8 md:mb-12 gap-4 md:gap-6">
          <div className="max-w-3xl flex flex-col items-center text-center">
            <MotionDiv variants={fadeInDown}>
              <h2 className="mb-3 md:mb-5 leading-tight text-3xl md:text-4xl lg:text-5xl">
                Lived <span className="text-tpm">Experiences</span>
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeIn}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Our movement is rooted in real moments. These aren&apos;t just events; they are the
                heartbeat of a community rising together.
              </p>
            </MotionDiv>
          </div>
        </div>

        <MotionDiv variants={slideUp}>
          <Card className="w-full backdrop-blur-xl rounded-[32px] md:rounded-[40px] border border-primary/20 overflow-hidden">
            <div className="flex max-md:flex-col justify-center gap-3 md:gap-4 mx-auto">
              {events.map((event, index) => (
                <MotionDiv
                  key={event.title}
                  variants={slideUp}
                  className="group/article relative w-full rounded-lg md:rounded-xl overflow-hidden 
                    md:group-hover:[&:not(:hover)]:w-[22%] 
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
                    <span className="px-3 py-1.5 text-xs font-medium text-center max-w-[90%] overflow-hidden backdrop-blur-sm bg-background/60 rounded-full">
                      {event.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 p-4 md:p-5 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/article:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative overflow-hidden">
                      <h3 className="md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-300 ease-out delay-200 text-lg font-semibold">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium mt-1.5 md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-300 ease-out delay-300 line-clamp-2 text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-background/10 group-hover/article:bg-background/0 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent z-10" />
                  <Image
                    className="object-cover h-56 md:h-[480px] w-full"
                    src={event.image}
                    alt={event.title}
                    width={960}
                    height={480}
                  />
                </MotionDiv>
              ))}
            </div>
          </Card>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
