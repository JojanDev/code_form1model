import { ResponseProvider } from "../Providers/ResponseProvider.js";
import LenguajeService from "../Services/LenguajeService.js";

class LenguajeController {
  static getAllLenguajes = async (req, res) => {
    try {
      const response = await LenguajeService.getLenguajes("lenguajes");

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

  static getLenguajeById = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para obtener el producto por su ID
      const response = await LenguajeService.getLenguajeByID(id);
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

  static createLenguaje = async (req, res) => {
    try {
      const object = req.body;
      const response = await LenguajeService.createLenguaje(object);

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
        "Error interno al crear el lenguaje",
        500
      );
    }
  };

  // Actualizar un producto
  static updateLenguaje = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      // Creamos una instancia de producto
      const response = await LenguajeService.updateLenguaje(id, campos);

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE LENGUAJE
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
        "Error interno al actualizar el lenguaje",
        500
      );
    }
  };

  static deleteLenguaje = async (req, res) => {
    // try {
    //   const { id } = req.params;
    //   const objLenguaje = new Lenguaje();

    //   const lenguaje = await objLenguaje.delete(id);
    //   res.status(201).json(lenguaje);
    // } catch (error) {
    //   res.status(400).json({ error: error.message });
    // }

    try {
      const { id } = req.params;
      // Creamos una instancia de producto
      const response = await LenguajeService.deleteLenguaje(id);

      // Validamos si no se pudo actualizar el producto

      //ESTABA HACIENDO EL PUT DE LENGUAJE
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
        "Error interno al actualizar el lenguaje",
        500
      );
    }
  };
}

export default LenguajeController;
