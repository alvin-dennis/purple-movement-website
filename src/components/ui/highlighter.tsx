"use client";

import { useInView } from "framer-motion";
import type React from "react";
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#A108F9",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-5%",
  });

  const shouldShow = !isView || isInView;

  useEffect(() => {
    const element = elementRef.current;
    if (!shouldShow || !element) return;

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    const annotation = annotate(element, annotationConfig);
    annotationRef.current = annotation;

    // Small delay to ensure layout is settled
    const timer = setTimeout(() => {
      annotation.show();
    }, 100);

    const resizeObserver = new ResizeObserver(() => {
      if (annotationRef.current) {
        const annotation = annotationRef.current as RoughAnnotation & { update?: () => void };
        if (typeof annotation.update === "function") {
          annotation.update();
        } else {
          annotation.hide();
          annotation.show();
        }
      }
    });

    resizeObserver.observe(element);

    const handleResize = () => {
      if (annotationRef.current) {
        annotationRef.current.hide();
        annotationRef.current.show();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldShow, action, color, strokeWidth, animationDuration, iterations, padding, multiline]);

  return (
    <span ref={elementRef} className="relative inline bg-transparent">
      {children}
    </span>
  );
}
