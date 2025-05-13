import Usuario from "../Models/Usuario.js";

class UsuarioController {
  static getUsuarioByID = async (req, res) => {
    try {
      const { id } = req.params;
      const objUsuario = new Usuario();
      const ciudad = await objUsuario.getByID(id);
      res.status(200).json(ciudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createUsuario = async (req, res) => {
    try {
      const {
        nombre,
        apellido,
        telefono,
        documento,
        usuarioI,
        contrasena,
        id_genero,
        id_ciudad,
      } = req.body;
      const objUsuario = new Usuario();
      const usuario = await objUsuario.create(
        nombre,
        apellido,
        telefono,
        documento,
        usuarioI,
        contrasena,
        id_genero,
        id_ciudad
      );
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        nombre,
        apellido,
        telefono,
        documento,
        usuarioI,
        contrasena,
        id_genero,
        id_ciudad,
      } = req.body;
      const objUsuario = new Usuario();
      const usuario = await objUsuario.update(
        id,
        nombre,
        apellido,
        telefono,
        documento,
        usuarioI,
        contrasena,
        id_genero,
        id_ciudad
      );
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const object = req.body;
      const objUsuario = new Usuario();

      const usuario = await objUsuario.patch(id, object);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const objUsuario = new Usuario();

      const usuario = await objUsuario.delete(id);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default UsuarioController;
