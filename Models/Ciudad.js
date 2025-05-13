import connection from "../Utils/db.js";

class Ciudad {

  async getAll() {
    try {
      const [rows] = await connection.query('SELECT * FROM ciudades;')
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las ciudades");
    }
  }

  async getByID(id) {
    try {
      const [rows] = await connection.query(
        "select * from ciudades where id = ?",
        [id]
      );

      if (rows.length === 0)
        return [];

      return rows;
    } catch (error) {
      throw new Error("Error al obtener la ciudad.");
    }
  }

  async create(nombre) {
    try {
      const [result] = await connection.query(
        `insert into ciudades(nombre) value
        (?)`,
        [nombre]
      );

      return {
        id: result.insertId,
        nombre,
      };
    } catch (error) {
      throw new Error("Error al crear la ciudad.");
    }
  }

  async update(id, nombre) {
    try {
      const [result] = await connection.query(
        `update ciudades set nombre = ? where id = ?;`,
        [nombre, id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Ciudad no encontrada");
      }

      return {
        id,
        nombre,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar la ciudad.");
    }
  }

  async patch(id, object) {
    try {
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update ciudades set `;
      for (const key in object) {
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Ciudad no encontrada");

      return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente la ciudad."
      );
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM ciudadES WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Ciudad no encontrada");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(error.message || "Error al eliminar la ciudad");
    }
  }
}

export default Ciudad;
