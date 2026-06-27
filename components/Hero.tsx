"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Swords, ScrollText } from "lucide-react";
import { Embers } from "./ui/Embers";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pb-16 pt-28"
    >
      {/* Ambient background (behind the banner, never over its text) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-grid-fade opacity-[0.5]" />
        <div className="absolute inset-0 bg-radial-ember" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink-900" />
      </motion.div>

      <Embers count={28} className="-z-10" />

      {/* Glow behind the banner */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[460px] w-[820px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-war-700/20 blur-[130px]" />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-8"
      >
        {/* THE BANNER — it already carries all the text, shown clean */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* soft glow frame */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-b from-ember-600/15 via-transparent to-war-700/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-deep ring-1 ring-white/5 sm:rounded-3xl">
            <Image
              src="/MINECRAFTCOUNTRIES-BANNER.png"
              alt="Minecraft Countries — Servidor Vanilla de Guerra Total"
              width={1200}
              height={800}
              priority
              className="h-auto w-full select-none"
            />
            {/* subtle top sheen + bottom blend, kept off the artwork's text */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-white/[0.03]" />
          </div>
        </motion.div>

        {/* CTAs below the banner — nothing sits on top of the artwork */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#entrar" className="btn-war w-full sm:w-auto">
            <Swords className="h-4 w-4" />
            Entrar na guerra
          </a>
          <a href="#regras" className="btn-ghost w-full sm:w-auto">
            <ScrollText className="h-4 w-4" />
            Ver as regras
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 z-10 w-full border-y border-white/5 bg-ink-950/60 py-2.5 backdrop-blur-sm">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center">
              {[
                "PVP LIBERADO",
                "TRAIÇÃO PERMITIDA",
                "INVASÃO DE BASE",
                "ROUBO LIBERADO",
                "EMBOSCADAS",
                "MIC POR APROXIMAÇÃO",
                "SEM PAZ",
                "SEM JUSTIÇA",
                "SÓ GUERRA",
              ].map((t) => (
                <span
                  key={t}
                  className="mx-6 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600"
                >
                  {t}
                  <span className="ml-6 text-war-600">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
