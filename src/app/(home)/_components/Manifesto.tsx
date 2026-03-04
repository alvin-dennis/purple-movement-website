"use client";

import { MotionDiv } from "@/components/Framer";
import { manifesto } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Manifesto = () => {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative">
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-foreground leading-none absolute -top-20 -right-20">
          MANIFESTO
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative flex flex-col items-center md:items-start"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase flex flex-col items-center md:items-start text-center md:text-left">
              <span>
                MANIFESTO<span className="text-primary">.</span>
              </span>
            </h2>

            <div className="max-w-xl">
              <p className="text-xl sm:text-2xl text-foreground/50 font-medium leading-tight">
                {manifesto.description}
              </p>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
          >
            {manifesto.sections.map((section, idx) => (
              <MotionDiv
                key={section.id}
                variants={fadeInUp}
                className={`group relative p-8 md:p-12 border border-primary transition-colors duration-500 bg-card/30 backdrop-blur-sm ${
                  idx % 2 !== 0 ? "md:mt-24" : ""
                }`}
              >
                <div className="absolute -top-12 -left-4 text-8xl font-black text-primary/50 select-none group-hover:text-primary transition-colors duration-500">
                  {section.id}
                </div>

                <h3 className="text-4xl sm:text-5xl font-black mb-8 leading-none">
                  {section.title.split(" ")[0]}
                  <br />
                  <span className="text-tpm">{section.title.split(" ")[1]}</span>
                </h3>

                <div className="text-lg sm:text-xl leading-relaxed text-foreground/80">
                  {section.text.split(section.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="relative inline-block mx-1">
                          <span className="relative z-10 font-bold text-foreground underline decoration-primary decoration-4 underline-offset-4">
                            {section.highlight}
                          </span>
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
          <div className="py-24 relative overflow-hidden">
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col items-center justify-center text-center gap-12"
            >
              {manifesto.statements.bold.map((stmt, i) => (
                <MotionDiv key={i} variants={fadeInUp}>
                  <h4 className="text-4xl sm:text-6xl md:text-7xl font-black">
                    {stmt.top}
                    <br />
                    <span className={i % 2 === 0 ? "text-primary" : "text-foreground"}>
                      {stmt.bottom}
                    </span>
                  </h4>
                </MotionDiv>
              ))}

              <MotionDiv variants={fadeInUp} className="max-w-2xl mt-8">
                <p className="text-xl sm:text-2xl text-foreground font-bold italic leading-relaxed">
                  &quot;{manifesto.statements.reclaim}&quot;
                </p>
              </MotionDiv>
            </MotionDiv>
          </div>
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col items-center text-center gap-12"
          >
            <MotionDiv variants={fadeInUp} className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-black tracking-widest uppercase">
                {manifesto.statements.movement.badge}
              </span>

              <h2 className="text-5xl sm:text-7xl font-black uppercase text-tpm">
                {manifesto.statements.movement.title}
              </h2>

              <p className="text-xl sm:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                {manifesto.statements.movement.description}
              </p>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-12">
              {manifesto.statements.footer.map((item, i) => (
                <MotionDiv key={i} variants={fadeInUp} className="flex flex-col gap-2 p-6">
                  <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                    {item.text}
                  </span>
                  <span className={`text-4xl font-black uppercase ${item.color || "text-primary"}`}>
                    {item.highlight}
                  </span>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              variants={fadeInUp}
              className="mt-12 text-2xl sm:text-4xl font-black text-primary tracking-[0.3em] uppercase animate-pulse"
            >
              {manifesto.statements.startsNow}
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
