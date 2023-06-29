import { Router } from "express";
import {
  listaLibroController,
  crearLibroController,
  listaEliminarLibroController
} from "../controllers/libro.controllers.js";
import { libroSchema } from '../schemas/libro.schema.js';
import { validateLibro } from '../middlewares/validateLibro.middlewares.js';
const router = Router()

router.get("/libros", listaLibroController);
router.post("/libros",validateLibro(libroSchema), crearLibroController);
router.delete("/libros/:id",listaEliminarLibroController);

export default router;