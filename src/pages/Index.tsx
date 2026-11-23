import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { GenericSection } from "@/components/sections/GenericSection";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { marqueeItems, saboresItems, galleryItems, featuresItems, faqItems } from "@/content/pages/Index";
import { images } from "@/content/images";

export default function IndexPage() {
  return (
    <>
      <title>Moniteste — Sorveteria artesanal</title>
      <meta name="description" content="Sorvete feito com fruta de verdade e leite fresco. Sabores novos toda semana." />
      <Hero
        id="hero"
        eyebrow="Sorveteria artesanal"
        title="Sorvete feito com fruta de verdade"
        subtitle="Pequenos lotes, leite fresco e zero corante artificial. Cada sabor é uma receita própria, feita no dia."
        buttonText="Ver sabores"
        buttonUrl="/sabores"
        buttonSecondaryText="Galeria"
        buttonSecondaryUrl="/galeria"
        image={images.heroPhoto.src}
        alignment="left"
        variant="editorial"
      />
      <Marquee
        id="marquee"
        items={marqueeItems}
      />
      <GenericSection
        id="sabores"
        title="Sabores da semana"
        intro="Produção em pequenos lotes. O que acaba, acaba — e volta diferente na próxima semana."
        items={saboresItems}
      />
      <Gallery
        id="gallery"
        title="Nosso espaço"
        layout="mosaic"
        items={galleryItems}
      />
      <Features
        id="features"
        eyebrow="Como funciona"
        title="Feito do jeito certo"
        layout="list"
        items={featuresItems}
      />
      <Faq
        id="faq"
        title="Perguntas frequentes"
        items={faqItems}
      />
    </>
  );
}
