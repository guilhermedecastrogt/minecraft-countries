"use client";

import { Skull, Server } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Embers } from "./ui/Embers";

const steps = [
  { n: "01", t: "Mande “TÔ NA GUERRA”", d: "Confirme no grupo que você quer entrar na temporada." },
  { n: "02", t: "Entre no servidor", d: "Use o IP mceasy-01.strt.host:25591 com o cliente Vanilla (Java Edition 26.1.2)." },
  { n: "03", t: "Forme seu country", d: "Não há times definidos. Faça alianças e monte seu time dentro do jogo." },
];

const serverNotes = [
  "Entre apenas com o cliente VANILLA — nada de mods ou clientes alternativos.",
  "Saiu em PvP? Desconectar no meio do combate = morte. Não tem fuga.",
  "Comando /clan já está disponível para organizar seu country.",
  "Comando /home ainda será adicionado.",
  "O End está OFF no início e será liberado no futuro.",
  "Os objetivos da temporada serão divulgados no segundo dia.",
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
              <span className="select-all break-all font-display text-xl uppercase tracking-wide text-gradient-fire sm:text-2xl">
                mceasy-01.strt.host:25591
              </span>
            </div>
            <p className="mt-3 text-xs text-zinc-600">
              Java Edition · versão 26.1.2 · entre apenas com o cliente Vanilla.
            </p>
          </div>
        </Reveal>

        {/* Server notes */}
        <Reveal delay={0.32}>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-ink-900/50 p-6 text-left backdrop-blur-sm">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Skull className="h-3.5 w-3.5 text-war-400" />
              Antes de entrar
            </span>
            <ul className="mt-4 space-y-3">
              {serverNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                  {note}
                </li>
              ))}
            </ul>
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
