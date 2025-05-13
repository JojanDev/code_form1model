import express from "express";
import GeneroController from "../Controller/GeneroController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);

router.get("/:id", GeneroController.getGeneroByID);

router.post("/", /*validarCategoria,*/ GeneroController.createGenero);

router.put("/:id", GeneroController.updateGenero);

router.patch("/:id", GeneroController.patchGenero);

router.delete("/:id", GeneroController.deleteGenero);

export default router;
