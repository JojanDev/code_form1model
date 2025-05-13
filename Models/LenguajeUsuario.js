import connection from "../Utils/db.js";

class LenguajeUsuario {
  async getByID(id) {
    try {
      const [lenguajeUsuario] = await connection.query(
        "select * from lenguajes_usuarios where id = ?",
        [id]
      );

      if (lenguajeUsuario.length === 0)
        throw new Error("Lenguaje de usuario no encontrado");

      return lenguajeUsuario;
    } catch (error) {
      throw new Error(
        error.message || "Error al obtener el lenguaje del usuario."
      );
    }
  }

  async create(id_usuario, id_lenguaje) {
    try {
      const [result] = await connection.query(
        `insert into lenguajes_usuarios(id_usuario, id_lenguaje) value
        (?, ?)`,
        [id_usuario, id_lenguaje]
      );

      return {
        id: result.insertId,
        id_usuario,
        id_lenguaje,
      };
    } catch (error) {
      throw new Error("Error al registrar el lenguaje del usuario.");
    }
  }

  async update(id, id_usuario, id_lenguaje) {
    try {
      const [result] = await connection.query(
        `update lenguajes_usuarios set id_usuario = ?, id_lenguaje = ? where id = ?;`,
        [id_usuario, id_lenguaje, id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Lenguaje de usuario no encontrado");
      }

      return {
        id,
        id_usuario,
        id_lenguaje,
      };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar el lenguaje del usuario."
      );
    }
  }

  async patch(id, object) {
    try {
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update lenguajes_usuarios set `;
      for (const key in object) {
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0)
        throw new Error("Lenguaje del usuario no encontrado");

      return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message ||
          "Error al actualizar parcialmente el lenguaje del usuario."
      );
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM lenguajes_usuarios WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Lenguaje del usuario no encontrado");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(
        error.message || "Error al eliminar el lenguaje del usuario."
      );
    }
  }
}

export default LenguajeUsuario;
