// Importa el módulo Express para crear y manejar rutas HTTP
import express from "express";

// Importa el controlador con la lógica para manejar operaciones sobre ciudades
import CiudadController from "../Controller/CiudadController.js";

// Importa el middleware que valida los campos requeridos para crear o actualizar una ciudad
import { camposCiudad } from "../Middleware/Ciudad/index.js";

// Crea una instancia del enrutador de Express
const router = express.Router();

// Ruta GET para obtener todas las ciudades
router.get("/", CiudadController.getAllCiudades);

// Ruta GET para obtener una ciudad específica por su ID
router.get("/:id", CiudadController.getCiudadById);

// Ruta POST para crear una nueva ciudad, validando los campos necesarios
router.post("/", camposCiudad, CiudadController.createCiudad);

// Ruta PUT para actualizar completamente una ciudad por ID, con validación de campos
router.put("/:id", camposCiudad, CiudadController.updateCiudad);

// Ruta PATCH para actualizar parcialmente una ciudad por ID, usando la misma validación que PUT
router.patch("/:id", camposCiudad, CiudadController.updateCiudad);

// Ruta DELETE para eliminar una ciudad por su ID
router.delete("/:id", CiudadController.deleteCiudad);

// Exporta el enrutador para que pueda ser utilizado en otros módulos de la aplicación
export default router;
