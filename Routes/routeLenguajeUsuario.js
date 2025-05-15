import express from "express";
import LenguajeUsuarioController from "../Controller/LenguajeUsuarioController.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", LenguajeUsuarioController.getAllLenguajeUsuarios);

router.get("/:id", LenguajeUsuarioController.getLenguajeUsuarioById);

router.post(
  "/",
  /*validarCategoria,*/ LenguajeUsuarioController.createLenguajeUsuario
);

router.put("/:id", LenguajeUsuarioController.updateLenguajeUsuario);

router.patch("/:id", LenguajeUsuarioController.updateLenguajeUsuario);

router.delete("/:id", LenguajeUsuarioController.deleteLenguajeUsuario);

export default router;
