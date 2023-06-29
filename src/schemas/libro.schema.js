import {z} from "zod"

export const libroSchema = z.object({
  titulo: z.string({
    required_error: "el titulo es requerido",
  }).min(3).max(300) ,
  isbn: z.string({
    required_error: "el isbn es requerido",
  }).length(13)
});
