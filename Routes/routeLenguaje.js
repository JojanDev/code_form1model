import express from "express";
import LenguajeController from "../Controller/LenguajeController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

router.get("/:id", LenguajeController.getLenguajeByID);

router.post("/", /*validarCategoria,*/ LenguajeController.createLenguaje);

router.put("/:id", LenguajeController.updateLenguaje);

router.patch("/:id", LenguajeController.patchLenguaje);

router.delete("/:id", LenguajeController.deleteLenguaje);

export default router;
