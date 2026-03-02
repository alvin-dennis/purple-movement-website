"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQs: FAQItem[] = [
  {
    question: "What is The Purple Movement?",
    answer:
      `The Purple Movement is where curious, purpose-driven people come together to explore big 
ideas, solve real problems, and spark meaningful change. 
A barrier-free community where your skills actually matter.`,
  },
  {
    question: "Who can join?",
    answer:
      `If you're driven by purpose, you belong here. No limitations. A place to connect and grow alongside 
others on the same path.`,
  },
  {
    question: "What does 'Beyond Syllabus' mean?",
    answer:
      `Beyond Syllabus is where learning stops being boring. It is about picking up real skills, trying 
new things, and exploring what actually excites you, not just what is written in textbooks.`,
  },
  {
    question: "What does 'Beyond Gatekeepers' mean?",
    answer:
      `Beyond Gatekeepers gives everyone a real chance to grow. By lifting each other up, we create a space 
where anyone with purpose can connect, contribute, and move forward without limitations.`,
  },
  {
    question: "What does 'Beyond Borders' mean?",
    answer:
      `Beyond Borders is all about breaking limits. It helps people connect, share ideas, and 
access opportunities without being held back by geography, systems, or labels.`,
  },
  {
    question: "How can I contribute?",
    answer: (
      <>
        Click{" "}
        <Link href="/join" className="text-primary hover:text-primary transition-colors underline decoration-primary underline-offset-4">
          Join Us
        </Link>
        {" "}that&apos;s all it takes to get started.
      </>
    ),
  },
];

export const FAQ = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20">
        {/* Left: Header */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Assistance</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4 md:mb-8">
            GOT <br /><span className="text-tpm">QUESTIONS?</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/50">
            Got questions? We&apos;ve got answers. Here are some of the most common things people ask
            about the Purple Movement.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="lg:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
            {FAQs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="group border border-foreground/5 hover:border-foreground/20 rounded-[2rem] md:rounded-[3rem] px-6 sm:px-8 md:px-10 transition-all duration-500 bg-foreground/5 data-[state=open]:bg-primary/5 data-[state=open]:border-primary/50 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 sm:py-8 md:py-10">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground text-left group-data-[state=open]:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-10">
                  <div className="text-foreground/50 text-base md:text-lg leading-relaxed border-l-2 border-primary/30 pl-6 md:pl-10">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};