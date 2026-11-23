import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";
import type { Gallery } from "@/components/sections/Gallery";
import type { GenericSection } from "@/components/sections/GenericSection";
import type { Marquee } from "@/components/sections/Marquee";
import { images } from "@/content/images";

/** The lists the "Moniteste" page shows. Edit them here: src/pages/Index.tsx reads them. */
export const marqueeItems: NonNullable<ComponentProps<typeof Marquee>["items"]> = [
  {
    "text": "Feito com fruta de verdade"
  },
  {
    "text": "Leite fresco todos os dias"
  },
  {
    "text": "Sem corante artificial"
  },
  {
    "text": "Sabores novos toda semana"
  }
];

export const saboresItems: NonNullable<ComponentProps<typeof GenericSection>["items"]> = [
  {
    "title": "Morango com pedaços",
    "group": "Frutas",
    "badge": "Mais pedido",
    "image": images.saboresImage1.src,
    "meta": "Morango fresco · base de creme",
    "price": "R$ 14,00"
  },
  {
    "title": "Pistache",
    "group": "Clássicos",
    "image": images.saboresImage2.src,
    "meta": "Pistache torrado · sem corante",
    "price": "R$ 16,00"
  },
  {
    "title": "Arco-íris",
    "group": "Especiais",
    "image": images.saboresImage3.src,
    "meta": "Camadas de frutas · edição limitada",
    "price": "R$ 18,00"
  },
  {
    "title": "Açaí com banana",
    "group": "Frutas",
    "image": images.saboresImage4.src,
    "meta": "Açaí puro · banana caramelizada",
    "price": "R$ 15,00"
  },
  {
    "title": "Baunilha",
    "group": "Clássicos",
    "image": images.saboresImage5.src,
    "meta": "Fava de baunilha · leite fresco",
    "price": "R$ 12,00"
  },
  {
    "title": "Chocolate belga",
    "group": "Clássicos",
    "badge": "Novo",
    "image": images.saboresImage6.src,
    "meta": "Cacau 70% · ganache",
    "price": "R$ 16,00"
  },
  {
    "title": "Cookies and cream",
    "group": "Especiais",
    "image": images.saboresImage7.src,
    "meta": "Cookie artesanal · base de creme",
    "price": "R$ 15,00"
  },
  {
    "title": "Chocolate com caramelo",
    "group": "Especiais",
    "image": images.saboresImage8.src,
    "meta": "Caramelo salgado · chocolate ao leite",
    "price": "R$ 17,00"
  }
];

export const galleryItems: NonNullable<ComponentProps<typeof Gallery>["items"]> = [
  {
    "image": images.galleryImage1.src,
    "caption": "Nosso espaço"
  },
  {
    "image": images.galleryImage2.src,
    "caption": "Balcão"
  },
  {
    "image": images.galleryImage3.src,
    "caption": "Vitrine"
  },
  {
    "image": images.galleryImage4.src,
    "caption": "Ambiente"
  },
  {
    "image": images.galleryImage5.src,
    "caption": "Fachada"
  },
  {
    "image": images.galleryImage6.src,
    "caption": "Detalhes"
  }
];

export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "leaf",
    "title": "Ingredientes de verdade",
    "description": "Fruta fresca, leite da região e zero corante artificial. O sabor vem do ingrediente, não da química."
  },
  {
    "icon": "clock",
    "title": "Feito no dia",
    "description": "Produção artesanal em pequenos lotes. O que acaba, acaba — e volta diferente na próxima semana."
  },
  {
    "icon": "heart",
    "title": "Para todos",
    "description": "Opções sem lactose, sem açúcar e veganas. Pergunte no balcão quais sabores do dia se encaixam."
  }
];

export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  {
    "question": "Quais formas de pagamento?",
    "answer": "Pix, cartão de crédito, débito e dinheiro. Pix tem desconto."
  },
  {
    "question": "Fazem encomenda para festas?",
    "answer": "Sim. Encomende com pelo menos 3 dias de antecedência pelo WhatsApp ou pelo formulário de contato."
  },
  {
    "question": "Tem opção vegana?",
    "answer": "Sempre temos pelo menos dois sabores veganos no dia. A base é de leite de coco ou de castanha."
  }
];
