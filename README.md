# Minecraft Countries — Landing Page

Landing page premium para o servidor **Minecraft Countries** — servidor Vanilla de guerra total.

> Um servidor. Vários países. Apenas um campeão.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 11** (animações, parallax, reveals)
- **lucide-react** (ícones)
- Fontes: Anton (display), Oswald (headings), Inter (corpo) via `next/font`

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # serve o build
```

## Estrutura

```
app/
  layout.tsx        # fontes, metadata, html shell
  page.tsx          # composição das seções
  globals.css       # tema, utilitários (glass, btn-war, glow, grid)
components/
  Navbar.tsx        # header sticky com menu mobile
  Hero.tsx          # entrada cinematográfica, parallax, embers, marquee
  About.tsx         # o que é o servidor
  Mechanics.tsx     # cards de mecânicas (spotlight no mouse)
  Rules.tsx         # regras / configurações
  WarExperience.tsx # seção narrativa/emocional
  Players.tsx       # grid de jogadores confirmados
  FinalCTA.tsx      # CTA final épico + passos de entrada
  Footer.tsx
  ui/
    Reveal.tsx        # reveal no scroll + variantes de stagger
    SectionHeading.tsx
    SpotlightCard.tsx # glow que segue o mouse
    Embers.tsx        # partículas de brasa
lib/
  data.ts           # mecânicas, regras, jogadores, momentos de guerra
public/
  MINECRAFTCOUNTRIES-BANNER.png
```

## Direção de arte

Tema escuro · paleta preto / carvão / vermelho guerra / brasa / dourado.
Gradientes radiais, grid overlay, glassmorphism escuro, glow em bordas,
partículas de brasa, parallax leve e spotlight seguindo o mouse.

## Conteúdo

Todo o copy (mecânicas, regras, jogadores) vive em [`lib/data.ts`](lib/data.ts) —
edite lá para atualizar a temporada sem mexer nos componentes.
