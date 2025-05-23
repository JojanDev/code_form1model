// Importamos el modelo CRUD para realizar operaciones en la base de datos
import CRUD from "../Models/CRUD.js";

// Importamos el modelo Usuario para verificar relaciones antes de eliminar un género
import Usuario from "../Models/Usuario.js";

// Definimos la clase GeneroService que gestiona las operaciones CRUD relacionadas con géneros
class GeneroService {  

  // Método estático para obtener todos los géneros
  static async getGeneros(table) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todos los géneros desde la base de datos
      const generos = await objCRUD.getAll(table, "los géneros");

      // Si no hay géneros registrados, retornamos un mensaje de error
      if (generos.length === 0)
        return { error: true, code: 404, message: "No hay géneros registrados." };

      // Retornamos los géneros obtenidos
      return { error: false, code: 200, message: "Géneros obtenidos correctamente.", data: generos };
    } catch (error) {
      // Capturamos posibles errores en la ejecución
      return { error: true, code: 500, message: "Error al obtener los géneros." };
    }
  }

  // Método estático para obtener un género por su ID
  static async getGeneroByID(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Consultamos el género por su ID
      const genero = await objCRUD.getByID("generos", id, "el género");

      // Si el género no se encuentra, retornamos un mensaje de error
      if (genero.length === 0)
        return { error: true, code: 404, message: "Género no encontrado" };

      // Retornamos el género obtenido
      return { error: false, code: 200, message: "Género obtenido correctamente", data: genero };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener el género" };
    }
  }

  // Método estático para crear un nuevo género
  static async createGenero(campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Insertamos el nuevo género en la base de datos
      const generoCreado = await objCRUD.create("generos", campos, "el género");

      // Retornamos el género creado
      return { error: false, code: 201, message: "Género creado correctamente", data: generoCreado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear el género" };
    }
  }

  // Método estático para actualizar un género por su ID
  static async updateGenero(id, campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Actualizamos el género en la base de datos
      const generoActualizado = await objCRUD.update("generos", id, campos, "el género");

      // Si el género no se encontró, retornamos un mensaje de error
      if (generoActualizado === null)
        return { error: true, code: 400, message: "Género no encontrado" };

      // Retornamos el género actualizado
      return { error: false, code: 200, message: "Género actualizado correctamente", data: generoActualizado };
    } catch (error) {
      return { error: true, code: 500, message: "Error al actualizar el género" };
    }
  }

  // Método estático para eliminar un género por su ID
  static async deleteGenero(id) {
    try {
      const objUsuario = new Usuario(); // Instanciamos el objeto Usuario

      // Verificamos si hay usuarios relacionados con el género antes de eliminarlo
      const usuariosRelacionados = await objUsuario.getGeneroByIdGenero(id);
      if (usuariosRelacionados.length > 0) {
        return { error: true, code: 400, message: "No se puede eliminar el género, tiene usuarios asociados" };
      }

      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Eliminamos el género en la base de datos
      const generoEliminado = await objCRUD.delete("generos", id, "el género");

      // Si el género no se encuentra, retornamos un mensaje de error
      if (!generoEliminado) {
        return { error: true, code: 400, message: "Género no encontrado" };
      }

      // Retornamos la confirmación de eliminación
      return { error: false, code: 200, message: "Género eliminado correctamente" };
    } catch (error) {
      return { error: true, code: 500, message: "Error al eliminar el género" };
    }
  }
}

// Exportamos la clase GeneroService para su uso en otros módulos
export default GeneroService;
