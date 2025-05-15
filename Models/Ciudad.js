import connection from "../Utils/db.js";

class Ciudad {
  async getCiudadesByUsuarioId(id_usuario) {
    try {
      const [rows] = await connection.query("SELECT * FROM ciudades WHERE ;");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las ciudades");
    }
  }
}

export default Ciudad;
