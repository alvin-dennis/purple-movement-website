"use client";

import CountUp from "react-countup";
import { MotionDiv, MotionSection } from "@/components/Framer";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Stats() {
  return (
    <main className="w-full">
      <MotionSection
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="w-full py-20 sm:py-28 md:py-32 px-4 mb-20 sm:mb-28 md:mb-40"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <MotionDiv variants={fadeInUp}>
            <h2>
              THE IMPACT OF <span className="text-tpm">TPM</span>
            </h2>
          </MotionDiv>
        </div>

        <MotionDiv variants={fadeInUp} className="w-full max-w-7xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <StatCard value={378} label="Events" />
            <StatCard value={2270} label="Number of Internships" />
            <StatCard value={1320} label="Jobs" />
          </div>
        </MotionDiv>
      </MotionSection>
    </main>
  );
}

function StatCard({
  value,
  label,
  isString = false,
}: {
  value: number | string;
  label: string;
  isString?: boolean;
}) {
  return (
    <Card className="flex flex-col justify-center items-center p-6 w-full h-full min-h-[160px]">
      <p className="font-bold text-tpm text-3xl sm:text-4xl lg:text-5xl mb-2">
        {isString ? value : <CountUp end={value as number} duration={3} separator="," suffix="+" />}
      </p>
      <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </Card>
  );
}
