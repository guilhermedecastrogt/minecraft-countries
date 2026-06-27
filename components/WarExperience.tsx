"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, DoorOpen, Skull, Handshake } from "lucide-react";
import { warMoments } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Embers } from "./ui/Embers";

const icons = [Volume2, DoorOpen, Skull, Handshake];

export function WarExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="guerra"
      ref={ref}
      className="relative overflow-hidden border-y border-white/5 py-28 sm:py-36"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <motion.div
        style={{ y }}
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-war-700/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-ember-600/15 blur-[140px]" />
      </motion.div>
      <Embers count={18} className="-z-10 opacity-70" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="label-eyebrow">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-war-500" />
              A experiência de guerra
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] text-white sm:text-6xl">
              Você não vai{" "}
              <span className="text-gradient-fire">só jogar.</span>
              <br />
              Você vai <span className="text-gradient-ash">sobreviver.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400">
              Não é sobre construir bonito. É sobre o coração acelerado quando
              você ouve passos no microfone e não sabe quantos são.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {warMoments.map((m, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={m.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="glass-card h-full p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-war-600/30 bg-war-700/15 text-war-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl text-white/10">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
                    {m.text}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-14 text-center font-heading text-2xl font-medium uppercase italic tracking-wide text-zinc-300 sm:text-3xl">
            No fim, vence quem sobreviver ao caos…{" "}
            <span className="text-gradient-fire not-italic">
              ou quem esmagar todo mundo primeiro.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
