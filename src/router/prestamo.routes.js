import { Router } from 'express';
const router = Router()
import { prestamoSchema } from '../schemas/prestamo.shema.js';
import { validatePrestado } from '../middlewares/validatePrestado.middleware.js';
import { createPrestamo, buscarPrestamo, eliminarPrestamo } from '../controllers/prestamo.controllers.js';

/**
 * @openapi
 *   components:
 *     schemas:
 *       prestamo:
 *         type: object
 *         required:
 *           - libroId
 *           - lectorId
 *         properties:
 *           id:
 *             type: integer
 *             format: int64
 *             example: 10
 *           libroId:
 *             type: number
 *             example: 5
 *           lectorId:
 *             type: number
 *             example: 3
 *           date:
 *             type: date
 *             example: 20-06-2023
 */

router.post('/prestamo',validatePrestado(prestamoSchema),createPrestamo)

/**
 * @openapi
 * /api/prestamo:
 *    post:
 *      tags:
 *        - prestamo
 *      summary: "Crear un prestamo"
 *      description: Este endpoint es para crear un prestamo teniendo en cuenta el id del lector y el id del libro
 *      requestBody:
 *       description: Objeto de prestamo creado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/prestamo'
 *      responses:
 *       '200':
 *         description: Se ha creado el prestamo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/prestamo'
 *       '400':
 *         description: Inserte correctamente los valores
 */

router.get("/prestamo/", buscarPrestamo);

/**
 * @openapi
 * /api/prestamo:
 *    get:
 *      tags:
 *        - prestamo
 *      summary: "Lista todos los prestamos"
 *      description: Este endpoint es para listar todos los prestamos, y junto con ellos el libro y el lector al que pertenece el prestamo
 *      responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/libros'
 *       '404':
 *         description: No existen prestamos realizados
 */

router.delete('/prestamo/:id/:libroId/:lectorId',eliminarPrestamo);

/**
 * @openapi
 * /api/prestamo/{id}/{libroId}/{lectorId}:
 *   delete:
 *     summary: Elimina un prestamo
 *     description: Este endpoint es para eliminar un préstamo por su ID, el ID del libro actualiza el estado buleano del libro a false para que este disponible y el ID del lector elimina al lector 
 *     tags:
 *       - prestamo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID del préstamo a eliminar
 *       - in: path
 *         name: libroId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID del libro asociado al préstamo
 *       - in: path
 *         name: lectorId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID del lector asociado al préstamo
 *     responses:
 *       '204':
 *         description: Préstamo eliminado correctamente
 *       '404':
 *         description: Préstamo no encontrado
 */


export default router;