import CRUD from "../Models/CRUD.js";
import Usuario from "../Models/Usuario.js";

class CiudadService {
  static async getCiudades(table) {
    try {
      const objCRUD = new CRUD();
      const ciudades = await objCRUD.getAll(table, "las ciudades");

      if (ciudades.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay ciudades registradas.",
        };
      return {
        error: false,
        code: 200,
        message: "Ciudades obtenidas correctamente.",
        data: ciudades,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las ciudades.",
      };
    }
  }

  static async getCiudadByID(id) {
    try {
      const objCRUD = new CRUD();
      // Llamamos el método consultar por ID
      const ciudad = await objCRUD.getByID("ciudades", id, "la ciudad");
      // Validamos si no hay producto
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "Ciudad no encontrada",
        };
      }
      // Retornamos el producto obtenido
      return {
        error: false,
        code: 200,
        message: "Ciudad obtenida correctamente",
        data: ciudad,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      };
    }
  }

  static async createCiudad(campos) {
    try {
      // Validamos que el id de la categoría este registrado
      const objCRUD = new CRUD();
      // Consultamos la categoría por ID
      const ciudadCreada = await objCRUD.create(
        "ciudades",
        campos,
        "la ciudad"
      );
      // Validamos si no hay categoría

      return {
        error: false,
        code: 201,
        message: "Ciudad creada correctamente",
        data: ciudadCreada,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al crear la ciudad",
      };
    }
  }

  static async updateCiudad(id, campos) {
    try {
      // Creamos la instancia del modelo producto
      const objCRUD = new CRUD();
      // Llamamos el método actualizar
      const ciudadActualizada = await objCRUD.update(
        "ciudades",
        id,
        campos,
        "la ciudad"
      );
      // Validamos si no se pudo actualizar el producto
      if (ciudadActualizada === null) {
        return {
          error: true,
          code: 400,
          message: "Ciudad no encontrada",
        };
      }
      // Retornamos el producto actualizado
      return {
        error: false,
        code: 200,
        message: "Ciudad actualizada correctamente",
        data: ciudadActualizada,
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al actualizar la ciudad",
      };
    }
  }

  static async deleteCiudad(id) {
    try {
      //Creamos la instancia del modelo Usuario
      const objUsuario = new Usuario();

      const usuariosRelacionados = await objUsuario.getCiudadByIdCiudad(id);

      if (usuariosRelacionados.length > 0) {
        return {
          error: true,
          code: 400,
          message: "No se puede eliminar la ciudad, tiene usuarios asociados",
        };
      }

      // Creamos la instancia del modelo producto
      const objCRUD = new CRUD();
      // Llamamos el método eliminar
      const ciudadEliminada = await objCRUD.delete("ciudades", id, "la ciudad");
      // Validamos si no se pudo eliminar el producto
      if (!ciudadEliminada) {
        return {
          error: true,
          code: 400,
          message: "Ciudad no encontrada",
        };
      }
      // Retornamos el producto eliminado
      return {
        error: false,
        code: 200,
        message: "Ciudad eliminada correctamente",
      };
    } catch (error) {
      // Retornamos un error en caso de excepción
      return {
        error: true,
        code: 500,
        message: "Error al eliminar la ciudad",
      };
    }
  }
}

export default CiudadService;
