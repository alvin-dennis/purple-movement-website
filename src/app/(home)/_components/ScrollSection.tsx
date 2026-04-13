"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { Events } from "./Events";
import { Manifesto } from "./Manifesto";
import { Timeline } from "./Timeline";

const INJECTED_STYLES = `
  .cm-gsap-reveal { visibility: hidden; }
  .cm-text-3d-matte {
      color: var(--color-foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }
  .cm-premium-card {
      background: linear-gradient(145deg, #2D1B69 0%, #0A0A1A 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(190, 41, 236, 0.15),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(190, 41, 236, 0.08);
      position: relative;
  }
  .cm-card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(190,41,236,0.08) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }
  .cm-card-scroll::-webkit-scrollbar { display: none; }
  .cm-card-scroll { -ms-overflow-style: none; scrollbar-width: none; }
`;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 3) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".cm-main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(".cm-timeline-content", { autoAlpha: 0 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(".cm-main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".cm-main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .to(".cm-timeline-content", { autoAlpha: 1, ease: "power2.out", duration: 1.5 }, "-=0.5")
        .to({}, { duration: 3 })
        .to(".cm-timeline-content", { autoAlpha: 0, y: -30, ease: "power2.in", duration: 1.0 })
        .to(
          ".cm-main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "80vh" : "75vh",
            borderRadius: isMobile ? "32px" : "40px",
            y: -window.innerHeight - 400,
            ease: "power3.in",
            duration: 2,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <>
        <Manifesto />
        <div className="relative w-full py-12 md:py-16 overflow-hidden flex items-center justify-center bg-background">
          <div className="cm-premium-card relative overflow-hidden flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] min-h-[50vh] rounded-[32px] md:rounded-[40px]">
            <div className="cm-timeline-content cm-card-scroll relative w-full h-full overflow-y-auto overflow-x-hidden z-10">
              <div className="w-full max-w-5xl mx-auto px-6">
                <Timeline forceVisible />
              </div>
            </div>
          </div>
        </div>
        <Events />
      </>
    );
  }

  return (
    <>
      <Manifesto />
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background"
      >
        <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            ref={mainCardRef}
            className="cm-main-card cm-premium-card relative overflow-hidden cm-gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[40vh] rounded-[32px] md:rounded-[40px]"
          >
            <div className="cm-card-sheen" aria-hidden="true" />
            <div className="cm-timeline-content cm-card-scroll relative w-full h-full overflow-y-auto overflow-x-hidden z-10">
              <div className="w-full max-w-5xl mx-auto px-6">
                <Timeline forceVisible />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Events />
    </>
  );
}
