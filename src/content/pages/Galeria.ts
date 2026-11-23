import type { ComponentProps } from "react";
import type { About } from "@/components/sections/About";
import type { Gallery } from "@/components/sections/Gallery";
import { images } from "@/content/images";

/** The lists the "Galeria" page shows. Edit them here: src/pages/Galeria.tsx reads them. */
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
  },
  {
    "image": images.galleryImage7.src,
    "caption": "Mesa"
  },
  {
    "image": images.galleryImage8.src,
    "caption": "Preparo"
  }
];

export const aboutBullets: NonNullable<ComponentProps<typeof About>["bullets"]> = [
  {
    "text": "Produção artesanal em pequenos lotes"
  },
  {
    "text": "Fruta fresca comprada na semana"
  },
  {
    "text": "Receitas próprias, sem mistura pronta"
  }
];
