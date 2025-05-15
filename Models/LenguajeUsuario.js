import connection from "../Utils/db.js";

class LenguajeUsuario {
  async getByIdLenguaje(id_lenguaje) {
    try {
      const [usuariosLenguaje] = await connection.query(
        "select * from lenguajes_usuarios where id_lenguaje = ?",
        [id_lenguaje]
      );

      return usuariosLenguaje;
    } catch (error) {
      throw new Error(
        error.message || "Error al obtener los usuarios del lenguaje."
      );
    }
  }
}

export default LenguajeUsuario;
