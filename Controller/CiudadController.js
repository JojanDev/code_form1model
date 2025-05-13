import { response } from "express";
import Ciudad from "../Models/Ciudad.js";
import { ResponseProvider } from "../Providers/ResponseProvider.js";
import CiudadService from "../Services/CiudadService.js";
import CRUD from "../Models/CRUD.js";

class CiudadController {
  static getAllCiudades = async (req, res) => {
    try {
      const response = await CiudadService.getCiudades("ciudades");

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

  static getCiudadById = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para obtener el producto por su ID
      const response = await CiudadService.getCiudadByID(id);
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

  static createCiudad = async (req, res) => {
    try {
      const object = req.body;
      const response = await CiudadService.createCiudad(object);

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
  static updateCiudad = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;
      // Creamos una instancia de producto
      const response = await CiudadService.updateCiudad(id, campos);

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

  static deleteCiudad = async (req, res) => {
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
      const response = await CiudadService.deleteCiudad(id);

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

export default CiudadController;
