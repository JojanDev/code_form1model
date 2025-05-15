import CRUD from "../Models/CRUD.js";
import LenguajeUsuario from "../Models/LenguajeUsuario.js";

class LenguajeService {
  static async getLenguajes(table) {
    try {
      const objCRUD = new CRUD();
      const lenguajes = await objCRUD.getAll(table, "los lenguajes");

      if (lenguajes.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay lenguajes registrados.",
        };
      return {
        error: false,
        code: 200,
        message: "Lenguajes obtenidos correctamente.",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los lenguajes.",
      };
    }
  }

  static async getLenguajeByID(id) {
    try {
      const objCRUD = new CRUD();
      const lenguaje = await objCRUD.getByID("lenguajes", id, "el lenguaje");

      if (lenguaje.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Lenguaje no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje obtenido correctamente",
        data: lenguaje,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener el lenguaje",
      };
    }
  }

  static async createLenguaje(campos) {
    try {
      const objCRUD = new CRUD();
      const lenguajeCreado = await objCRUD.create(
        "lenguajes",
        campos,
        "el lenguaje"
      );

      return {
        error: false,
        code: 201,
        message: "Lenguaje creado correctamente",
        data: lenguajeCreado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al crear el lenguaje",
      };
    }
  }

  static async updateLenguaje(id, campos) {
    try {
      const objCRUD = new CRUD();
      const lenguajeActualizado = await objCRUD.update(
        "lenguajes",
        id,
        campos,
        "el lenguaje"
      );

      if (lenguajeActualizado === null) {
        return {
          error: true,
          code: 400,
          message: "Lenguaje no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje actualizado correctamente",
        data: lenguajeActualizado,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al actualizar el lenguaje",
      };
    }
  }

  static async deleteLenguaje(id) {
    try {
      const objLenguajeUsuario = new LenguajeUsuario();

      const usuariosLenguaje = await objLenguajeUsuario.getByIdLenguaje(id);

      if (usuariosLenguaje.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar el lenguaje, tiene usuarios asociados",
        };
      }

      const objCRUD = new CRUD();
      const lenguajeEliminado = await objCRUD.delete(
        "lenguajes",
        id,
        "el lenguaje"
      );

      if (!lenguajeEliminado) {
        return {
          error: true,
          code: 400,
          message: "Lenguaje no encontrado",
        };
      }

      return {
        error: false,
        code: 200,
        message: "Lenguaje eliminado correctamente",
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al eliminar el lenguaje",
      };
    }
  }
}

export default LenguajeService;
