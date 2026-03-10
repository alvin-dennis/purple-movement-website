"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

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
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 sm:py-28 md:py-40 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-xl border border-primary/50 relative rounded-xl">
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-6 sm:p-10 md:p-16 lg:p-24">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
              <MotionDiv
                variants={fadeInUp}
                className="lg:w-1/3 relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-64 xl:w-80 h-64 xl:h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full" />
                  <Image
                    src="/images/qtnmark.webp"
                    alt="Question Mark"
                    width={250}
                    height={250}
                    className="relative z-10 brightness-200"
                  />
                </div>
              </MotionDiv>
              <div className="lg:w-2/3 w-full">
                <MotionDiv
                  variants={fadeInUp}
                  className="mb-8 md:mb-12 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight">
                    {contact.title} <span className="text-tpm">{contact.highlight}</span>?
                  </h2>

                  <p className="text-base md:text-lg lg:text-xl text-foreground/50">
                    {contact.description}
                  </p>
                </MotionDiv>

                <MotionDiv variants={fadeInUp}>
                  <form onSubmit={handleSubmit} className="w-full space-y-6 md:space-y-8">
                    <div className="relative">
                      <Textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder={contact.placeholder}
                        disabled={isSubmitting}
                        className="bg-zinc-900/50 border-foreground/5 text-base md:text-xl p-6 md:p-10 rounded-3xl min-h-[160px] md:min-h-[200px] resize-none placeholder:text-foreground/10 focus-visible:ring-primary/50"
                      />

                      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-3 mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:right-6">
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

                        <Button
                          type="submit"
                          disabled={!question.trim() || isSubmitting}
                          className="px-8 md:px-12 py-3 md:py-5 rounded-full font-bold tracking-widest text-xs uppercase"
                        >
                          {isSubmitting ? contact.submittingText : contact.buttonText}
                        </Button>
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
