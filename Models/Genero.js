import connection from "../Utils/db.js";

class Genero {
  async getByID(id) {
    try {
      const [genero] = await connection.query(
        "select * from generos where id = ?",
        [id]
      );

      if (genero.length === 0) throw new Error("Genero no encontrado");

      return genero;
    } catch (error) {
      throw new Error(error.message || "Error al obtener el genero.");
    }
  }

  async create(nombre) {
    try {
      const [result] = await connection.query(
        `insert into generos(nombre) value
        (?)`,
        [nombre]
      );

      return {
        id: result.insertId,
        nombre,
      };
    } catch (error) {
      throw new Error("Error al crear el genero.");
    }
  }

  async update(id, nombre) {
    try {
      const [result] = await connection.query(
        `update generos set nombre = ? where id = ?;`,
        [nombre, id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Genero no encontrada");
      }

      return {
        id,
        nombre,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar el genero.");
    }
  }

  async patch(id, object) {
    try {
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update generos set `;
      for (const key in object) {
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Genero no encontrado");

      return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente el genero."
      );
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM generos WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Genero no encontrado");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(error.message || "Error al eliminar el genero.");
    }
  }
}

export default Genero;
