import { Router } from "express";
import { validateLector } from '../middlewares/validateLector.middelwares.js';
import {lectorSchema} from '../schemas/lector.shecma.js';
import { crearLector, lectorPredefinido } from '../controllers/lector.controller.js';
const router = Router();

router.post("/lector", validateLector(lectorSchema), crearLector);
router.get("/lector",lectorPredefinido);

export default router