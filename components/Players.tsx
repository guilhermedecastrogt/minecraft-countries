"use client";

import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";
import { players } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function Players() {
  return (
    <section id="jogadores" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guerreiros confirmados"
          title={
            <>
              {players.length} entraram.{" "}
              <span className="text-gradient-fire">1 vai sair.</span>
            </>
          }
          subtitle="A vitória pode sair por um country inteiro ou por um único jogador. Cada nome abaixo é um possível aliado — ou a faca que vai aparecer nas suas costas."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {players.map((name) => (
            <motion.div
              key={name}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5 text-center"
            >
              <div className="absolute inset-x-0 -top-16 h-16 bg-ember-500/30 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-war-700/40 to-ink-800 font-display text-lg text-gold-300 transition-all duration-300 group-hover:border-ember-500/50 group-hover:shadow-ember">
                {initials(name)}
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-ink-900 bg-war-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Crosshair className="h-3 w-3 text-white" />
                </span>
              </div>

              <div>
                <div className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                  {name}
                </div>
                <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors group-hover:text-ember-400">
                  Na guerra
                </div>
              </div>
            </motion.div>
          ))}

          {/* "Your spot" card */}
          <motion.a
            href="#entrar"
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ember-500/40 bg-ember-500/[0.04] p-5 text-center"
          >
            <span className="font-display text-3xl text-ember-400">+</span>
            <span className="font-heading text-xs font-semibold uppercase tracking-wide text-ember-400">
              Seu lugar
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
