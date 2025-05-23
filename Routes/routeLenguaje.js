// Importa el módulo Express para definir rutas
import express from "express";

// Importa el controlador que maneja la lógica para los recursos de Lenguaje
import LenguajeController from "../Controller/LenguajeController.js";

// Importa el middleware que valida los campos necesarios al crear o actualizar un lenguaje
import { camposLenguaje } from "../Middleware/Lenguaje/index.js";

// Crea una instancia del enrutador de Express
const router = express.Router();

// Ruta GET para obtener todos los lenguajes
router.get("/", LenguajeController.getAllLenguajes);

// Ruta GET para obtener un lenguaje específico por su ID
router.get("/:id", LenguajeController.getLenguajeById);

// Ruta POST para crear un nuevo lenguaje, validando los campos requeridos
router.post("/", camposLenguaje, LenguajeController.createLenguaje);

// Ruta PUT para actualizar completamente un lenguaje por su ID, con validación de campos
router.put("/:id", camposLenguaje, LenguajeController.updateLenguaje);

// Ruta PATCH para actualizar parcialmente un lenguaje por su ID (usa la misma validación que PUT)
router.patch("/:id", camposLenguaje, LenguajeController.updateLenguaje);

// Ruta DELETE para eliminar un lenguaje por su ID
router.delete("/:id", LenguajeController.deleteLenguaje);

// Exporta el enrutador para que pueda ser usado en otras partes de la aplicación
export default router;
