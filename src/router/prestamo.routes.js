import { Router } from 'express';
const router = Router()
import { prestamoSchema } from '../schemas/prestamo.shema.js';
import { validatePrestado } from '../middlewares/validatePrestado.middleware.js';
import { createPrestamo, buscarPrestamo, eliminarPrestamo } from '../controllers/prestamo.controllers.js';

router.post('/prestamo',validatePrestado(prestamoSchema),createPrestamo)
router.get("/prestamo/", buscarPrestamo);
router.delete('/prestamo/:id/:libroId/:lectorId',eliminarPrestamo);

export default router;