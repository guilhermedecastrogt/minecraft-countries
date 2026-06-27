"use client";

import { motion } from "framer-motion";
import { Flag, Swords, Crown, Flame } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const pillars = [
  {
    icon: Flag,
    title: "Crie seu país",
    text: "Levante sua base, esconda seus itens e proteja seus recursos. Cada country é uma nação em pé de guerra.",
  },
  {
    icon: Swords,
    title: "Domine os outros",
    text: "Invada, roube, mate e conquiste. O território é finito — e todo mundo quer o que é seu.",
  },
  {
    icon: Crown,
    title: "Solo ou em time",
    text: "Vença em grupo ou como um lobo solitário. O objetivo principal define o verdadeiro campeão.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="O que é Minecraft Countries"
              title={
                <>
                  Vanilla por fora.
                  <br />
                  <span className="text-gradient-fire">Guerra por dentro.</span>
                </>
              }
              subtitle="Um servidor Minecraft Vanilla de guerra total entre países. Times se formam, crescem, se desfazem, se unem ou se traem. Cada base escondida é um alvo. Cada baú, uma tentação. Não existe paz — só a corrida para completar o objetivo antes de todo mundo."
            />

            <Reveal delay={0.2} className="mt-9">
              <div className="flex flex-wrap gap-3">
                {["Caos", "Traição", "Sobrevivência", "Conquista", "Estratégia"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: pillars stacked */}
          <div className="flex flex-col gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="glass-card group flex items-start gap-5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-ember-500/30 bg-gradient-to-br from-war-700/30 to-ember-600/10 text-ember-400 shadow-ember">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {p.text}
                    </p>
                  </div>
                  <div className="absolute right-0 top-0 h-px w-0 bg-gradient-to-r from-transparent to-ember-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="relative mt-2 overflow-hidden rounded-2xl border border-war-600/30 bg-gradient-to-r from-war-700/20 via-ink-800 to-ink-800 p-6">
                <Flame className="absolute -right-3 -top-3 h-24 w-24 text-war-600/10" />
                <p className="relative font-heading text-lg font-medium uppercase italic tracking-wide text-zinc-200">
                  &ldquo;Se você morrer, perde o que estiver carregando. Se sua
                  base for invadida, seus itens viram troféu.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
