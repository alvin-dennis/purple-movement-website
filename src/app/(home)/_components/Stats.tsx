import { MotionDiv } from "@/components/Framer";
import { Articles } from "./Articles";

const ArrowGreenLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-primary stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
);

const ArrowGreenRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-primary stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
);

const CircularBadge = () => (
  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-primary rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-white/10">
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text className="text-[12px] font-black tracking-[0.18em] uppercase" fill="white">
          <textPath href="#circlePath" startOffset="0%">
            JOIN THE MOVEMENT • TPM •
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 text-white stroke-current overflow-visible"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </div>
);

export const Stats = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden w-full">
      {/* Stats Section */}
      <main className="flex-1 relative z-10 pt-8 pb-32 md:pt-12 md:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-4 mb-16">
          {/* Text Stack */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">
            {/* 378 EVENTS */}
            <div className="w-full flex justify-start pl-[10%] md:pl-[25%] relative z-30">
              <h1
                className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-primary m-0 p-0 uppercase"
                style={{
                  textShadow:
                    "1px 1px 0 rgba(0,0,0,0.4), 2px 2px 0 rgba(0,0,0,0.3), 3px 3px 0 rgba(0,0,0,0.2), 4px 4px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.08), 7px 7px 0 rgba(0,0,0,0.06), 8px 8px 0 rgba(0,0,0,0.05), 9px 9px 0 rgba(0,0,0,0.04), 10px 10px 0 rgba(0,0,0,0.03), 11px 11px 0 rgba(0,0,0,0.02), 12px 12px 0 rgba(0,0,0,0.02), 13px 13px 0 rgba(0,0,0,0.01), 14px 14px 0 rgba(0,0,0,0.01)",
                }}
              >
                378
              </h1>
            </div>

            {/* 2270 INTERNSHIPS */}
            <div className="w-full flex justify-center relative z-20">
              <h1
                className="text-[clamp(5rem,15vw,220px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{
                  textShadow:
                    "1px 1px 0 rgba(0,0,0,0.4), 2px 2px 0 rgba(0,0,0,0.3), 3px 3px 0 rgba(0,0,0,0.2), 4px 4px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.1), 6px 6px 0 rgba(0,0,0,0.08), 7px 7px 0 rgba(0,0,0,0.06), 8px 8px 0 rgba(0,0,0,0.05), 9px 9px 0 rgba(0,0,0,0.04), 10px 10px 0 rgba(0,0,0,0.03), 11px 11px 0 rgba(0,0,0,0.02), 12px 12px 0 rgba(0,0,0,0.02), 13px 13px 0 rgba(0,0,0,0.01), 14px 14px 0 rgba(0,0,0,0.01)",
                }}
              >
                2270
              </h1>
            </div>

            {/* 1320 JOBS */}
            <div className="w-full flex justify-start pl-[15%] md:pl-[30%] relative z-10">
              <h1
                className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-white/30 m-0 p-0 uppercase"
                style={{
                  textShadow:
                    "1px 1px 0 rgba(0,0,0,0.2), 2px 2px 0 rgba(0,0,0,0.15), 3px 3px 0 rgba(0,0,0,0.1), 4px 4px 0 rgba(0,0,0,0.08), 5px 5px 0 rgba(0,0,0,0.05), 6px 6px 0 rgba(0,0,0,0.04), 7px 7px 0 rgba(0,0,0,0.03), 8px 8px 0 rgba(0,0,0,0.02), 9px 9px 0 rgba(0,0,0,0.02), 10px 10px 0 rgba(0,0,0,0.01), 11px 11px 0 rgba(0,0,0,0.01), 12px 12px 0 rgba(0,0,0,0.01), 13px 13px 0 rgba(0,0,0,0.01), 14px 14px 0 rgba(0,0,0,0.01)",
                }}
              >
                1320
              </h1>
            </div>
          </div>

          {/* Absolute Overlays (Cards, Arrows, Badge) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Floating Glass Card 1 (Bottom Left) */}
            <MotionDiv
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] left-[5%] md:left-[20%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/30 rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50">
                  <span className="text-2xl md:text-3xl font-black text-white">378</span>
                </div>
                <div className="text-center mt-2">
                  <p className="font-bold text-sm md:text-lg text-white">Events</p>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1">hosted successfully</p>
                </div>
              </div>
            </MotionDiv>

            {/* Floating Glass Card 2 (Top Right) */}
            <MotionDiv
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] right-[5%] md:right-[22%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/30 rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50">
                  <span className="text-xl md:text-2xl font-black text-white">2270</span>
                </div>
                <div className="text-center mt-2">
                  <p className="font-bold text-sm md:text-lg text-white">Internships</p>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1">opportunities created</p>
                </div>
              </div>
            </MotionDiv>

            {/* Decorative Arrow Left */}
            <div className="absolute bottom-[0%] left-[0%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowGreenLeft />
            </div>
            <div className="absolute top-[5%] right-[0%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowGreenRight />
            </div>
            <div className="absolute bottom-[-10%] right-[0%] md:right-[15%] z-40 pointer-events-auto">
              <CircularBadge />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
