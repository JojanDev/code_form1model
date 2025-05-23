// Importa el módulo Express para manejar rutas HTTP
import express from "express";

// Importa el controlador que contiene la lógica para operaciones con géneros
import GeneroController from "../Controller/GeneroController.js";

// Importa el middleware que valida los campos requeridos para crear o actualizar un género
import { camposGenero } from "../Middleware/Genero/index.js";

// Crea una nueva instancia del enrutador de Express
const router = express.Router();

// Ruta GET para obtener todos los géneros
router.get("/", GeneroController.getAllGeneros);

// Ruta GET para obtener un género específico por su ID
router.get("/:id", GeneroController.getGeneroById);

// Ruta POST para crear un nuevo género, validando los campos necesarios
router.post("/", camposGenero, GeneroController.createGenero);

// Ruta PUT para actualizar completamente un género por ID, con validación de campos
router.put("/:id", camposGenero, GeneroController.updateGenero);

// Ruta PATCH para actualizar parcialmente un género por ID, usando la misma validación que PUT
router.patch("/:id", camposGenero, GeneroController.updateGenero);

// Ruta DELETE para eliminar un género por su ID
router.delete("/:id", GeneroController.deleteGenero);

// Exporta el enrutador para poder usarlo en el resto de la aplicación
export default router;
