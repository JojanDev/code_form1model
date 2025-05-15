import CRUD from "../Models/CRUD.js";

class UsuarioService {
  static async getUsuarios(table) {
    try {
      const objCRUD = new CRUD();
      const usuarios = await objCRUD.getAll(table, "los usuarios");

      if (usuarios.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay usuarios registrados.",
        };
      return {
        error: false,
        code: 200,
        message: "Usuarios obtenidos correctamente.",
        data: usuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los usuarios.",
      };
    }
  }

  static async getUsuarioByID(id) {
    try {
      const objCRUD = new CRUD();
      const usuario = await objCRUD.getByID("usuarios", id, "el usuario");
      if (usuario.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuario obtenido correctamente",
        data: usuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el usuario",
      };
    }
  }

  static async createUsuario(campos) {
    try {
      const objCRUD = new CRUD();
      const usuarioCreado = await objCRUD.create(
        "usuarios",
        campos,
        "el usuario"
      );
      return {
        error: false,
        code: 201,
        message: "Usuario creado correctamente",
        data: usuarioCreado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el usuario",
      };
    }
  }

  static async updateUsuario(id, campos) {
    try {
      const objCRUD = new CRUD();
      const usuarioActualizado = await objCRUD.update(
        "usuarios",
        id,
        campos,
        "el usuario"
      );
      if (usuarioActualizado === null) {
        return {
          error: true,
          code: 400,
          message: "Usuario no encontrado",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuario actualizado correctamente",
        data: usuarioActualizado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al actualizar el usuario",
      };
    }
  }

  static async deleteUsuario(id) {
    try {
      const objCRUD = new CRUD();
      const usuarioEliminado = await objCRUD.delete(
        "usuarios",
        id,
        "el usuario"
      );
      if (!usuarioEliminado) {
        return {
          error: true,
          code: 400,
          message: "Usuario no encontrado",
        };
      }
      return {
        error: false,
        code: 200,
        message: "Usuario eliminado correctamente",
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al eliminar el usuario",
      };
    }
  }
}

export default UsuarioService;
