import CRUD from "../Models/CRUD.js";

class LenguajeUsuarioService {
  static async getLenguajeUsuarios(table) {
    try {
      const objCRUD = new CRUD();
      const lenguajeUsuarios = await objCRUD.getAll(
        table,
        "los lenguajes del usuario"
      );

      if (lenguajeUsuarios.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay lenguajes del usuario registrados.",
        };
      return {
        error: false,
        code: 200,
        message: "Lenguajes  del usuario obtenidos correctamente.",
        data: lenguajeUsuarios,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes del usuario.",
      };
    }
  }

  static async getLenguajeUsuarioByID(id) {
    try {
      const objCRUD = new CRUD();
      const lenguajeUsuario = await objCRUD.getByID(
        "lenguajes_usuarios",
        id,
        "el lenguaje del usuario"
      );

      if (lenguajeUsuario.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguaje del usuario no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje del usuario obtenido correctamente",
        data: lenguajeUsuario,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el lenguaje del usuario",
      };
    }
  }

  static async createLenguajeUsuario(campos) {
    try {
      const objCRUD = new CRUD();
      const lenguajeUsuarioCreado = await objCRUD.create(
        "lenguajes_usuarios",
        campos,
        "el lenguaje del usuario"
      );

      return {
        error: false,
        code: 201,
        message: "Lenguaje del usuario creado correctamente",
        data: lenguajeUsuarioCreado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el lenguaje del usuario",
      };
    }
  }

  static async updateLenguajeUsuario(id, campos) {
    try {
      const objCRUD = new CRUD();
      const lenguajeUsuarioActualizado = await objCRUD.update(
        "lenguajes_usuarios",
        id,
        campos,
        "el lenguaje del usuario"
      );

      if (lenguajeUsuarioActualizado === null) {
        return {
          error: true,
          code: 400,
          message: "Lenguaje del usuario no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje del usuario actualizado correctamente",
        data: lenguajeUsuarioActualizado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al actualizar el lenguaje del usuario",
      };
    }
  }

  static async deleteLenguajeUsuario(id) {
    try {
      const objCRUD = new CRUD();
      const lenguajeUsuarioEliminado = await objCRUD.delete(
        "lenguajes_usuarios",
        id,
        "el lenguaje del usuario"
      );

      if (!lenguajeUsuarioEliminado) {
        return {
          error: true,
          code: 400,
          message: "Lenguaje del usuario no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje del usuario eliminado correctamente",
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al eliminar el lenguaje del usuario",
      };
    }
  }
}

export default LenguajeUsuarioService;
