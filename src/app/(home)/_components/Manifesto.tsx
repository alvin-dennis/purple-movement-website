"use client";

import Image from "next/image";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { manifesto } from "@/data/home";
import {
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  slideUp,
  staggerContainer,
  staggerSlideUp,
  viewportConfig,
  viewportConfigFast,
  viewportConfigMedium,
} from "@/lib/animations";

const Word = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportConfig}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </MotionDiv>
);

const SectionWord = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <MotionDiv
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportConfigMedium}
    transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </MotionDiv>
);

export const Manifesto = () => {
  return (
    <MotionSection
      variants={staggerSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <MotionDiv variants={fadeInDown} className="text-center mb-6 md:mb-8">
          <h2 className="uppercase tracking-wider text-3xl md:text-4xl lg:text-5xl font-black">
            MANIFESTO<span className="text-primary">.</span>
          </h2>
        </MotionDiv>

        <MotionDiv variants={fadeIn} className="max-w-3xl mb-12 md:mb-16">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed text-center">
            {manifesto.description}
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-2">
            <SectionWord delay={0.1}>
              <span className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight block">
                We are the <span className="text-primary">Manifestors</span> of Change.
              </span>
            </SectionWord>

            <SectionWord delay={0.15}>
              <span className="text-xl md:text-2xl font-bold block">
                We are not{" "}
                <span className="text-energy font-black uppercase tracking-wider">WAITING</span> for
                the future.
              </span>
            </SectionWord>

            <SectionWord delay={0.2}>
              <span className="text-xl md:text-2xl font-medium block text-muted-foreground">
                We are building it—with{" "}
                <span className="text-foreground font-semibold">
                  {manifesto.sections[0].highlight}
                </span>
              </span>
            </SectionWord>

            <div className="h-6 md:h-8" />

            <SectionWord delay={0.3}>
              <span className="text-2xl md:text-3xl font-semibold leading-tight block">
                We are the voice of a generation that refuses to settle.
              </span>
            </SectionWord>

            <SectionWord delay={0.35}>
              <span className="text-xl md:text-2xl font-light block">
                We are not{" "}
                <span className="text-muted-foreground italic">consumers of culture;</span>
              </span>
            </SectionWord>

            <SectionWord delay={0.4}>
              <span className="text-2xl md:text-3xl font-bold text-primary block">
                Producers of Purpose.
              </span>
            </SectionWord>

            <SectionWord delay={0.45}>
              <span className="text-lg md:text-xl font-medium block text-muted-foreground">
                We break barriers, not just for ourselves, but for every young mind daring to dream.
              </span>
            </SectionWord>

            <div className="h-4 md:h-6" />

            <SectionWord delay={0.5}>
              <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-energy block">
                Ecosystems that Empower
              </span>
            </SectionWord>

            <SectionWord delay={0.55}>
              <span className="text-lg md:text-xl font-normal block">
                <span className="text-muted-foreground">not</span> LIMIT.
              </span>
            </SectionWord>

            <SectionWord delay={0.6}>
              <span className="text-xl md:text-2xl font-bold text-energy block">
                Access, not Gatekeeping.
              </span>
            </SectionWord>

            <div className="h-4 md:h-6" />

            <SectionWord delay={0.7}>
              <span className="text-2xl md:text-3xl font-light block">
                Bold visions, not borrowed templates.
              </span>
            </SectionWord>

            <SectionWord delay={0.75}>
              <span className="text-2xl md:text-3xl font-black text-primary block">
                This is The Purple Movement.
              </span>
            </SectionWord>

            <SectionWord delay={0.8}>
              <span className="text-lg md:text-xl font-medium block text-muted-foreground">
                {manifesto.statements.movement.description}
              </span>
            </SectionWord>

            <div className="h-6 md:h-8" />

            <SectionWord delay={0.9}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-base md:text-lg font-black uppercase tracking-wider">
                  {manifesto.statements.notSidelines.text}
                </span>
                <span className="text-base md:text-lg font-black uppercase tracking-wider text-primary">
                  {manifesto.statements.notSidelines.highlight}
                </span>
              </div>
            </SectionWord>

            <SectionWord delay={1.0}>
              <span className="text-2xl md:text-3xl font-semibold block">
                {manifesto.statements.reclaim}
              </span>
            </SectionWord>
          </div>

          <div className="lg:col-span-5 relative">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-md mx-auto lg:sticky lg:top-24"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-energy/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl border-2 border-primary/20 shadow-2xl overflow-hidden">
                <Image
                  src="/assets/events/manifesto.png"
                  alt="Unchained Movement Symbol"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </MotionDiv>
          </div>
        </div>

        <MotionDiv
          variants={slideUp}
          className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pt-8 border-t border-border"
        >
          <Word delay={0.1} className="text-center min-w-[140px]">
            <div className="h-1 w-12 bg-energy mx-auto mb-4" />
            <h3 className="text-energy mb-2 text-sm uppercase font-black tracking-wider">Energy</h3>
            <p className="font-black text-2xl md:text-3xl">We are the energy.</p>
          </Word>

          <Word delay={0.2} className="text-center min-w-[140px]">
            <div className="h-1 w-12 bg-primary mx-auto mb-4" />
            <h3 className="text-primary mb-2 text-sm uppercase font-black tracking-wider">
              Strategy
            </h3>
            <p className="font-black text-2xl md:text-3xl">We are the strategy.</p>
          </Word>

          <Word delay={0.3} className="text-center min-w-[140px]">
            <div className="h-1 w-12 bg-steady mx-auto mb-4" />
            <h3 className="text-steady mb-2 text-sm uppercase font-black tracking-wider">Spark</h3>
            <p className="font-black text-2xl md:text-3xl">We are the spark.</p>
          </Word>
        </MotionDiv>

        <MotionDiv
          variants={fadeIn}
          viewport={viewportConfig}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block">
            <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              AND IT <span className="text-primary">STARTS</span> NOW
            </span>
          </div>
        </MotionDiv>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <span className="text-[20vw] md:text-[18vw] lg:text-[15vw] font-black leading-none uppercase tracking-tighter text-nowrap">
          MANIFESTO
        </span>
      </div>
    </MotionSection>
  );
};
