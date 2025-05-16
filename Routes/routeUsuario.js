import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";
import {
  camposUsuario,
  parcialesUsuario,
} from "../Middleware/Usuario/index.js";
const router = express.Router();

router.get("/", UsuarioController.getAllUsuarios);

router.get("/:id", UsuarioController.getUsuarioById);

router.post("/", camposUsuario, UsuarioController.createUsuario);

router.put("/:id", camposUsuario, UsuarioController.updateUsuario);

router.patch("/:id", parcialesUsuario, UsuarioController.updateUsuario);

router.delete("/:id", UsuarioController.deleteUsuario);

export default router;
