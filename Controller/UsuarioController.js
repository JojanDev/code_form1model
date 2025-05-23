import { ResponseProvider } from "../Providers/ResponseProvider.js";
import UsuarioService from "../Services/UsuarioService.js";

class UsuarioController {
  static getAllUsuarios = async (req, res) => {
    try {
      const response = await UsuarioService.getUsuarios("usuarios");

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

  static getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await UsuarioService.getUsuarioByID(id);

      if (response.error) {
        return ResponseProvider.error(res, response.message, response.code);
      }

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

  static createUsuario = async (req, res) => {
    try {
      const object = req.body;
      const response = await UsuarioService.createUsuario(object);

      if (response.error)
        return ResponseProvider.error(res, response.message, response.code, response.erros);

      return ResponseProvider.success(
        res,
        response.data,
        response.message,
        response.code
      );
    } catch (error) {
      return ResponseProvider.error(
        res,
        "Error interno al crear el usuario",
        500
      );
    }
  };

  static updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const campos = req.body;

      const response = await UsuarioService.updateUsuario(id, campos);

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
        "Error interno al actualizar el usuario",
        500
      );
    }
  };

  static deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await UsuarioService.deleteUsuario(id);

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
        "Error interno al eliminar el usuario",
        500
      );
    }
  };
}

export default UsuarioController;
