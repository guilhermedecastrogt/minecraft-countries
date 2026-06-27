"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Mecânicas", href: "#mecanicas" },
  { label: "Regras", href: "#regras" },
  { label: "Guerra", href: "#guerra" },
  { label: "Jogadores", href: "#jogadores" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-3 rounded-2xl border border-white/10 bg-ink-900/80 py-2.5 backdrop-blur-xl"
            : "py-5"
        }`}
        style={
          scrolled
            ? { boxShadow: "0 12px 40px -18px rgba(0,0,0,0.9)" }
            : undefined
        }
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-ember-500 to-war-600 shadow-war">
            <Swords className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="font-heading text-sm font-bold uppercase leading-none tracking-[0.18em] text-white">
            Minecraft
            <span className="block text-ember-400">Countries</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#entrar" className="hidden btn-war !px-5 !py-2.5 !text-xs md:inline-flex">
          Entrar na guerra
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-semibold uppercase tracking-widest text-zinc-300 last:border-0 hover:text-ember-400"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#entrar"
                onClick={() => setOpen(false)}
                className="btn-war mt-4 w-full"
              >
                Entrar na guerra
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
