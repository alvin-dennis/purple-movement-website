"use client";

import { MotionDiv, MotionSection } from "@/components/Framer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const FAQ = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10 md:gap-14">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <MotionDiv variants={fadeInDown}>
            <h2 className="text-foreground mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              <span className="text-tpm">FAQ</span>
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeIn}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Got questions? We&apos;ve got answers. Here are some of the most common things people
              ask about the Purple Movement.
            </p>
          </MotionDiv>
        </div>
      </div>

      <MotionDiv variants={slideUp} className="w-full max-w-4xl mx-auto mt-8">
        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
          {FAQs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="group border border-foreground/10 hover:border-primary/30 rounded-2xl md:rounded-3xl px-5 sm:px-6 md:px-8 transition-all duration-300 bg-foreground/[0.02] hover:bg-foreground/[0.04] data-[state=open]:bg-primary/5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="hover:no-underline py-4 sm:py-5 md:py-6">
                <h4 className="text-foreground text-left text-base sm:text-lg font-medium group-data-[state=open]:text-primary transition-colors">
                  {faq.question}
                </h4>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <div className="text-muted-foreground text-sm sm:text-base leading-relaxed border-l-2 border-primary/20 pl-4 md:pl-6">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionDiv>
    </MotionSection>
  );
};
