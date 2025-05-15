import express from "express";
import GeneroController from "../Controller/GeneroController.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", GeneroController.getAllGeneros);

router.get("/:id", GeneroController.getGeneroById);

router.post("/", /*validarCategoria,*/ GeneroController.createGenero);

router.put("/:id", GeneroController.updateGenero);

router.patch("/:id", GeneroController.updateGenero);

router.delete("/:id", GeneroController.deleteGenero);

export default router;
