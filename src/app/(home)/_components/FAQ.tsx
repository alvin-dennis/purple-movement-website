import { MotionDiv, MotionSection } from "@/components/Framer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const FAQ = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12 md:gap-20">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-foreground mb-4 md:mb-8">
              <span className="text-tpm">FAQ</span>
            </h2>
          </MotionDiv>
          <MotionDiv variants={fadeInUp}>
            <p className="text-base md:text-lg lg:text-xl text-foreground/50 mb-10">
              Got questions? We&apos;ve got answers. Here are some of the most common things people
              ask about the Purple Movement.
            </p>
          </MotionDiv>
        </div>
      </div>
      <MotionDiv variants={fadeInUp} className="w-full max-w-7xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
          {FAQs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="group border border-foreground/5 hover:border-foreground/20 rounded-[2rem] md:rounded-[3rem] px-6 sm:px-8 md:px-10 transition-all duration-500 bg-foreground/5 data-[state=open]:bg-primary/5 data-[state=open]:border-primary/50 overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6 sm:py-8 md:py-10">
                <h4 className="text-foreground text-left group-data-[state=open]:text-primary transition-colors">
                  {faq.question}
                </h4>
              </AccordionTrigger>
              <AccordionContent className="pb-10">
                <div className="text-foreground/50 text-base md:text-lg leading-relaxed border-l-2 border-primary/30 pl-6 md:pl-10">
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
