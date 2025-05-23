// Importamos el modelo CRUD para realizar operaciones en la base de datos
import CRUD from "../Models/CRUD.js";

// Definimos la clase LenguajeUsuarioService para gestionar las operaciones CRUD de los lenguajes asociados a usuarios
class LenguajeUsuarioService {  

  // Método estático para obtener todos los lenguajes de usuario
  static async getLenguajeUsuarios(table) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todos los lenguajes de usuario desde la base de datos
      const lenguajeUsuarios = await objCRUD.getAll(table, "los lenguajes del usuario");

      // Si no hay lenguajes de usuario registrados, retornamos un mensaje de error
      if (lenguajeUsuarios.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay lenguajes del usuario registrados."
        };

      // Retornamos los lenguajes obtenidos
      return { error: false, code: 200, message: "Lenguajes del usuario obtenidos correctamente.", data: lenguajeUsuarios };
    } catch (error) {
      // Capturamos posibles errores en la ejecución
      return { error: true, code: 500, message: "Error al obtener los lenguajes del usuario." };
    }
  }

  // Método estático para obtener un lenguaje de usuario por su ID
  static async getLenguajeUsuarioByID(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Consultamos el lenguaje de usuario por su ID
      const lenguajeUsuario = await objCRUD.getByID("lenguajes_usuarios", id, "el lenguaje del usuario");

      // Si el lenguaje de usuario no se encuentra, retornamos un mensaje de error
      if (lenguajeUsuario.length === 0)
        return { error: true, code: 404, message: "Lenguaje del usuario no encontrado" };

      // Retornamos el lenguaje obtenido
      return { error: false, code: 200, message: "Lenguaje del usuario obtenido correctamente", data: lenguajeUsuario };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener el lenguaje del usuario" };
    }
  }

  // Método estático para crear un nuevo lenguaje de usuario
  static async createLenguajeUsuario(campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Insertamos el nuevo lenguaje de usuario en la base de datos
      const lenguajeUsuarioCreado = await objCRUD.create("lenguajes_usuarios", campos, "el lenguaje del usuario");

      // Retornamos el lenguaje de usuario creado
      return { error: false, code: 201, message: "Lenguaje del usuario creado correctamente", data: lenguajeUsuarioCreado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear el lenguaje del usuario" };
    }
  }

  // Método estático para actualizar un lenguaje de usuario por su ID
  static async updateLenguajeUsuario(id, campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Actualizamos el lenguaje de usuario
      const lenguajeUsuarioActualizado = await objCRUD.update("lenguajes_usuarios", id, campos, "el lenguaje del usuario");

      // Si el lenguaje de usuario no se encontró, retornamos un mensaje de error
      if (lenguajeUsuarioActualizado === null)
        return { error: true, code: 400, message: "Lenguaje del usuario no encontrado" };

      // Retornamos el lenguaje de usuario actualizado
      return { error: false, code: 200, message: "Lenguaje del usuario actualizado correctamente", data: lenguajeUsuarioActualizado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al actualizar el lenguaje del usuario" };
    }
  }

  // Método estático para eliminar un lenguaje de usuario por su ID
  static async deleteLenguajeUsuario(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Eliminamos el lenguaje de usuario en la base de datos
      const lenguajeUsuarioEliminado = await objCRUD.delete("lenguajes_usuarios", id, "el lenguaje del usuario");

      // Si el lenguaje de usuario no se encuentra, retornamos un mensaje de error
      if (!lenguajeUsuarioEliminado)
        return { error: true, code: 400, message: "Lenguaje del usuario no encontrado" };

      // Retornamos la confirmación de eliminación
      return { error: false, code: 200, message: "Lenguaje del usuario eliminado correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al eliminar el lenguaje del usuario" };
    }
  }
}

// Exportamos la clase LenguajeUsuarioService para su uso en otros módulos
export default LenguajeUsuarioService;
