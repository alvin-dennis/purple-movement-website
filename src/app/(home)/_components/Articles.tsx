import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { articles } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Articles = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 px-4 relative"
      id="resources"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-16 mb-12">
          <div className="flex flex-col items-center text-center">
            <MotionDiv variants={fadeInUp}>
              <h2 className="mb-4">
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

                      <h3 className="mb-4 md:mb-6 group-hover:text-primary transition-colors">
                        {res.title}
                      </h3>
                    </CardContent>

                    <CardFooter className="px-8 md:px-10 pb-8 md:pb-10 pt-0">
                      <Link href={res.link}>
                        <InteractiveHoverButton className="inline-flex items-center uppercase">
                          READ ARTICLE
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
