import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { galleryItems, aboutBullets } from "@/content/pages/Galeria";
import { images } from "@/content/images";

export default function GaleriaPage() {
  return (
    <>
      <title>Galeria · Moniteste</title>
      <meta name="description" content="Fotos da sorveteria Moniteste: nosso espaço, balcão e preparo." />
      <Gallery
        id="gallery"
        title="Galeria"
        intro="Nosso espaço, o balcão e o preparo — tudo feito aqui."
        layout="masonry"
        items={galleryItems}
      />
      <About
        id="about"
        eyebrow="A sorveteria"
        title="Pequenos lotes, feitos aqui"
        text="Cada sabor sai da nossa cozinha em quantidade limitada. A fruta é comprada na semana, o leite chega fresco e a receita é nossa."
        image={images.aboutPhoto.src}
        imageSide="left"
        bullets={aboutBullets}
      />
    </>
  );
}
