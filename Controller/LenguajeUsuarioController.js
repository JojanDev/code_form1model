import { ResponseProvider } from "../Providers/ResponseProvider.js";
import LenguajeUsuarioService from "../Services/LenguajeUsuarioService.js";

class LenguajeUsuarioController {
  static getAllLenguajeUsuarios = async (req, res) => {
    try {
      const response = await LenguajeUsuarioService.getLenguajeUsuarios(
        "lenguajes_usuarios"
      );

      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static getLenguajeUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para obtener el producto por su ID
      const response = await LenguajeUsuarioService.getLenguajeUsuarioByID(id);
      // Validamos si no hay producto
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(res, response.message, response.code);
      }
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  static createLenguajeUsuario = async (req, res) => {
    try {
      const object = req.body;
      const response = await LenguajeUsuarioService.createLenguajeUsuario(
        object
      );

      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      return ResponseProvider.error(
        res,
        "Error interno al crear la ciudad",
        500
      );
    }
  };

  // Actualizar un producto
  static updateLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      // Creamos una instancia de producto
      const response = await LenguajeUsuarioService.updateLenguajeUsuario(
        id,
        campos
      );

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE CIUDAD
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el producto actualizado
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(
        res,
        "Error interno al actualizar la ciudad",
        500
      );
    }
  };

  static deleteLenguajeUsuario = async (req, res) => {
    // try {
    //   const { id } = req.params;
    //   const objCiudad = new Ciudad();

    //   const ciudad = await objCiudad.delete(id);
    //   res.status(201).json(ciudad);
    // } catch (error) {
    //   res.status(400).json({ error: error.message });
    // }

    try {
      const { id } = req.params;
      // Creamos una instancia de producto
      const response = await LenguajeUsuarioService.deleteLenguajeUsuario(id);

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE CIUDAD
      if (response.error)
        return ResponseProvider.error(res, response.message, response.code);

      // Retornamos el producto actualizado
      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      return ResponseProvider.error(
        res,
        "Error interno al actualizar la ciudad",
        500
      );
    }
  };
}

export default LenguajeUsuarioController;
