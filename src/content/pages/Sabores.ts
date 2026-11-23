import type { ComponentProps } from "react";
import type { GenericSection } from "@/components/sections/GenericSection";
import { images } from "@/content/images";

/** The lists the "Sabores" page shows. Edit them here: src/pages/Sabores.tsx reads them. */
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
