import connection from "../Utils/db.js";

class Usuario {
  async getCiudadByIdCiudad(id_ciudad) {
    try {
      const [usuario] = await connection.query(
        "select id_ciudad from usuarios where id_ciudad = ?",
        [id_ciudad]
      );

      return usuario;
    } catch (error) {
      throw new Error(
        error.message || "Error al obtener la ciudad del usuario."
      );
    }
  }

  async getGeneroByIdGenero(id_genero) {
    try {
      const [usuario] = await connection.query(
        "select id_genero from usuarios where id_genero = ?",
        [id_genero]
      );

      return usuario;
    } catch (error) {
      throw new Error(
        error.message || "Error al obtener el genero del usuario."
      );
    }
  }
}

export default Usuario;
