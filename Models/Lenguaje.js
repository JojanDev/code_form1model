import connection from "../Utils/db.js";

class Lenguaje {
  async getByID(id) {
    try {
      const [lenguaje] = await connection.query(
        "select * from lenguajes where id = ?",
        [id]
      );

      if (lenguaje.length === 0) throw new Error("Lenguaje no encontrado");

      return lenguaje;
    } catch (error) {
      throw new Error(error.message || "Error al obtener el lenguaje.");
    }
  }

  async create(nombre) {
    try {
      const [result] = await connection.query(
        `insert into lenguajes(nombre) value
        (?)`,
        [nombre]
      );

      return {
        id: result.insertId,
        nombre,
      };
    } catch (error) {
      throw new Error("Error al crear el lenguaje.");
    }
  }

  async update(id, nombre) {
    try {
      const [result] = await connection.query(
        `update lenguajes set nombre = ? where id = ?;`,
        [nombre, id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Lenguaje no encontrada");
      }

      return {
        id,
        nombre,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar el lenguaje.");
    }
  }

  async patch(id, object) {
    try {
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update lenguajes set `;
      for (const key in object) {
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Lenguaje no encontrado");

      return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente el lenguaje."
      );
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM lenguajes WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Lenguaje no encontrado");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(error.message || "Error al eliminar el lenguaje.");
    }
  }
}

export default Lenguaje;
