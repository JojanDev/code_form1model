// Importamos el modelo CRUD para realizar operaciones en la base de datos
import CRUD from "../Models/CRUD.js";

// Importamos el modelo Usuario para verificar relaciones antes de eliminar una ciudad
import Usuario from "../Models/Usuario.js";

// Definimos la clase CiudadService que gestiona las operaciones CRUD relacionadas con ciudades
class CiudadService {  

  // Método estático para obtener todas las ciudades
  static async getCiudades(table) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todas las ciudades de la base de datos
      const ciudades = await objCRUD.getAll(table, "las ciudades");

      // Si no hay ciudades registradas, retornamos un mensaje de error
      if (ciudades.length === 0)
        return { error: true, code: 404, message: "No hay ciudades registradas." };

      // Retornamos las ciudades obtenidas
      return { error: false, code: 200, message: "Ciudades obtenidas correctamente.", data: ciudades };
    } catch (error) {
      // Capturamos posibles errores en la ejecución
      return { error: true, code: 500, message: "Error al obtener las ciudades." };
    }
  }

  // Método estático para obtener una ciudad por su ID
  static async getCiudadByID(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Consultamos la ciudad por su ID
      const ciudad = await objCRUD.getByID("ciudades", id, "la ciudad");

      // Si la ciudad no se encuentra, retornamos un mensaje de error
      if (ciudad.length === 0)
        return { error: true, code: 404, message: "Ciudad no encontrada" };

      // Retornamos la ciudad obtenida
      return { error: false, code: 200, message: "Ciudad obtenida correctamente", data: ciudad };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener la ciudad" };
    }
  }

  // Método estático para crear una nueva ciudad
  static async createCiudad(campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Insertamos la nueva ciudad en la base de datos
      const ciudadCreada = await objCRUD.create("ciudades", campos, "la ciudad");

      // Retornamos la ciudad creada
      return { error: false, code: 201, message: "Ciudad creada correctamente", data: ciudadCreada };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear la ciudad" };
    }
  }

  // Método estático para actualizar una ciudad por su ID
  static async updateCiudad(id, campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Actualizamos la ciudad en la base de datos
      const ciudadActualizada = await objCRUD.update("ciudades", id, campos, "la ciudad");

      // Si la ciudad no se encontró, retornamos un mensaje de error
      if (ciudadActualizada === null)
        return { error: true, code: 400, message: "Ciudad no encontrada" };

      // Retornamos la ciudad actualizada
      return { error: false, code: 200, message: "Ciudad actualizada correctamente", data: ciudadActualizada };
    } catch (error) {
      return { error: true, code: 500, message: "Error al actualizar la ciudad" };
    }
  }

  // Método estático para eliminar una ciudad por su ID
  static async deleteCiudad(id) {
    try {
      const objUsuario = new Usuario(); // Instanciamos el objeto Usuario

      // Verificamos si hay usuarios relacionados con la ciudad antes de eliminarla
      const usuariosRelacionados = await objUsuario.getCiudadByIdCiudad(id);
      if (usuariosRelacionados.length > 0) {
        return { error: true, code: 400, message: "No se puede eliminar la ciudad, tiene usuarios asociados" };
      }

      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Eliminamos la ciudad en la base de datos
      const ciudadEliminada = await objCRUD.delete("ciudades", id, "la ciudad");

      // Si la ciudad no se encuentra, retornamos un mensaje de error
      if (!ciudadEliminada) {
        return { error: true, code: 400, message: "Ciudad no encontrada" };
      }

      // Retornamos la confirmación de eliminación
      return { error: false, code: 200, message: "Ciudad eliminada correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al eliminar la ciudad" };
    }
  }
}

// Exportamos la clase CiudadService para su uso en otros módulos
export default CiudadService;
