import { Swords } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-ember-500 to-war-600">
            <Swords className="h-5 w-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl uppercase tracking-wide text-white">
            Minecraft Countries
          </span>
        </div>

        <p className="font-heading text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Um servidor · Vários países · Apenas um campeão
        </p>

        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <p className="text-xs text-zinc-600">
          Servidor Vanilla de Guerra Total · 1ª Edição · Feito entre amigos.
          Entre por sua conta e risco.
        </p>
      </div>
    </footer>
  );
}
