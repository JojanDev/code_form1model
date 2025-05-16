import express from "express";
import LenguajeUsuarioController from "../Controller/LenguajeUsuarioController.js";
import {
  camposLenguajeUsuario,
  parcialesLenguajeUsuario,
} from "../Middleware/LenguajeUsuario/index.js";

const router = express.Router();

// router.get("/", GenerosController.getAllCategorias);
router.get("/", LenguajeUsuarioController.getAllLenguajeUsuarios);

router.get("/:id", LenguajeUsuarioController.getLenguajeUsuarioById);

router.post(
  "/",
  camposLenguajeUsuario,
  LenguajeUsuarioController.createLenguajeUsuario
);

router.put(
  "/:id",
  camposLenguajeUsuario,
  LenguajeUsuarioController.updateLenguajeUsuario
);

router.patch(
  "/:id",
  parcialesLenguajeUsuario,
  LenguajeUsuarioController.updateLenguajeUsuario
);

router.delete("/:id", LenguajeUsuarioController.deleteLenguajeUsuario);

export default router;
