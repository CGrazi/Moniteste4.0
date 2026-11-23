import type { ComponentType } from "react";
import IndexPage from "@/pages/Index";
import SaboresPage from "@/pages/Sabores";
import GaleriaPage from "@/pages/Galeria";
import SobrePage from "@/pages/Sobre";
import ContatoPage from "@/pages/Contato";

/** Every page of the site. The menu (src/content/site.ts) links to these paths. */
export const routes: { path: string; name: string; Page: ComponentType }[] = [
  { path: "/", name: "Moniteste", Page: IndexPage },
  { path: "/sabores", name: "Sabores", Page: SaboresPage },
  { path: "/galeria", name: "Galeria", Page: GaleriaPage },
  { path: "/sobre", name: "Sobre", Page: SobrePage },
  { path: "/contato", name: "Contato", Page: ContatoPage },
];
