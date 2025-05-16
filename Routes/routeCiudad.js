import express from "express";
import CiudadController from "../Controller/CiudadController.js";
import { camposCiudad } from "../Middleware/Ciudad/index.js";

const router = express.Router();

// router.get("/", CiudadesController.getAllCategorias);
router.get("/", CiudadController.getAllCiudades);

router.get("/:id", CiudadController.getCiudadById);

router.post("/", camposCiudad, CiudadController.createCiudad);

router.put("/:id", camposCiudad, CiudadController.updateCiudad);

router.patch("/:id", camposCiudad, CiudadController.updateCiudad);

router.delete("/:id", CiudadController.deleteCiudad);

export default router;
