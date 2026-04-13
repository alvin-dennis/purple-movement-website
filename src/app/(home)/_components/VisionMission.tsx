"use client";

import { Lightbulb, Target } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { vision } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
  viewportConfigMedium,
} from "@/lib/animations";

export const VisionMission = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full px-4 py-16 md:py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          <MotionDiv variants={slideUp} className="group h-full">
            <Card className="shadow-xl relative overflow-hidden h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-bl-full transition-all duration-500 group-hover:scale-110" />

              <CardHeader className="flex flex-row items-center space-y-0 gap-3 md:gap-4 pb-6 md:pb-8">
                <div className="bg-primary p-2.5 md:p-3 rounded-xl">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  OUR <span className="text-primary">{vision.vision.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We aim to build a world free of{" "}
                  <Highlighter action="bracket" color="#DE3B3D">
                    barriers and privilege
                  </Highlighter>
                  , where{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    compassion and fairness
                  </Highlighter>{" "}
                  open the door for everyone to rise and realize their{" "}
                  <Highlighter action="circle" color="#0061CE">
                    potential
                  </Highlighter>
                  . By helping people grow and encouraging them to uplift others, we create a
                  community that{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    thrives together
                  </Highlighter>
                  .
                </p>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv variants={slideUp} className="group h-full">
            <Card className="shadow-xl relative overflow-hidden h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-br-full transition-all duration-500 group-hover:scale-110" />

              <CardHeader className="flex flex-row items-center space-y-0 gap-3 md:gap-4 pb-6 md:pb-8">
                <div className="bg-primary p-2.5 md:p-3 rounded-xl">
                  <Target className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl">
                  OUR <span className="text-primary">{vision.mission.title}</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A community that rises{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    beyond borders
                  </Highlighter>
                  ,{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    syllabus limits
                  </Highlighter>
                  , and{" "}
                  <Highlighter action="circle" color="#0061CE">
                    gatekeepers
                  </Highlighter>
                  , where{" "}
                  <Highlighter action="highlight" color="#ffd1dc">
                    curiosity and generosity
                  </Highlighter>{" "}
                  guide how we learn and grow. By breaking down barriers and removing limits, we
                  create a space where everyone can{" "}
                  <Highlighter action="box" color="#primary">
                    connect, collaborate, and grow
                  </Highlighter>{" "}
                  without boundaries.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] md:text-[25vw] lg:text-[28vw] font-black leading-none uppercase tracking-tighter">
          ABOUT
        </span>
      </div>
    </MotionSection>
  );
};
