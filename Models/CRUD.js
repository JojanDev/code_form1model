import connection from "../Utils/db.js";

class CRUD {
  async getAll(tabla, message) {
    try {
      const [rows] = await connection.query(`SELECT * FROM ${tabla};`);
      return rows;
    } catch (error) {
      throw new Error(`Error al obtener ${message}`);
    }
  }

  async getByID(tabla, id, message) {
    try {
      const [rows] = await connection.query(
        `select * from ${tabla} where id = ?`,
        [id]
      );

      if (rows.length === 0) return [];

      return rows;
    } catch (error) {
      throw new Error(`Error al obtener ${message}`);
    }
  }

  async create(tabla, campos, message) {
    try {
      let query = `INSERT INTO ${tabla} (`;
      let values = "VALUES (";
      let params = [];
      // params.push(tabla);

      // Construimos dinámicamente la consulta de actualización solo con los campos proporcionados
      for (const [key, value] of Object.entries(campos)) {
        query += `${key}, `;
        values += `?,`;
        params.push(value);
      }

      // Eliminamos la última coma y espacio de la consulta
      values = values.slice(0, -1) + ")";
      query = `${query.slice(0, -2)}) ${values};`;

      const [result] = await connection.query(query, params);

      return {
        id: result.insertId,
        ...campos,
      };
    } catch (error) {
      throw new Error(`Error al crear ${message}`);
    }
  }

  async update(tabla, id, campos, message) {
    try {
      let query = `UPDATE ${tabla} SET `;
      let params = [];

      // Construimos dinámicamente la consulta de actualización solo con los campos proporcionados
      for (const [key, value] of Object.entries(campos)) {
        query += `${key} = ?, `;
        params.push(value);
      }

      // Eliminamos la última coma y espacio de la consulta
      query = `${query.slice(0, -2)} WHERE id = ?;`;
      params.push(id);

      const [result] = await connection.query(query, params);

      return result.affectedRows > 0 ? { id: parseInt(id), ...campos } : null;
    } catch (error) {
      throw new Error(`Error al crear ${message}`);
    }
  }

  async delete(tabla, id, message) {
    try {
      // Procedemos con la eliminación si no está relacionada
      const [result] = await connection.query(
        `DELETE FROM ${tabla} WHERE id = ?`,
        [id]
      );

      if (result.affectedRows === 0) return false;
      return true;
    } catch (error) {
      throw new Error(`Error al eliminar ${message}`);
    }
  }
}

export default CRUD;
