import type { ComponentProps } from "react";
import type { Hours } from "@/components/sections/Hours";

/** The lists the "Contato" page shows. Edit them here: src/pages/Contato.tsx reads them. */
export const hoursItems: NonNullable<ComponentProps<typeof Hours>["items"]> = [
  {
    "day": "Terça a sexta",
    "hours": "12h às 20h"
  },
  {
    "day": "Sábado e domingo",
    "hours": "11h às 21h"
  },
  {
    "day": "Segunda",
    "hours": "Fechado"
  }
];
