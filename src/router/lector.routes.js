import { Router } from "express";
import { validateLector } from "../middlewares/validateLector.middelwares.js";
import { lectorSchema } from "../schemas/lector.shecma.js";
import {
  crearLector,
  lectorPredefinido,
} from "../controllers/lector.controller.js";
const router = Router();


/**
 * @openapi
 *   components:
 *     schemas:
 *       lector:
 *         type: object
 *         required:
 *           - nombre
 *         properties:
 *           id:
 *             type: integer
 *             format: int64
 *             example: 10
 *           nombre:
 *             type: string
 *             nullable: false
 *             example: El lector
 */


router.post("/lector", validateLector(lectorSchema), crearLector);

/**
 * @openapi
 * /api/lector:
 *    post:
 *      tags:
 *        - lector
 *      summary: "Crear un lector"
 *      description: Este endpoint es para crear un lector 
 *      requestBody:
 *       description: Objeto de lector creado
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/lector'
 *      responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/lector'
 *       '400':
 *         description: Solicitud inválida
 */




router.get("/lector", lectorPredefinido);
/**
 * @openapi
 * /api/lector:
 *    get:
 *      tags:
 *        - lector
 *      summary: "Lectores por defecto"
 *      description: Este endpoint es para listar los lectores predefinidos al inicio de la pagina a modo de ejemplo
 *      responses:
 *       '200':
 *         description: Lista de lectores predefinidos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     format: int64
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Juan Pablo
 */
export default router;
