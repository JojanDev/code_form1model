import express from "express";
import LenguajeController from "../Controller/LenguajeController.js";
import { camposLenguaje } from "../Middleware/Lenguaje/index.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", LenguajeController.getAllLenguajes);

router.get("/:id", LenguajeController.getLenguajeById);

router.post("/", camposLenguaje, LenguajeController.createLenguaje);

router.put("/:id", camposLenguaje, LenguajeController.updateLenguaje);

router.patch("/:id", camposLenguaje, LenguajeController.updateLenguaje);

router.delete("/:id", LenguajeController.deleteLenguaje);

export default router;
