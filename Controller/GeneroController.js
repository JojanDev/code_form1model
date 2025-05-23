// Importamos el ResponseProvider, que maneja la estructura de las respuestas para las solicitudes
import { ResponseProvider } from "../Providers/ResponseProvider.js";

// Importamos el servicio GeneroService, encargado de gestionar la información sobre géneros
import GeneroService from "../Services/GeneroService.js";

// Definimos la clase GeneroController que manejará las solicitudes relacionadas con los géneros
class GeneroController {  
  // Método estático para obtener todos los géneros
  static getAllGeneros = async (req, res) => {  
    try {
      // Llamamos al servicio GeneroService para obtener los datos de los géneros
      const response = await GeneroService.getGeneros("generos");

      // Validamos si ocurrió un error en la respuesta del servicio
      if (response.error) 
        // Si hay un error, enviamos una respuesta de error con el mensaje y código correspondiente
        return ResponseProvider.error(res, response.message, response.code);

      // Si todo está bien, enviamos una respuesta de éxito con los datos obtenidos
      return ResponseProvider.success(
        res,         // Objeto de respuesta HTTP
        response.data, // Datos obtenidos del servicio
        response.message, // Mensaje informativo
        response.code // Código de estado HTTP
      );
    } catch (error) {
      // Capturamos errores inesperados y enviamos una respuesta genérica de error interno del servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para obtener un género por su ID
  static getGeneroById = async (req, res) => {
    // Extraemos el ID desde los parámetros de la URL
    const { id } = req.params;
    try {
      // Llamamos al servicio GeneroService para obtener los datos del género con el ID proporcionado
      const response = await GeneroService.getGeneroByID(id);

      // Validamos si ocurrió un error en la respuesta del servicio
      if (response.error) {
        // Si hay un error, enviamos una respuesta de error
        return ResponseProvider.error(res, response.message, response.code);
      }

      // Si todo está bien, enviamos una respuesta de éxito con los datos obtenidos
      return ResponseProvider.success(
        res,      
        response.data,  
        response.message, 
        response.code   
      );
    } catch (error) {
      // Capturamos errores inesperados y enviamos una respuesta genérica de error interno del servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };


  // Método estático para crear un nuevo género
  static createGenero = async (req, res) => {
    try {
      // Extraemos el ID desde los parámetros de la URL
      const object = req.body;

      // Llamamos al servicio GeneroService para crear el género con los datos recibidos
      const response = await GeneroService.createGenero(object);

      // Validamos si ocurrió un error durante la creación
      if (response.error) 
        // Si hay un error, enviamos una respuesta de error
        return ResponseProvider.error(res, response.message, response.code);

      // Si todo está bien, enviamos una respuesta de éxito con los datos del nuevo género
      return ResponseProvider.success(
        res,          
        response.data, 
        response.message, 
        response.code  
      );
    } catch (error) {
      // Capturamos errores inesperados y enviamos una respuesta de error interno del servidor
      return ResponseProvider.error(
        res,
        "Error interno al crear el género", 
        500 
      );
    }
  };


  // Método estático para actualizar un género
  static updateGenero = async (req, res) => {
    try {
      // Extraemos el ID del género desde los parámetros de la URL
      const { id } = req.params;

      // Extraemos los campos enviados en el cuerpo de la solicitud
      const campos = req.body;

      // Llamamos al servicio GeneroService para actualizar el género con el ID y los nuevos datos
      const response = await GeneroService.updateGenero(id, campos);

      // Validamos si ocurrió un error en el servicio durante la actualización
      if (response.error) 
        // Si hay error, enviamos una respuesta con el mensaje y código correspondiente
        return ResponseProvider.error(res, response.message, response.code);

      // Si la actualización fue exitosa, retornamos el género actualizado con los nuevos datos
      return ResponseProvider.success(
        res,
        response.data,
        response.message, 
        response.code 
      );
    } catch (error) {
      // Capturamos errores inesperados y enviamos una respuesta de error interno del servidor
      return ResponseProvider.error(
        res,
        "Error interno al actualizar el género",
        500 
      );
    }
  };


  // Método estático para eliminar un género por su ID
  static deleteGenero = async (req, res) => {
    try {
      // Extraemos el ID del género desde los parámetros de la URL
      const { id } = req.params;

      // Llamamos al servicio GeneroService para eliminar el género con el ID obtenido
      const response = await GeneroService.deleteGenero(id);

      // Validamos si ocurrió un error durante la eliminación
      if (response.error) 
        // Si hay error, enviamos una respuesta con el mensaje y código
        return ResponseProvider.error(res, response.message, response.code);

      // Si la eliminación fue exitosa, retornamos una respuesta de éxito
      return ResponseProvider.success(
        res,          
        response.data,
        response.message,
        response.code 
      );
    } catch (error) {
      // Capturamos errores inesperados y enviamos una respuesta de error interno del servidor
      return ResponseProvider.error(
        res,
        "Error interno al eliminar el género",
        500
      );
    }
  };

}

export default GeneroController;
