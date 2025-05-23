// Importamos el ResponseProvider para estructurar las respuestas
import { ResponseProvider } from "../Providers/ResponseProvider.js";

// Importamos el servicio UsuarioService, encargado de gestionar los datos de usuarios
import UsuarioService from "../Services/UsuarioService.js";

// Definimos la clase UsuarioController, encargada de manejar las solicitudes relacionadas con usuarios
class UsuarioController {
  // Método estático para obtener todos los usuarios
  static getAllUsuarios = async (req, res) => {
    try {
      // Llamamos al servicio para obtener la lista de usuarios
      const response = await UsuarioService.getUsuarios("usuarios");

      // Validamos si hubo un error al obtener los datos
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Si todo está bien, enviamos la respuesta con los datos obtenidos
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Manejamos errores inesperados en el servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para obtener un usuario por su ID
  static getUsuarioById = async (req, res) => {
    const { id } = req.params; // Extraemos el ID del usuario desde los parámetros de la URL
    try {
      // Llamamos al servicio UsuarioService para obtener el usuario
      const response = await UsuarioService.getUsuarioByID(id);

      // Validamos si hubo un error en la consulta
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el usuario solicitado
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Método estático para crear un nuevo usuario
  static createUsuario = async (req, res) => {
    try {
      const object = req.body; // Obtenemos los datos del usuario enviados en la solicitud
      const response = await UsuarioService.createUsuario(object);

      // Verificamos si hubo error al crear
      if (response.error)
        return ResponseProvider.error(
          res,
          response.message,
          response.code,
          response.erros
        );

      // Retornamos el usuario recién creado
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(
        res,
        "Error interno al crear el usuario",
        500
      );
    }
  };

  // Método estático para actualizar un usuario por su ID
  static updateUsuario = async (req, res) => {
    try {
      const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la URL
      const campos = req.body; // Obtenemos los datos a actualizar desde el cuerpo de la solicitud

      // Llamamos al servicio para actualizar el usuario
      const response = await UsuarioService.updateUsuario(id, campos);

      // Verificamos si hubo error en la actualización
      if (response.error)
        return ResponseProvider.error(
          res,
          response.message,
          response.code,
          response.erros
        );

      // Retornamos el usuario actualizado
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(
        res,
        "Error interno al actualizar el usuario",
        500
      );
    }
  };

  // Método estático para eliminar un usuario por su ID
  static deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params; // Obtenemos el ID del usuario desde los parámetros de la URL

      // Llamamos al servicio para eliminar el usuario
      const response = await UsuarioService.deleteUsuario(id);

      // Verificamos si hubo error en la eliminación
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos la respuesta de eliminación exitosa
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Manejo de error en caso de falla del servidor
      return ResponseProvider.error(
        res,
        "Error interno al eliminar el usuario",
        500
      );
    }
  };
}

// Exportamos la clase UsuarioController para su uso en otros módulos
export default UsuarioController;
