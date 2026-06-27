"use client";

import { motion } from "framer-motion";
import { mechanics } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { SpotlightCard } from "./ui/SpotlightCard";
import { staggerContainer, staggerItem } from "./ui/Reveal";

export function Mechanics() {
  return (
    <section id="mecanicas" className="relative py-24 sm:py-32">
      {/* divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-war-600/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mecânicas principais"
          title={
            <>
              As armas do <span className="text-gradient-fire">caos</span>
            </>
          }
          subtitle="Tudo que torna cada partida imprevisível. Aqui a única lei é: se deu vontade de trair, trai. Se deu vontade de dominar, domina."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mechanics.map((m) => (
            <motion.div key={m.title} variants={staggerItem}>
              <SpotlightCard className="glass-card h-full p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ember-500/30 bg-gradient-to-br from-war-700/40 to-ink-800 text-ember-400 shadow-ember transition-all duration-300 group-hover:scale-110 group-hover:text-ember-400">
                    <m.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                    {m.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-white">
                  {m.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {m.description}
                </p>

                {/* corner accent */}
                <div className="pointer-events-none absolute -bottom-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
