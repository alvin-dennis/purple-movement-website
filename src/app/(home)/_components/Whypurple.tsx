"use client";
import Image from "next/image";
import { useState } from "react";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative w-full px-4 py-10 overflow-hidden"
      id="whypurple"
    >
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <MotionDiv variants={fadeInUp}>
          <h2 className="mb-8 leading-tight">
            Why <span className="text-tpm">Purple?</span>
          </h2>
        </MotionDiv>
        <MotionDiv variants={fadeInUp} className="w-full relative">
          <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed">
            <p className="text-base md:text-lg lg:text-xl border-l-4 border-primary pl-8 py-2">
              Purple isn&apos;t just a colour for us, it represents what happens when{" "}
              <Highlighter action="highlight" color="#ffd1dc">
                two worlds meet
              </Highlighter>
              .
            </p>
            <p className="text-secondary-foreground text-base md:text-lg lg:text-xl">
              <Highlighter action="highlight" color="#ffd1dc">
                Red
              </Highlighter>{" "}
              symbolizes the youth: energetic, passionate, curious, and ready to create change.
              <br className="hidden md:block" />
              <Highlighter action="highlight" color="#ffd1dc">
                Blue
              </Highlighter>{" "}
              symbolizes experienced professionals: steady, knowledgeable, and capable of unlocking
              new possibilities.
            </p>
            <div className="relative">
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  isExpanded ? "max-h-[2000px] opacity-100" : "max-h-[115px] opacity-90"
                }`}
              >
                <div className="space-y-8 pt-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                    <div className="w-full md:w-1/2 text-left">
                      <p className="text-primary font-black uppercase tracking-wider text-sm mb-4">
                        The Gap we fill
                      </p>
                      <p className="text-foreground/70 text-base md:text-lg lg:text-xl">
                        Today, a gap exists between these two groups. There&apos;s no{" "}
                        {isExpanded ? (
                          <Highlighter action="box" color="#ffd1dc">
                            bridge
                          </Highlighter>
                        ) : (
                          "bridge"
                        )}
                        , no shared space where they can learn from each other. We aim to{" "}
                        {isExpanded ? (
                          <Highlighter action="highlight" color="#ffd1dc">
                            bridge that gap
                          </Highlighter>
                        ) : (
                          "bridge that gap"
                        )}
                        .
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-square max-w-[300px]">
                      <Image
                        src="/assets/events/duality.png"
                        alt="Red and Blue merging into Purple"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <Badge className="font-bold text-base md:text-lg lg:text-xl">
                    WE AIM TO BRIDGE THAT GAP.
                  </Badge>

                  <ul className="flex flex-col md:flex-row gap-6 list-none">
                    <li className="bg-card p-6 border-l-2 border-primary text-base">
                      A place where{" "}
                      {isExpanded ? (
                        <Highlighter action="circle" color="#0061CE">
                          young minds
                        </Highlighter>
                      ) : (
                        "young minds"
                      )}{" "}
                      can prove that change is possible and necessary.
                    </li>
                    <li className="bg-card p-6 border-l-2 border-primary text-base">
                      A place where{" "}
                      {isExpanded ? (
                        <Highlighter action="circle" color="#0061CE">
                          experts
                        </Highlighter>
                      ) : (
                        "experts"
                      )}{" "}
                      can guide, inspire, and open doors to new opportunities.
                    </li>
                    <li className="bg-card p-6 border-l-2 border-primary text-base">
                      A place where everyone can be themselves, grow together, and lift each other
                      up.
                    </li>
                  </ul>

                  <Card className="bg-primary/5 border border-primary">
                    <p className="md:text-lg lg:text-xl mb-6 uppercase font-black tracking-widest text-sm">
                      Outcome
                    </p>
                    <p className="text-base md:text-lg lg:text-xl italic">
                      When red and blue come together, they create{" "}
                      {isExpanded ? <Highlighter color="#ffd1dc">purple</Highlighter> : "purple"}
                      —a symbol of collaboration, balance, and the future we want to build.
                    </p>
                  </Card>

                  <p className="text-secondary-foreground italic text-base md:text-lg lg:text-xl">
                    And that thought every person has felt at least once: &quot;If only there was a
                    place where I could learn, connect, and be understood&quot;
                  </p>

                  <p className="font-black text-tpm uppercase tracking-tight pt-4 text-base md:text-lg lg:text-xl">
                    We&apos;re here to make that place real.
                  </p>
                </div>
              </div>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
              )}
            </div>
          </div>
          <MotionDiv
            variants={fadeInUp}
            viewport={viewportConfig}
            className="mt-16 flex justify-center w-full"
          >
            <InteractiveHoverButton onClick={() => setIsExpanded(!isExpanded)} className="group">
              <span className="text-sm font-black uppercase tracking-widest">
                {isExpanded ? "Close" : "The Deep Dive"}
              </span>
            </InteractiveHoverButton>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};
