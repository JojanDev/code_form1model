import express from "express";
import LenguajeController from "../Controller/LenguajeController.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", LenguajeController.getAllLenguajes);

router.get("/:id", LenguajeController.getLenguajeById);

router.post("/", /*validarCategoria,*/ LenguajeController.createLenguaje);

router.put("/:id", LenguajeController.updateLenguaje);

router.patch("/:id", LenguajeController.updateLenguaje);

router.delete("/:id", LenguajeController.deleteLenguaje);

export default router;
