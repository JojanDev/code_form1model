// Importa el módulo Express para crear el enrutador y manejar las rutas
import express from "express";

// Importa el controlador que contiene la lógica para gestionar LenguajeUsuario
import LenguajeUsuarioController from "../Controller/LenguajeUsuarioController.js";

// Importa los middlewares de validación: uno para todos los campos, otro para campos parciales
import {
  camposLenguajeUsuario, // Valida que se proporcionen todos los campos requeridos
  parcialesLenguajeUsuario, // Valida solo los campos enviados (útil para PATCH)
} from "../Middleware/LenguajeUsuario/index.js";

// Crea una instancia del enrutador de Express
const router = express.Router();

// Ruta GET para obtener todos los registros de lenguajes de usuarios
router.get("/", LenguajeUsuarioController.getAllLenguajeUsuarios);

// Ruta GET para obtener un registro de lenguaje por usuario según el ID de la tabla lenguajes_usuarios
router.get("/:id", LenguajeUsuarioController.getLenguajeUsuarioById);

// Ruta POST para crear un nuevo registro del lenguaje de un usuario, con validación completa de campos
router.post(
  "/",
  camposLenguajeUsuario,
  LenguajeUsuarioController.createLenguajeUsuario
);

// Ruta PUT para actualizar completamente un registro por ID, con validación completa
router.put(
  "/:id",
  camposLenguajeUsuario,
  LenguajeUsuarioController.updateLenguajeUsuario
);

// Ruta PATCH para actualizar parcialmente un registro por ID, permitiendo solo algunos campos
router.patch(
  "/:id",
  parcialesLenguajeUsuario,
  LenguajeUsuarioController.updateLenguajeUsuario
);

// Ruta DELETE para eliminar un registro de LenguajeUsuario por ID
router.delete("/:id", LenguajeUsuarioController.deleteLenguajeUsuario);

// Exporta el enrutador para poder usarlo en otros archivos del proyecto
export default router;
