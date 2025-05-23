import express from "express";
import bodyParser from "body-parser";
// Importa dotenv para poder usar variables de entorno desde un archivo .env
import dotenv from "dotenv";

// Importa CORS para permitir solicitudes desde otros orígenes (Cross-Origin Resource Sharing)
import cors from "cors";

// Importa los diferentes archivos de rutas para modularizar el proyecto
import routeCiudad from "./Routes/routeCiudad.js";
import routeGenero from "./Routes/routeGenero.js";
import routeLenguaje from "./Routes/routeLenguaje.js";
import routeUsuario from "./Routes/routeUsuario.js";
import routeLenguajeUsuario from "./Routes/routeLenguajeUsuario.js";

// Carga las variables de entorno definidas en el archivo .env
dotenv.config();

const app = express();

// Habilita CORS para aceptar peticiones desde cualquier origen
app.use(cors());

app.use(bodyParser.json());

// Permite el procesamiento de datos enviados desde formularios (URL encoded)
app.use(express.urlencoded({ extended: true }));

// Asocia cada grupo de rutas con su respectiva URL base
app.use("/ciudades", routeCiudad);
app.use("/generos", routeGenero);
app.use("/lenguajes", routeLenguaje);
app.use("/usuarios", routeUsuario);
app.use("/lenguajes_usuarios", routeLenguajeUsuario);

// Define el puerto en el que correrá el servidor, con opción de usar una variable de entorno
const port = process.env.PORT || 3000;

// Inicia el servidor y muestra en consola que está funcionando
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
