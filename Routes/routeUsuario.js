import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";
import { validarUsuario } from "../Middleware/validarUsuario.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

router.get("/:id", UsuarioController.getUsuarioByID);

router.post("/", validarUsuario, UsuarioController.createUsuario);

router.put("/:id", validarUsuario, UsuarioController.updateUsuario);

router.patch("/:id", UsuarioController.patchUsuario);

router.delete("/:id", UsuarioController.deleteUsuario);

export default router;
