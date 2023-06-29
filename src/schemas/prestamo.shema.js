import {z} from 'zod';

 export const prestamoSchema = z.object({
   date: z.date().optional(),
   lectorId: z
     .number({
       required_error: "el id del lector debe ser requerido",
     })
     .min(1),
   libroId: z.number({
     required_error: "el id del libro debe ser requerido",
   }).min(1)
 });