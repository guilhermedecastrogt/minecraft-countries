import {
  Users,
  Skull,
  Mic,
  Target,
  Swords,
  Crown,
  Ban,
  Map,
  Lock,
  Flame,
  EyeOff,
  ShieldAlert,
  PlugZap,
  PackageOpen,
  type LucideIcon,
} from "lucide-react";

export type Mechanic = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

export const mechanics: Mechanic[] = [
  {
    icon: Users,
    title: "Times Flexíveis",
    description:
      "Não existem times definidos. Você forma seu country dentro do jogo: faça alianças, cresça, divida ou jogue sozinho como um maluco.",
    tag: "Aliança",
  },
  {
    icon: Skull,
    title: "Traição Liberada",
    description:
      "Virar casaca é estratégia. Trocar de lado no meio da guerra é permitido. Confie em ninguém — nem no seu aliado.",
    tag: "Sem perdão",
  },
  {
    icon: Mic,
    title: "Microfone por Aproximação",
    description:
      "Chegou perto, escuta. Chegou perto demais… já sabe. A tensão vive no áudio: cada passo pode te entregar.",
    tag: "Proximity chat",
  },
  {
    icon: Target,
    title: "Objetivo Principal",
    description:
      "Os objetivos da temporada serão divulgados no segundo dia. Quando saírem, vence o country que completar primeiro.",
    tag: "2º dia",
  },
  {
    icon: Swords,
    title: "Invasão & Roubo",
    description:
      "PvP, invasão de base, roubo de itens, armadilhas e emboscadas. Achou o baú inimigo? É seu agora.",
    tag: "Guerra total",
  },
  {
    icon: Crown,
    title: "Vitória Solo ou em Time",
    description:
      "Não basta sobreviver. Complete o objetivo antes dos outros — ou passe por cima de quem estiver no caminho.",
    tag: "Campeão",
  },
];

export type Rule = {
  icon: LucideIcon;
  title: string;
  description: string;
  forbidden?: boolean;
};

export const rules: Rule[] = [
  {
    icon: Ban,
    title: "Sem Ender Chest",
    description:
      "Removido do jogo. Sem item seguro, sem baú protegido magicamente. Morreu, perdeu o que carregava.",
    forbidden: true,
  },
  {
    icon: Map,
    title: "Mapa de 3.000 blocos",
    description:
      "Limite de 3.000 blocos a partir do spawn. Todo o território, recursos e batalhas acontecem dentro dele. Sem fuga para o infinito.",
  },
  {
    icon: Lock,
    title: "End Bloqueado no Início",
    description:
      "A dimensão final fica trancada. Libera só depois de um tempo — quando a guerra já estiver pegando fogo.",
    forbidden: true,
  },
  {
    icon: EyeOff,
    title: "Sem Esconderijo Seguro",
    description:
      "Se acharam sua base, é problema seu. Nenhum lugar é impossível de invadir. A defesa é sua responsabilidade.",
  },
  {
    icon: Flame,
    title: "Risco Real",
    description:
      "Cada saída da base pesa. Cada item carregado é uma aposta. A guerra cobra caro de quem vacila.",
  },
  {
    icon: ShieldAlert,
    title: "Sem Trapaça",
    description:
      "O jogo pode ser sujo, mas não pode ter cheat. Hack, X-Ray e macro absurdo são proibidos. Caos sim, trapaça não.",
    forbidden: true,
  },
  {
    icon: PlugZap,
    title: "Combat Log = Morte",
    description:
      "Está em PvP e desconectou? Você morre. Cair da luta na queda da conexão não te salva — perde tudo igual.",
    forbidden: true,
  },
  {
    icon: PackageOpen,
    title: "Apenas Cliente Vanilla",
    description:
      "Entre só com o cliente Vanilla (Java Edition 26.1.2). Clientes alternativos e mods de vantagem estão fora.",
  },
];

export const players: string[] = [
  "Daniel",
  "Groplay",
  "Davi",
  "Dantas",
  "Andre",
  "Guilherme",
  "Alex",
  "Jonathas",
  "Keven",
  "Nicareta",
  "Dani Dani",
  "Magela",
  "José",
  "Jossué",
];

export const warMoments: { title: string; text: string }[] = [
  {
    title: "O som da ameaça",
    text: "Você ouve passos pelo microfone. Estão perto. Não dá pra saber se são dois ou dez. Você prende a respiração e decide: foge ou luta.",
  },
  {
    title: "A invasão",
    text: "A base inimiga está aberta. Os baús, à vista. Você sabe que eles vão voltar. Cada segundo lá dentro é uma aposta com a própria vida.",
  },
  {
    title: "A faca nas costas",
    text: "Seu aliado sorriu, lutou ao seu lado, dividiu recursos. Até a hora em que o objetivo apareceu — e ele escolheu a glória dele.",
  },
  {
    title: "A aliança temporária",
    text: "Dois countries inimigos. Um terceiro grande demais. Vocês se unem por uma noite. Amanhã, voltam a se odiar.",
  },
];
