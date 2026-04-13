"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { articles } from "@/data/home";
import {
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const Articles = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16 px-4 relative"
      id="resources"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-10 mb-10">
          <div className="flex flex-col items-center text-center">
            <MotionDiv variants={fadeInDown}>
              <h2 className="mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl">
                Shared <span className="text-tpm">Wisdom</span>.
              </h2>
            </MotionDiv>

            <MotionDiv variants={slideUp}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                Resources are not static archives. They are living seeds for our community to plant
                and grow together.
              </p>
            </MotionDiv>
          </div>
        </div>

        <div className="relative">
          <MotionDiv
            variants={staggerSlideUp}
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 transition-all duration-700`}
          >
            <AnimatePresence>
              {articles.map((res, index) => (
                <MotionDiv key={res.title} variants={slideUp} layout className="group">
                  <Card className="h-full backdrop-blur-xl border border-foreground/10 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 md:p-7">
                      <div className="flex justify-between items-start mb-6 gap-2">
                        <div className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/20 px-2.5 py-1 rounded-full">
                          {res.category}
                        </div>

                        <span className="text-[10px] text-foreground/30 font-bold tracking-widest">
                          {res.date}
                        </span>
                      </div>

                      <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                        {res.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-foreground/50">{res.source}</span>
                        <span className="w-1 h-1 rounded-full bg-foreground/30" />
                        <span className="text-foreground/50">{res.category}</span>
                      </div>
                    </CardContent>

                    <CardFooter className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                      <Link href={res.link} className="w-full">
                        <InteractiveHoverButton className="w-full justify-center inline-flex items-center uppercase text-sm">
                          Read Article
                        </InteractiveHoverButton>
                      </Link>
                    </CardFooter>
                  </Card>
                </MotionDiv>
              ))}
            </AnimatePresence>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};
