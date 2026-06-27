"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { rules } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem, Reveal } from "./ui/Reveal";

export function Rules() {
  return (
    <section id="regras" className="relative overflow-hidden py-24 sm:py-32">
      {/* warning stripe background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #f5c542 0 24px, transparent 24px 48px)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-war-700/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Regras & Configurações"
          title={
            <>
              As leis da <span className="text-gradient-fire">guerra</span>
            </>
          }
          subtitle="Poucas regras, todas brutais. Elas existem para aumentar o peso de cada invasão, cada morte e cada decisão. Nada é seguro aqui."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rules.map((r) => (
            <motion.div
              key={r.title}
              variants={staggerItem}
              className="group relative bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-800"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    r.forbidden
                      ? "border-war-600/40 bg-war-700/15 text-war-400 group-hover:shadow-war"
                      : "border-gold-500/30 bg-gold-500/10 text-gold-400"
                  }`}
                >
                  <r.icon className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
                      {r.title}
                    </h3>
                    {r.forbidden && (
                      <span className="rounded border border-war-600/40 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-war-400">
                        Bloqueado
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {r.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex items-start gap-4 rounded-2xl border border-gold-500/25 bg-gradient-to-r from-gold-500/[0.06] to-transparent p-6">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
            <p className="text-sm leading-relaxed text-zinc-300">
              <span className="font-semibold text-gold-300">Justiça pra todos:</span>{" "}
              o servidor só fica online nos horários oficiais. Ninguém farma
              escondido no escuro. Todo mundo joga junto, todo mundo se enfrenta
              junto — e vive a guerra ao mesmo tempo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
