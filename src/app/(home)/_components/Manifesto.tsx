import { MotionDiv, MotionSection } from "@/components/Framer";
import { manifesto } from "@/data/home";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export const Manifesto = () => {
  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="w-full py-20 sm:py-32 md:py-40 lg:py-60 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full select-none pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-foreground leading-none absolute -top-20 -right-20">
          MANIFESTO
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col">
          <MotionDiv
            variants={fadeInUp}
            className="relative flex flex-col items-center text-center"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl uppercase flex flex-col items-center mb-4 md:mb-6">
              <span>
                MANIFESTO<span className="text-primary">.</span>
              </span>
            </h2>
            <div className="max-w-xl mb-12 md:mb-20">
              <p className="text-xl sm:text-2xl text-foreground/50 font-medium leading-tight">
                {manifesto.description}
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-5 md:px-10 py-2 flex flex-col gap-8 w-full">
              <MotionDiv variants={fadeInUp} className="w-full text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-4 flex flex-col justify-center min-h-32 md:min-h-32">
                    <p className="text-2xl md:text-4xl font-black leading-tight">
                      {manifesto.sections[0].title.toUpperCase()}
                      <br />
                      OF CHANGE.
                    </p>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex flex-col gap-4 text-left">
                    <div className="p-3 md:p-4">
                      <p className="text-lg md:text-2xl font-black leading-tight">
                        NOT WAITING FOR THE FUTURE.
                      </p>
                    </div>
                    <div className="text-lg md:text-3xl font-black leading-tight space-y-1">
                      <p className="text-lg md:text-3xl">BUILDING IT WITH</p>
                      <p className="text-lg text-underline text-tpm">
                        {manifesto.sections[0].highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="w-full text-left">
                <h2 className="text-3xl md:text-5xl text-tpm leading-tight">
                  {manifesto.sections[1].title.toUpperCase()}
                </h2>
                <p className="text-lg md:text-3xl font-semibold leading-relaxed">
                  {manifesto.sections[1].text}
                </p>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="p-4 w-full text-left">
                <p className="text-lg md:text-3xl font-semibold leading-tight">
                  {manifesto.statements.reclaim}
                </p>
              </MotionDiv>

              <div className="grid grid-cols-1 md:grid-cols-2 text-left">
                {manifesto.statements.bold.map((statement) => (
                  <MotionDiv variants={fadeInUp} key={statement.top} className="flex flex-col">
                    <p className="text-2xl md:text-4xl font-semibold">{statement.top}</p>
                    <p className="text-2xl md:text-4xl font-semibold">{statement.bottom}</p>
                  </MotionDiv>
                ))}
              </div>
              <MotionDiv variants={fadeInUp} className="grid grid-cols-1 gap-2 text-left">
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl md:text-5xl leading-none">
                    {manifesto.statements.movement.title}
                  </h3>
                </div>
                <div className="p-4 flex items-center">
                  <p className="text-lg md:text-3xl leading-snug font-black">
                    {manifesto.statements.movement.description}
                  </p>
                </div>
              </MotionDiv>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {manifesto.statements.footer.map((item, idx) => (
                  <MotionDiv
                    variants={fadeInUp}
                    key={item.highlight}
                    className={idx === 1 ? "p-4" : "p-4"}
                  >
                    <p className="text-xl md:text-3xl font-black">
                      {item.text}{" "}
                      <span
                        className={
                          idx === 1 ? "px-2" : idx === 2 ? "text-energy px-2" : "text-steady px-2"
                        }
                      >
                        {item.highlight}
                      </span>
                    </p>
                  </MotionDiv>
                ))}
              </div>
              <MotionDiv variants={fadeInUp} className="w-full">
                <p className="text-3xl md:text-6xl font-black text-center uppercase tracking-tighter">
                  {manifesto.statements.startsNow}
                </p>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[28vw] md:text-[30vw] font-black leading-none uppercase tracking-tighter">
          MANIFESTO
        </span>
      </div>
    </MotionSection>
  );
};
