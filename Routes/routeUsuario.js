import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";

const router = express.Router();

router.get("/", UsuarioController.getAllUsuarios);

router.get("/:id", UsuarioController.getUsuarioById);

router.post("/", UsuarioController.createUsuario);

router.put("/:id", UsuarioController.updateUsuario);

router.patch("/:id", UsuarioController.updateUsuario);

router.delete("/:id", UsuarioController.deleteUsuario);

export default router;
