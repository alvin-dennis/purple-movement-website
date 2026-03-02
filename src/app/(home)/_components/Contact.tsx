"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
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
    <section className="w-full py-20 sm:py-28 md:py-40 bg-transparent px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto glass-panel p-6 sm:p-10 md:p-16 lg:p-24 relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          {/* Visual Side – desktop only */}
          <div className="lg:w-1/3 relative hidden lg:flex items-center justify-center">
            <div className="relative w-64 xl:w-80 h-64 xl:h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-600/10 rounded-full animate-pulse" />
              <Image
                src="/images/qtnmark.png"
                alt="Question Mark"
                width={250}
                height={250}
                className="relative z-10 brightness-200"
                unoptimized
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl movement-title text-white mb-4 md:mb-6">
                GOT <br /><span className="text-purple-600 italic">INPUT</span>{""}?
              </h2>
              <p className="movement-subtitle text-base md:text-lg lg:text-xl text-white/50">
                A movement is built on dialogue. Drop your spark below and let&apos;s evolve together.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="w-full space-y-6 md:space-y-8">
              <div className="relative group">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question or spark..."
                  className="w-full bg-zinc-900/50 border border-white/5 text-white text-base md:text-xl p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] focus:outline-none focus:border-purple-500/50 transition-all min-h-[160px] md:min-h-[200px] resize-none placeholder:text-white/10"
                  disabled={isSubmitting}
                />
                <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-3 mt-4 sm:mt-0 sm:absolute sm:bottom-6 sm:right-6">
                  {submitStatus === "success" && (
                    <span className="text-green-500 font-bold tracking-widest text-xs uppercase">SENT!</span>
                  )}
                  {submitStatus === "error" && (
                    <span className="text-red-500 font-bold tracking-widest text-xs uppercase">Error, try again</span>
                  )}
                  <button
                    type="submit"
                    disabled={!question.trim() || isSubmitting}
                    className={`px-8 md:px-12 py-3 md:py-5 rounded-full font-bold tracking-widest text-xs uppercase transition-all whitespace-nowrap ${question.trim() && !isSubmitting
                      ? "bg-purple-600 text-white hover:bg-purple-500 hover:scale-105 active:scale-95"
                      : "bg-white/5 text-white/20 cursor-not-allowed"
                      }`}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT SPARK"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};