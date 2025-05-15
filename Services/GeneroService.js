import CRUD from "../Models/CRUD.js";
import Usuario from "../Models/Usuario.js";

class GeneroService {
  static async getGeneros(table) {
    try {
      const objCRUD = new CRUD();
      const generos = await objCRUD.getAll(table, "los géneros");

      if (generos.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay géneros registrados.",
        };
      return {
        error: false,
        code: 200,
        message: "Géneros obtenidos correctamente.",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener los géneros.",
      };
    }
  }

  static async getGeneroByID(id) {
    try {
      const objCRUD = new CRUD();
      // Llamamos el método consultar por ID
      const genero = await objCRUD.getByID("generos", id, "el género");
      // Validamos si no hay producto
      if (genero.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Género no encontrado",
        };
      }
      // Retornamos el producto obtenido
      return {
        error: false,
        code: 200,
        message: "Género obtenido correctamente",
        data: genero,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al obtener el género",
      };
    }
  }

  static async createGenero(campos) {
    try {
      // Validamos que el id de la categoría este registrado
      const objCRUD = new CRUD();
      // Consultamos la categoría por ID
      const generoCreado = await objCRUD.create("generos", campos, "el género");
      // Validamos si no hay categoría

      return {
        error: false,
        code: 201,
        message: "Género creado correctamente",
        data: generoCreado,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al crear el género",
      };
    }
  }

  static async updateGenero(id, campos) {
    try {
      // Creamos la instancia del modelo producto
      const objCRUD = new CRUD();
      // Llamamos el método actualizar
      const generoActualizado = await objCRUD.update(
        "generos",
        id,
        campos,
        "el género"
      );
      // Validamos si no se pudo actualizar el producto
      if (generoActualizado === null) {
        return {
          error: true,
          code: 400,
          message: "Género no encontrado",
        };
      }
      // Retornamos el producto actualizado
      return {
        error: false,
        code: 200,
        message: "Género actualizado correctamente",
        data: generoActualizado,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al actualizar el género",
      };
    }
  }

  static async deleteGenero(id) {
    try {
      //Creamos la instancia del modelo Usuario
      const objUsuario = new Usuario();

      const usuariosRelacionados = await objUsuario.getGeneroByIdGenero(id);

      if (usuariosRelacionados.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar el genero, tiene usuarios asociados",
        };
      }

      // Creamos la instancia del modelo producto
      const objCRUD = new CRUD();
      // Llamamos el método eliminar
      const generoEliminado = await objCRUD.delete("generos", id, "el género");
      // Validamos si no se pudo eliminar el producto
      if (!generoEliminado) {
        return {
          error: true,
          code: 400,
          message: "Género no encontrado",
        };
      }
      // Retornamos el producto eliminado
      return {
        error: false,
        code: 200,
        message: "Género eliminado correctamente",
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al eliminar el género",
      };
    }
  }
}

export default GeneroService;
