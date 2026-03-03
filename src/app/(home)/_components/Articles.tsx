import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/home";
import { MotionDiv, MotionSpan } from "@/components/Framer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export const Articles = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6" id="resources">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-24">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
            <MotionSpan
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 md:mb-6 block text-center lg:text-left"
            >
              Knowledge Loop
            </MotionSpan>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight text-center lg:text-left">
              Shared <span className="text-tpm">Wisdom</span>.
            </h2>

            <p className="text-foreground/40 text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left">
              Resources are not static archives. They are living seeds for our community to plant
              and grow together. Explore the collective intelligence of the movement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {articles.map((res, idx) => (
              <MotionDiv
                key={res.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group"
              >
                <Card className="h-full backdrop-blur-xl border border-primary/50 transition-all duration-500">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex justify-between items-start mb-8 md:mb-12 gap-4">
                      <div className="text-[10px] font-bold tracking-widest text-foreground uppercase border border-primary/20 px-3 py-1 rounded-full flex-shrink-0">
                        {res.category}
                      </div>

                      <span className="text-[10px] text-foreground/20 font-bold tracking-widest flex-shrink-0">
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
                    <Link
                      href={res.link}
                      className="inline-flex items-center gap-3 md:gap-4 font-bold tracking-widest text-[10px] uppercase hover:text-primary transition-colors"
                    >
                      READ ARTICLE
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </CardFooter>
                </Card>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
