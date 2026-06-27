"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  count?: number;
  className?: string;
};

/** Floating ember particles rising like sparks from a fire. */
export function Embers({ count = 24, className = "" }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 1 + Math.random() * 3;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          duration: 6 + Math.random() * 10,
          delay: Math.random() * 10,
          drift: (Math.random() - 0.5) * 80,
          hue: Math.random() > 0.5 ? "#ff7a18" : "#e0241c",
        };
      }),
    [count]
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 3}px ${p.hue}`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -640],
            x: [0, p.drift],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
