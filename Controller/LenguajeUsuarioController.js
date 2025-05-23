// Importamos el ResponseProvider para estructurar las respuestas
import { ResponseProvider } from "../Providers/ResponseProvider.js";

// Importamos el servicio LenguajeUsuarioService, encargado de gestionar los datos de lenguajes asociados a usuarios
import LenguajeUsuarioService from "../Services/LenguajeUsuarioService.js";

// Definimos la clase LenguajeUsuarioController, encargada de manejar las solicitudes relacionadas con lenguajes de usuarios
class LenguajeUsuarioController {  
  // Método estático para obtener todos los lenguajes de usuarios
  static getAllLenguajeUsuarios = async (req, res) => {
    try {
      // Llamamos al servicio para obtener la lista de lenguajes de usuarios 
      const response = await LenguajeUsuarioService.getLenguajeUsuarios("lenguajes_usuarios");

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

  // Método estático para obtener un lenguaje de usuario por su ID
  static getLenguajeUsuarioById = async (req, res) => {
    const { id } = req.params; // Extraemos el ID del lenguaje de usuario desde los parámetros de la URL
    try {
      // Llamamos al servicio LenguajeUsuarioService para obtener el lenguaje del usuario
      const response = await LenguajeUsuarioService.getLenguajeUsuarioByID(id);

      // Validamos si hubo un error en la consulta
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para crear un nuevo lenguaje de usuario
  static createLenguajeUsuario = async (req, res) => {
    try {
      const object = req.body; // Obtenemos los datos del lenguaje de usuario enviados en la solicitud
      const response = await LenguajeUsuarioService.createLenguajeUsuario(object);

      // Verificamos si hubo error al crear el lenguaje del usuario
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje creado
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al crear el lenguaje de usuario", 500);
    }
  };

  // Método estático para actualizar un lenguaje de usuario por su ID
  static updateLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params; // Obtenemos el ID del lenguaje de usuario desde los parámetros de la URL
      const campos = req.body; // Obtenemos los datos a actualizar desde el cuerpo de la solicitud

      // Llamamos al servicio para actualizar el lenguaje de usuario
      const response = await LenguajeUsuarioService.updateLenguajeUsuario(id, campos);

      // Verificamos si hubo error en la actualización
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el lenguaje actualizado
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al actualizar el lenguaje de usuario", 500);
    }
  };

  // Método estático para eliminar un lenguaje de usuario por su ID
  static deleteLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params; // Extraemos el ID del lenguaje de usuario desde los parámetros de la URL

      // Llamamos al servicio para eliminar el lenguaje
      const response = await LenguajeUsuarioService.deleteLenguajeUsuario(id);

      // Verificamos si hubo error al eliminar
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos la respuesta de exito
      return ResponseProvider.success(res, response.data, response.message, response.code);
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno al eliminar el lenguaje de usuario", 500);
    }
  };
}

// Exportamos la clase LenguajeUsuarioController para su uso en otros módulos
export default LenguajeUsuarioController;
