import express from "express";
import bodyParser from "body-parser";
import routeCiudad from "./Routes/routeCiudad.js";
import routeGenero from "./Routes/routeGenero.js";
import routeLenguaje from "./Routes/routeLenguaje.js";
import routeUsuario from "./Routes/routeUsuario.js";
import routeLenguajeUsuario from "./Routes/routeLenguajeUsuario.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use("/ciudades", routeCiudad);
app.use("/genero", routeGenero);
app.use("/lenguaje", routeLenguaje);
app.use("/usuario", routeUsuario);
app.use("/lenguajeUsuario", routeLenguajeUsuario);
// app.use("/productos", routeProductos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
