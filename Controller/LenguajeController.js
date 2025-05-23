// Importamos el ResponseProvider para estructurar las respuestas
import { ResponseProvider } from "../Providers/ResponseProvider.js";

// Importamos el servicio LenguajeService.
import LenguajeService from "../Services/LenguajeService.js";

// Definimos la clase LenguajeController, encargada de manejar las solicitudes relacionadas con lenguajes
class LenguajeController {  
  // Método estático para obtener todos los lenguajes
  static getAllLenguajes = async (req, res) => {
    try {
      // Llamamos al servicio para obtener la lista de lenguajes
      const response = await LenguajeService.getLenguajes("lenguajes");

      // Validamos si hubo un error al obtener los datos
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Si todo está bien, enviamos la respuesta con los datos obtenidos
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejamos errores inesperados en el servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para obtener un lenguaje por su ID
  static getLenguajeById = async (req, res) => {
    const { id } = req.params; // Extraemos el ID del lenguaje desde los parámetros de la URL
    try {
      // Llamamos al servicio LenguajeService para obtener un lenguaje por su ID
      const response = await LenguajeService.getLenguajeByID(id);

      // Validamos si hubo un error en la consulta
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje solicitado
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para crear un nuevo lenguaje
  static createLenguaje = async (req, res) => {
    try {
      const object = req.body; // Extraemos los datos del lenguaje enviados en la solicitud
      const response = await LenguajeService.createLenguaje(object);

      // Verificamos si hubo error creando el lenguaje
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje creado
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al crear el lenguaje", 500);
    }
  };

  // Método estático para actualizar un lenguaje por su ID
  static updateLenguaje = async (req, res) => {
    try {
      const { id } = req.params; // Extraemos el ID del lenguaje desde los parámetros de la URL
      const campos = req.body; // Extraemos los datos a actualizar desde el cuerpo de la solicitud

      // Llamamos al servicio para actualizar el lenguaje
      const response = await LenguajeService.updateLenguaje(id, campos);

      // Verificamos si hubo error en la actualización
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje actualizado
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al actualizar el lenguaje", 500);
    }
  };

  // Método estático para eliminar un lenguaje por su ID
  static deleteLenguaje = async (req, res) => {
    try {
      const { id } = req.params; // Extraemos el ID del lenguaje desde los parámetros de la URL
      const response = await LenguajeService.deleteLenguaje(id); // Llamamos al servicio para eliminar el lenguaje

      // Verificamos si hubo error en la eliminación
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos la respuesta de eliminación exitosa
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al eliminar el lenguaje", 500);
    }
  };
}

// Exportamos la clase LenguajeController para su uso en otros módulos
export default LenguajeController;
