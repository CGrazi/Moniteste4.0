import { GenericSection } from "@/components/sections/GenericSection";
import { saboresItems } from "@/content/pages/Sabores";

export default function SaboresPage() {
  return (
    <>
      <title>Sabores · Moniteste</title>
      <meta name="description" content="Sorvetes artesanais feitos com fruta de verdade e leite fresco." />
      <GenericSection
        id="sabores"
        title="Sabores"
        intro="Produção em pequenos lotes. Pergunte no balcão quais são os sabores do dia."
        items={saboresItems}
      />
    </>
  );
}
