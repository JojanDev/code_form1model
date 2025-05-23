// Importamos el modelo CRUD para realizar operaciones en la base de datos
import CRUD from "../Models/CRUD.js";

// Importamos el modelo LenguajeUsuario para verificar relaciones antes de eliminar un lenguaje
import LenguajeUsuario from "../Models/LenguajeUsuario.js";

// Definimos la clase LenguajeService que gestiona las operaciones CRUD relacionadas con lenguajes
class LenguajeService {  

  // Método estático para obtener todos los lenguajes
  static async getLenguajes(table) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todos los lenguajes desde la base de datos
      const lenguajes = await objCRUD.getAll(table, "los lenguajes");

      // Si no hay lenguajes registrados, retornamos un mensaje de error
      if (lenguajes.length === 0)
        return { error: true, code: 404, message: "No hay lenguajes registrados." };

      // Retornamos los lenguajes obtenidos
      return { error: false, code: 200, message: "Lenguajes obtenidos correctamente.", data: lenguajes };
    } catch (error) {
      // Capturamos posibles errores en la ejecución
      return { error: true, code: 500, message: "Error al obtener los lenguajes." };
    }
  }

  // Método estático para obtener un lenguaje por su ID
  static async getLenguajeByID(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Consultamos el lenguaje por su ID
      const lenguaje = await objCRUD.getByID("lenguajes", id, "el lenguaje");

      // Si el lenguaje no se encuentra, retornamos un mensaje de error
      if (lenguaje.length === 0)
        return { error: true, code: 404, message: "Lenguaje no encontrado" };

      // Retornamos el lenguaje obtenido
      return { error: false, code: 200, message: "Lenguaje obtenido correctamente", data: lenguaje };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener el lenguaje" };
    }
  }

  // Método estático para crear un nuevo lenguaje
  static async createLenguaje(campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Insertamos el nuevo lenguaje en la base de datos
      const lenguajeCreado = await objCRUD.create("lenguajes", campos, "el lenguaje");

      // Retornamos el lenguaje creado
      return { error: false, code: 201, message: "Lenguaje creado correctamente", data: lenguajeCreado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear el lenguaje" };
    }
  }

  // Método estático para actualizar un lenguaje por su ID
  static async updateLenguaje(id, campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Actualizamos el lenguaje en la base de datos
      const lenguajeActualizado = await objCRUD.update("lenguajes", id, campos, "el lenguaje");

      // Si el lenguaje no se encontró, retornamos un mensaje de error
      if (lenguajeActualizado === null)
        return { error: true, code: 400, message: "Lenguaje no encontrado" };

      // Retornamos el lenguaje actualizado
      return { error: false, code: 200, message: "Lenguaje actualizado correctamente", data: lenguajeActualizado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al actualizar el lenguaje" };
    }
  }

  // Método estático para eliminar un lenguaje por su ID
  static async deleteLenguaje(id) {
    try {
      const objLenguajeUsuario = new LenguajeUsuario(); // Instanciamos el objeto LenguajeUsuario

      // Verificamos si hay usuarios relacionados con el lenguaje antes de eliminarlo
      const usuariosLenguaje = await objLenguajeUsuario.getByIdLenguaje(id);
      if (usuariosLenguaje.length > 0) {
        return { error: true, code: 400, message: "No se puede eliminar el lenguaje, tiene usuarios asociados" };
      }

      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Eliminamos el lenguaje en la base de datos
      const lenguajeEliminado = await objCRUD.delete("lenguajes", id, "el lenguaje");

      // Si el lenguaje no se encuentra, retornamos un mensaje de error
      if (!lenguajeEliminado) {
        return { error: true, code: 400, message: "Lenguaje no encontrado" };
      }

      // Retornamos la confirmación de eliminación
      return { error: false, code: 200, message: "Lenguaje eliminado correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al eliminar el lenguaje" };
    }
  }
}

// Exportamos la clase LenguajeService para su uso en otros módulos
export default LenguajeService;
