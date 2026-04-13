"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/home";
import {
  fadeInDown,
  fadeInLeft,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
} from "@/lib/animations";

export const Contact = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => setSubmitStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.trim(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit question");

      setSubmitStatus("success");
      setQuestion("");
    } catch (error) {
      console.error("Error submitting question:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-12 md:py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto backdrop-blur-xl border border-primary/20 relative rounded-3xl md:rounded-[48px] overflow-hidden">
        <Card className="border-0 shadow-none relative z-10 bg-transparent">
          <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              <MotionDiv
                variants={fadeInLeft}
                className="lg:w-1/3 relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-52 xl:w-64 h-52 xl:h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full" />
                  <Image
                    src="/assets/events/qtnmark.webp"
                    alt="Question Mark"
                    width={220}
                    height={220}
                    className="relative z-10 brightness-200 opacity-80"
                  />
                </div>
              </MotionDiv>

              <div className="lg:w-2/3 w-full">
                <MotionDiv
                  variants={slideUp}
                  className="mb-8 md:mb-10 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <h2 className="mb-4 md:mb-5 leading-tight text-3xl md:text-4xl lg:text-5xl">
                    {contact.title} <span className="text-tpm">{contact.highlight}</span>?
                  </h2>

                  <p className="text-base md:text-lg text-muted-foreground max-w-lg">
                    {contact.description}
                  </p>
                </MotionDiv>

                <MotionDiv variants={slideUp}>
                  <form onSubmit={handleSubmit} className="w-full space-y-5 md:space-y-6">
                    <div className="relative">
                      <Textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder={contact.placeholder}
                        disabled={isSubmitting}
                        className="border-foreground/10 text-base md:text-lg p-5 md:p-6 rounded-2xl md:rounded-3xl min-h-[140px] md:min-h-[180px] resize-none placeholder:text-foreground/20 focus-visible:ring-primary/30 focus-visible:border-primary/30 bg-foreground/[0.02]"
                      />

                      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-3 mt-3 sm:mt-0 sm:absolute sm:bottom-5 sm:right-5">
                        {submitStatus === "success" && (
                          <span className="text-green-500 font-bold tracking-widest text-xs uppercase">
                            SENT!
                          </span>
                        )}

                        {submitStatus === "error" && (
                          <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
                            Error, try again
                          </span>
                        )}

                        <InteractiveHoverButton
                          type="submit"
                          disabled={!question.trim() || isSubmitting}
                          className="cursor-pointer"
                        >
                          {isSubmitting ? contact.submittingText : contact.buttonText}
                        </InteractiveHoverButton>
                      </div>
                    </div>
                  </form>
                </MotionDiv>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  );
};
