"use client";

import { motion } from "framer-motion";
import { Swords, Skull, Server } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Embers } from "./ui/Embers";

const steps = [
  { n: "01", t: "Mande “TÔ NA GUERRA”", d: "Confirme no grupo que você quer entrar na temporada." },
  { n: "02", t: "Entre no servidor", d: "O IP de conexão será divulgado em breve. Fique de olho." },
  { n: "03", t: "Forme seu country", d: "Não há times definidos. Faça alianças e monte seu time dentro do jogo." },
];

export function FinalCTA() {
  return (
    <section id="entrar" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-ink-900 via-ink-950 to-black" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-war-700/25 blur-[140px]" />
      <Embers count={26} className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-grid-fade opacity-30" />

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="label-eyebrow">
            <Skull className="h-3.5 w-3.5" />
            Último aviso
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-7 font-display text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.85] text-white">
            Não vence o
            <br />
            <span className="text-gradient-fire drop-shadow-[0_4px_30px_rgba(255,122,24,0.4)]">
              mais forte.
            </span>
            <br />
            Vence quem sobra.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl text-balance text-lg leading-relaxed text-zinc-300">
            Aqui não existe paz. Não existe segurança. Não existe justiça. Só
            existe a guerra.{" "}
            <span className="font-semibold text-white">
              Entre agora. Confie em ninguém.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#top"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-war w-full text-base sm:w-auto"
            >
              <Swords className="h-5 w-5" />
              Entrar na guerra
            </motion.a>
            <a href="#regras" className="btn-ghost w-full sm:w-auto">
              Reler as regras
            </a>
          </div>
        </Reveal>

        {/* Server IP */}
        <Reveal delay={0.28}>
          <div className="mx-auto mt-14 max-w-xl">
            <span className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Server className="h-3.5 w-3.5 text-ember-400" />
              IP do servidor
            </span>
            <div className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-ink-900/70 px-5 py-4 backdrop-blur-sm">
              <span className="font-display text-xl uppercase tracking-wide text-gradient-fire sm:text-2xl">
                Em breve
              </span>
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Java Edition · o IP de conexão será divulgado antes da temporada começar.
            </p>
          </div>
        </Reveal>

        {/* How to join steps */}
        <div className="mt-20 grid gap-5 text-left sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.1 + i * 0.1}>
              <div className="glass-card h-full p-6">
                <div className="font-display text-4xl text-gradient-fire">
                  {s.n}
                </div>
                <h3 className="mt-3 font-heading text-base font-semibold uppercase tracking-wide text-white">
                  {s.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
