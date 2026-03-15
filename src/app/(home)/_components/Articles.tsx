import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSection, MotionSpan } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { articles } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Articles = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 relative"
      id="resources"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <MotionSpan
              variants={fadeInUp}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block"
            >
              Knowledge Loop
            </MotionSpan>

            <MotionDiv variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 leading-tight">
                Shared <span className="text-tpm">Wisdom</span>.
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInUp}>
              <p className="text-foreground/40 text-base md:text-lg lg:text-xl leading-relaxed">
                Resources are not static archives. They are living seeds for our community to plant
                and grow together.
              </p>
            </MotionDiv>
          </div>
        </div>
        <div className="relative">
          <MotionDiv
            variants={fadeInUp}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 overflow-hidden`}
          >
            <AnimatePresence>
              {articles.map((res) => (
                <MotionDiv key={res.title} variants={fadeInUp} layout className="group">
                  <Card className="h-full backdrop-blur-xl border border-primary/50 transition-all duration-500 hover:border-primary">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-8 gap-2">
                        <div className="text-[10px] font-bold tracking-widest text-foreground uppercase border border-primary/20 px-3 py-1 rounded-full">
                          {res.category}
                        </div>

                        <span className="text-[10px] text-foreground/20 font-bold tracking-widest">
                          {res.date}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors">
                        {res.title}
                      </h3>
                    </CardContent>

                    <CardFooter className="px-8 md:px-10 pb-8 md:pb-10 pt-0">
                      <Link href={res.link}>
                        <Button variant={"default"} className="inline-flex items-center uppercase">
                          READ ARTICLE
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
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
