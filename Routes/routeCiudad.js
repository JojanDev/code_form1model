import express from "express";
import CiudadController from "../Controller/CiudadController.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);
router.get("/", CiudadController.getAllCiudades);

router.get("/:id", CiudadController.getCiudadById);

router.post("/", /*validarCategoria,*/ CiudadController.createCiudad);

router.put("/:id", CiudadController.updateCiudad);

router.patch("/:id", CiudadController.updateCiudad);

router.delete("/:id", CiudadController.deleteCiudad);

export default router;
