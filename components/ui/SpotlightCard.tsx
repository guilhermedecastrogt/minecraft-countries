"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** glow color rgba string */
  glow?: string;
};

export function SpotlightCard({
  children,
  className = "",
  glow = "rgba(255,122,24,0.18)",
}: Props) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const background = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(-200);
        mouseY.set(-200);
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}
