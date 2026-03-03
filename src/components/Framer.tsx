"use client";

import type { HTMLMotionProps, SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(function MotionDiv(
  { children, ...props },
  ref,
) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

const MotionButton = React.forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
  function MotionButton({ children, ...props }, ref) {
    return (
      <motion.button ref={ref} {...props}>
        {children}
      </motion.button>
    );
  },
);

const MotionSpan = React.forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>(function MotionSpan(
  { children, ...props },
  ref,
) {
  return (
    <motion.span ref={ref} {...props}>
      {children}
    </motion.span>
  );
});

const MotionPath = React.forwardRef<SVGPathElement, SVGMotionProps<SVGPathElement>>(
  function MotionPath({ children, ...props }, ref) {
    return (
      <motion.path ref={ref} {...props}>
        {children}
      </motion.path>
    );
  },
);

export { MotionDiv, MotionButton, MotionSpan, MotionPath };
