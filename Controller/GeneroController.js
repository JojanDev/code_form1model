import { ResponseProvider } from "../Providers/ResponseProvider.js";
import GeneroService from "../Services/GeneroService.js";

class GeneroController {
  static getAllGeneros = async (req, res) => {
    try {
      const response = await GeneroService.getGeneros("generos");

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

  static getGeneroById = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para obtener el producto por su ID
      const response = await GeneroService.getGeneroByID(id);
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

  static createGenero = async (req, res) => {
    try {
      const object = req.body;
      const response = await GeneroService.createGenero(object);

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
        "Error interno al crear el género",
        500
      );
    }
  };

  // Actualizar un producto
  static updateGenero = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      // Creamos una instancia de producto
      const response = await GeneroService.updateGenero(id, campos);

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE GÉNERO
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
        "Error interno al actualizar el género",
        500
      );
    }
  };

  static deleteGenero = async (req, res) => {
    try {
      const { id } = req.params;
      // Creamos una instancia de producto
      const response = await GeneroService.deleteGenero(id);

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE GÉNERO
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
        "Error interno al actualizar el género",
        500
      );
    }
  };
}

export default GeneroController;
