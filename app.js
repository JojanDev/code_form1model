import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import routeCiudad from "./Routes/routeCiudad.js";
import routeGenero from "./Routes/routeGenero.js";
import routeLenguaje from "./Routes/routeLenguaje.js";
import routeUsuario from "./Routes/routeUsuario.js";
import routeLenguajeUsuario from "./Routes/routeLenguajeUsuario.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/ciudades", routeCiudad);
app.use("/generos", routeGenero);
app.use("/lenguajes", routeLenguaje);
app.use("/usuarios", routeUsuario);
app.use("/lenguajes_usuarios", routeLenguajeUsuario);
// app.use("/productos", routeProductos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
