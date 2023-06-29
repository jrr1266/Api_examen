import {z} from "zod"

export const lectorSchema = z.object({
    nombre: z.string({
        required_error: "se requiere el nombre"
    }).min(3)
})