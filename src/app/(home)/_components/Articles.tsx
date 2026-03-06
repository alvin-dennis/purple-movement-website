import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSpan } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { articles } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Articles = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 relative" id="resources">
      <MotionDiv
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <MotionSpan
              variants={fadeInUp}
              viewport={viewportConfig}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block text-center lg:text-left"
            >
              Knowledge Loop
            </MotionSpan>

            <MotionDiv variants={fadeInUp} viewport={viewportConfig}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8 leading-tight text-center lg:text-left">
                Shared <span className="text-tpm">Wisdom</span>.
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} viewport={viewportConfig}>
              <p className="text-foreground/40 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
                Resources are not static archives. They are living seeds for our community to plant
                and grow together.
              </p>
            </MotionDiv>
          </div>
        </div>
        <div className="relative">
          <MotionDiv
            variants={fadeInUp}
            viewport={viewportConfig}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 overflow-hidden`}
          >
            <AnimatePresence>
              {articles.map((res) => (
                <MotionDiv
                  key={res.title}
                  variants={fadeInUp}
                  viewport={viewportConfig}
                  layout
                  className="group"
                >
                  <Card className="h-full backdrop-blur-xl border border-primary/50 transition-all duration-500 hover:border-primary">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex justify-between items-start mb-8 md:mb-12 gap-4">
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

                      <p className="text-foreground/50 text-base md:text-lg leading-relaxed">
                        {res.description}
                      </p>
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
      </MotionDiv>
    </section>
  );
};
