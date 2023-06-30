import { Router } from "express";
import {
  listaLibroController,
  crearLibroController,
  listaEliminarLibroController,
} from "../controllers/libro.controllers.js";
import { libroSchema } from "../schemas/libro.schema.js";
import { validateLibro } from "../middlewares/validateLibro.middlewares.js";
const router = Router();

/**
 * @openapi
 *   components:
 *     schemas:
 *       libros:
 *         type: object
 *         required:
 *           - titulo
 *           - isbn
 *         properties:
 *           id:
 *             type: integer
 *             format: int64
 *             example: 10
 *           titulo:
 *             type: string
 *             example: El libro
 *           isbn:
 *             type: string
 *             example: "1236547896541"
 *           prestado:
 *             type: boolean
 *             example: false
 */

router.get("/libros", listaLibroController);

/**
 * @openapi
 * /api/libros:
 *    get:
 *      tags:
 *        - libros
 *      summary: "Lista todos los libros que estan disponibles"
 *      description: Este endpoint es para listar todos los libros disponibles que no esten en un prestamo
 *      responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/libros'
 *       '404':
 *         description: No existen libros disponibles
 */
router.post("/libros", validateLibro(libroSchema), crearLibroController);

/**
 * @openapi
 * /api/libros:
 *    post:
 *      tags:
 *        - libros
 *      summary: "Crear un libro"
 *      description: Este endpoint es para listar un libro en la base de datos, el parametro prestado esta por defecto en false
 *      requestBody:
 *       description: Objeto de libro creado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/libros'
 *      responses:
 *       '200':
 *         description: Se ha creado el Libro
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/libros'
 *       '500':
 *         description: Ha ocurrido un problema al enviar el dato
 */

router.delete("/libros/:id", listaEliminarLibroController);

/**
 * @openapi
 * /api/libros/{id}:
 *   delete:
 *     summary: Elimina un libro por su ID
 *     tags:
 *       - libros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: ID del libro a eliminar
 *     responses:
 *       '204':
 *         description: Libro eliminado correctamente
 *       '404':
 *         description: Libro no encontrado
 */


export default router;
