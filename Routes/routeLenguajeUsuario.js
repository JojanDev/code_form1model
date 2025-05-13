import express from "express";
import LenguajeUsuarioController from "../Controller/LenguajeUsuarioController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

router.get("/:id", LenguajeUsuarioController.getLenguajeUsuarioByID);

router.post("/", LenguajeUsuarioController.createLenguajeUsuario);

router.put("/:id", LenguajeUsuarioController.updateLenguajeUsuario);

router.patch("/:id", LenguajeUsuarioController.patchLenguajeUsuario);

router.delete("/:id", LenguajeUsuarioController.deleteLenguajeUsuario);

export default router;
