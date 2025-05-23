// Importa la conexión a la base de datos desde el archivo de utilidades
import connection from "../Utils/db.js";

// Define la clase Usuario que manejará operaciones relacionadas con usuarios
class Usuario {
  // Método asíncrono para obtener registros de usuarios según el id_ciudad
  async getCiudadByIdCiudad(id_ciudad) {
    try {
      // Ejecuta una consulta SQL para obtener el id_ciudad de los usuarios que coincidan con el parámetro
      const [usuario] = await connection.query(
        "select id_ciudad from usuarios where id_ciudad = ?",
        [id_ciudad]
      );

      // Retorna el resultado de la consulta
      return usuario;
    } catch (error) {
      // Si ocurre un error, lanza una nueva excepción con un mensaje personalizado
      throw new Error("Error al obtener la ciudad del usuario.");
    }
  }

  // Método asíncrono para obtener registros de usuarios según el id_genero
  async getGeneroByIdGenero(id_genero) {
    try {
      // Ejecuta una consulta SQL para obtener el id_genero de los usuarios que coincidan con el parámetro
      const [usuario] = await connection.query(
        "select id_genero from usuarios where id_genero = ?",
        [id_genero]
      );

      // Retorna el resultado de la consulta
      return usuario;
    } catch (error) {
      // Lanza error con mensaje personalizado si falla la consulta
      throw new Error("Error al obtener el genero del usuario.");
    }
  }
}

// Exporta la clase Usuario para su uso en otros módulos
export default Usuario;
