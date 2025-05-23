// Importa la conexión a la base de datos desde el archivo de utilidades
import connection from "../Utils/db.js";

class LenguajeUsuario {
  //Metodo para obtener los lenguajes de usuarios que coincidad con el ID del lenguaje
  async getByIdLenguaje(id_lenguaje) {
    try {
      // Ejecuta una consulta SQL para obtener todos los registros de 'lenguajes_usuarios' que coincidan con el id_lenguaje
      const [usuariosLenguaje] = await connection.query(
        "select * from lenguajes_usuarios where id_lenguaje = ?",
        [id_lenguaje]
      );
      //Retornamos la respuesta al servicio
      return usuariosLenguaje;
    } catch (error) {
      // Lanza un error personalizado si la operación falla
      throw new Error("Error al obtener los usuarios del lenguaje.");
    }
  }
}
// Exporta la clase LenguajeUsuario para que pueda ser utilizada en otros módulos
export default LenguajeUsuario;
