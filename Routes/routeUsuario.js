// Importa el módulo Express, que se usa para crear rutas y manejar solicitudes HTTP
import express from "express";

// Importa el controlador de usuarios que contiene la lógica de cada operación
import UsuarioController from "../Controller/UsuarioController.js";

// Importa los middlewares de validación: uno para todos los campos, otro para campos parciales
import {
  camposUsuario, // Valida todos los campos requeridos
  parcialesUsuario, // Valida solo los campos enviados (para actualizaciones parciales)
} from "../Middleware/Usuario/index.js";

// Crea un nuevo enrutador de Express para manejar rutas relacionadas con usuarios
const router = express.Router();

// Ruta GET para obtener todos los usuarios
router.get("/", UsuarioController.getAllUsuarios);

// Ruta GET para obtener un usuario específico por su ID
router.get("/:id", UsuarioController.getUsuarioById);

// Ruta POST para crear un nuevo usuario, aplicando primero la validación de campos
router.post("/", camposUsuario, UsuarioController.createUsuario);

// Ruta PUT para actualizar completamente un usuario por ID, con validación completa de campos
router.put("/:id", camposUsuario, UsuarioController.updateUsuario);

// Ruta PATCH para actualizar parcialmente un usuario, permitiendo solo algunos campos
router.patch("/:id", parcialesUsuario, UsuarioController.updateUsuario);

// Ruta DELETE para eliminar un usuario por su ID
router.delete("/:id", UsuarioController.deleteUsuario);

// Exporta este enrutador para que pueda ser utilizado en la aplicación principal
export default router;
