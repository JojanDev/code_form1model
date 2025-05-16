import express from "express";
import GeneroController from "../Controller/GeneroController.js";
import { camposGenero } from "../Middleware/Genero/index.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", GeneroController.getAllGeneros);

router.get("/:id", GeneroController.getGeneroById);

router.post("/", camposGenero, GeneroController.createGenero);

router.put("/:id", camposGenero, GeneroController.updateGenero);

router.patch("/:id", camposGenero, GeneroController.updateGenero);

router.delete("/:id", GeneroController.deleteGenero);

export default router;
