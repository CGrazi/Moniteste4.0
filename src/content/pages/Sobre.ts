import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";

/** The lists the "Sobre" page shows. Edit them here: src/pages/Sobre.tsx reads them. */
export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "leaf",
    "title": "Ingredientes selecionados",
    "description": "Fruta da estação, leite fresco de produtores da região e cacau de origem. Nada de mistura pronta ou corante artificial."
  },
  {
    "icon": "clock",
    "title": "Feito no dia",
    "description": "Cada lote é produzido de manhã para servir à tarde. O que sobra não volta no dia seguinte."
  },
  {
    "icon": "heart",
    "title": "Feito com cuidado",
    "description": "Receitas testadas e ajustadas até ficarem do jeito que a gente gosta. Sem pressa, sem atalho."
  }
];

export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  {
    "question": "Como surgiu a Moniteste?",
    "answer": "A Moniteste nasceu da vontade de fazer sorvete do jeito que a gente gostaria de comer: com fruta de verdade, sem pressa e em pouca quantidade."
  },
  {
    "question": "Onde fica a produção?",
    "answer": "Tudo é feito na nossa cozinha, no mesmo endereço da loja. Você pode ver o preparo pelo vidro do balcão."
  }
];
