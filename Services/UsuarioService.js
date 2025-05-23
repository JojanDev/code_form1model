// Importamos el modelo CRUD para realizar operaciones en la base de datos
import CRUD from "../Models/CRUD.js";

// Definimos la clase UsuarioService para gestionar las operaciones CRUD de los usuarios
class UsuarioService {
  // Método estático para obtener todos los usuarios
  static async getUsuarios(table) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todos los usuarios desde la base de datos
      const usuarios = await objCRUD.getAll(table, "los usuarios");

      // Si no hay usuarios registrados, retornamos un mensaje de error
      if (usuarios.length === 0)
        return {
          error: true,
          code: 404,
          message: "No hay usuarios registrados.",
        };

      // Retornamos los usuarios obtenidos
      return {
        error: false,
        code: 200,
        message: "Usuarios obtenidos correctamente.",
        data: usuarios,
      };
    } catch (error) {
      // Capturamos posibles errores en la ejecución
      return {
        error: true,
        code: 500,
        message: "Error al obtener los usuarios.",
      };
    }
  }

  // Método estático para obtener un usuario por su ID
  static async getUsuarioByID(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Consultamos el usuario por su ID
      const usuario = await objCRUD.getByID("usuarios", id, "el usuario");

      // Si el usuario no se encuentra, retornamos un mensaje de error
      if (usuario.length === 0)
        return {
          error: true,
          code: 404,
          message: "Usuario no encontrado",
        };

      // Retornamos el usuario obtenido
      return {
        error: false,
        code: 200,
        message: "Usuario obtenido correctamente",
        data: usuario,
      };
    } catch (error) {
      return { error: true, code: 500, message: "Error al obtener el usuario" };
    }
  }

  // Método estático para crear un nuevo usuario
  static async createUsuario(campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Obtenemos todos los usuarios existentes para verificar si el usuario o el documento ya existen
      const usuarios = await objCRUD.getAll("usuarios", "los usuarios");

      // Verificamos si el nombre de usuario ya existe
      const usernameExist = usuarios.find(
        ({ usuario }) => usuario == campos.usuario
      );
      const documentoExist = usuarios.find(
        ({ documento }) => documento == campos.documento
      );

      if (usernameExist) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el usuario",
          erros: [
            {
              campo: "usuario",
              message: "El usuario con ese nombre ya existe.",
            },
          ],
        };
      }

      if (documentoExist) {
        return {
          error: true,
          code: 400,
          message: "Error al crear el usuario",
          erros: [
            {
              campo: "documento",
              message: "El usuario con ese documento ya existe.",
            },
          ],
        };
      }

      // Insertamos el nuevo usuario en la base de datos
      const usuarioCreado = await objCRUD.create(
        "usuarios",
        campos,
        "el usuario"
      );

      // Retornamos el usuario creado
      return {
        error: false,
        code: 201,
        message: "Usuario creado correctamente",
        data: usuarioCreado,
      };
    } catch (error) {
      return { error: true, code: 500, message: "Error al crear el usuario" };
    }
  }

  // Método estático para actualizar un usuario por su ID
  static async updateUsuario(id, campos) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Actualizamos el usuario en la base de datos
      const usuarioActualizado = await objCRUD.update(
        "usuarios",
        id,
        campos,
        "el usuario"
      );

      // Si el usuario no se encontró, retornamos un mensaje de error
      if (usuarioActualizado === null)
        return { error: true, code: 400, message: "Usuario no encontrado" };

      // Retornamos el usuario actualizado
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

  // Método estático para eliminar un usuario por su ID
  static async deleteUsuario(id) {
    try {
      const objCRUD = new CRUD(); // Instanciamos el objeto CRUD
      // Eliminamos el usuario en la base de datos
      const usuarioEliminado = await objCRUD.delete(
        "usuarios",
        id,
        "el usuario"
      );

      // Si el usuario no se encuentra, retornamos un mensaje de error
      if (!usuarioEliminado)
        return { error: true, code: 400, message: "Usuario no encontrado" };

      // Retornamos la confirmación de eliminación
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

// Exportamos la clase UsuarioService para su uso en otros módulos
export default UsuarioService;
