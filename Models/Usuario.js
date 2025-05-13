import connection from "../Utils/db.js";

class Usuario {
  async getByID(id) {
    try {
      const [usuario] = await connection.query(
        "select * from usuarios where id = ?",
        [id]
      );

      if (usuario.length === 0) throw new Error("Usuario no encontrado");

      return usuario;
    } catch (error) {
      throw new Error(error.message || "Error al obtener el usuario.");
    }
  }

  async create(
    nombre,
    apellido,
    telefono,
    documento,
    usuario,
    contrasena,
    id_genero,
    id_ciudad
  ) {
    try {
      const [result] = await connection.query(
        `insert into usuarios(nombre, apellido, telefono, documento, usuario, contrasena, id_genero, id_ciudad) value
        (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          nombre,
          apellido,
          telefono,
          documento,
          usuario,
          contrasena,
          id_genero,
          id_ciudad,
        ]
      );

      return {
        id: result.insertId,
        nombre,
        apellido,
        telefono,
        documento,
        usuario,
        contrasena,
        id_genero,
        id_ciudad,
      };
    } catch (error) {
      throw new Error("Error al crear el usuario.");
    }

    //     CREATE TABLE usuarios (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     nombre VARCHAR(50),
    //     apellido VARCHAR(50),
    //     telefono BIGINT,
    //     documento BIGINT,
    //     usuario VARCHAR(50),
    //     contrasena VARCHAR(50),
    //     id_genero INT,
    //     id_ciudad INT,
    //     FOREIGN KEY (id_genero) REFERENCES generos(id),
    //     FOREIGN KEY (id_ciudad) REFERENCES ciudades(id)
    // );
  }

  async update(
    id,
    nombre,
    apellido,
    telefono,
    documento,
    usuarioI,
    contrasena,
    id_genero,
    id_ciudad
  ) {
    try {
      const [result] = await connection.query(
        `update usuarios set nombre = ?, apellido = ?, telefono = ?, documento = ?, usuario = ?, contrasena = ?, id_genero = ?, id_ciudad = ? where id = ?;`,
        [
          nombre,
          apellido,
          telefono,
          documento,
          usuarioI,
          contrasena,
          id_genero,
          id_ciudad,
          id,
        ]
      );

      if (result.affectedRows === 0) {
        throw new Error("Usuario no encontrado");
      }

      return {
        id,
        nombre,
        apellido,
        telefono,
        documento,
        usuarioI,
        contrasena,
        id_genero,
        id_ciudad,
      };
    } catch (error) {
      throw new Error(error.message || "Error al actualizar el usuario.");
    }
  }

  async patch(id, object) {
    try {
      if (Object.keys(object).length === 0)
        throw new Error("No hay campos a actualizar");

      let sql = `update usuarios set `;
      for (const key in object) {
        sql += `${key} = '${object[key]}' ,`;
      }

      let consulta = sql.slice(0, -1);
      consulta += `where id = ${id};`;

      const [result] = await connection.query(consulta);

      if (result.affectedRows === 0) throw new Error("Usuario no encontrado");

      return { message: "Actualizado parcialmente!!!" };
    } catch (error) {
      throw new Error(
        error.message || "Error al actualizar parcialmente el usuario."
      );
    }
  }

  async delete(id) {
    try {
      const [result] = await connection.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error("Usuario no encontrado");
      }

      return {
        error: "Eliminado correctamente",
      };
    } catch (error) {
      throw new Error(error.message || "Error al eliminar el usuario");
    }
  }
}

export default Usuario;
