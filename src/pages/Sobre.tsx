import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { featuresItems, faqItems } from "@/content/pages/Sobre";

export default function SobrePage() {
  return (
    <>
      <title>Sobre · Moniteste</title>
      <meta name="description" content="Como a Moniteste faz sorvete: ingredientes, produção e cuidado." />
      <Features
        id="features"
        title="Como fazemos"
        layout="rows"
        items={featuresItems}
      />
      <Faq
        id="faq"
        title="Sobre a Moniteste"
        items={faqItems}
      />
    </>
  );
}
