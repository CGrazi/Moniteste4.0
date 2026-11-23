/**
 * Every photo the site shows, in one place: its address, what it shows and where it is used. Pages and lists read
 * them from here (images.<name>.src). To change a photo, change its src here. When the site becomes another
 * business or subject, every photo here that shows the old one is replaced.
 */
export type SiteImage = { src: string; shows: string; usedIn: string[] };

export const images = {
  heroPhoto: { src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1600&q=80", shows: "Cones de sorvete coloridos", usedIn: ["Index › hero"] },
  saboresImage1: { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80", shows: "Bolas de sorvete em casquinha", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage2: { src: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=700&q=80", shows: "Vitrine de gelato artesanal", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage3: { src: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=700&q=80", shows: "Sundae colorido com coberturas", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage4: { src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80", shows: "Sorvete de frutas com pedaços", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage5: { src: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80", shows: "Sorvete de baunilha em casquinha", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage6: { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80", shows: "Sorvete de chocolate em casquinha waffle", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage7: { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80", shows: "Sorvete com pedaços de cookie", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  saboresImage8: { src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=700&q=80", shows: "Sorvete de chocolate com caramelo", usedIn: ["Sabores › saboresItems", "Index › saboresItems"] },
  galleryImage1: { src: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80", shows: "Interior de sorveteria", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage2: { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80", shows: "Balcão de gelato", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage3: { src: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=900&q=80", shows: "Vitrine colorida de sorvetes", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage4: { src: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=900&q=80", shows: "Ambiente aconchegante da sorveteria", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage5: { src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80", shows: "Fachada de sorveteria", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage6: { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80", shows: "Detalhes de sorvete artesanal", usedIn: ["Index › galleryItems", "Galeria › galleryItems"] },
  galleryImage7: { src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80", shows: "Sorvete servido na mesa", usedIn: ["Galeria › galleryItems"] },
  galleryImage8: { src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80", shows: "Preparo de sorvete", usedIn: ["Galeria › galleryItems"] },
  aboutPhoto: { src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1600&q=80", shows: "Produção artesanal de sorvete", usedIn: ["Sobre › about"] },
} satisfies Record<string, SiteImage>;
