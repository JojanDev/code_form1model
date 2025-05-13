import LenguajeUsuario from "../Models/LenguajeUsuario.js";

class LenguajeUsuarioController {
  static getLenguajeUsuarioByID = async (req, res) => {
    try {
      const { id } = req.params;
      const objLenguajeUsuario = new LenguajeUsuario();
      const lenguajeUsuario = await objLenguajeUsuario.getByID(id);
      res.status(200).json(lenguajeUsuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createLenguajeUsuario = async (req, res) => {
    try {
      const { id_usuario, id_lenguaje } = req.body;
      const objLenguajeUsuario = new LenguajeUsuario();
      const lenguajeUsuario = await objLenguajeUsuario.create(
        id_usuario,
        id_lenguaje
      );
      res.status(201).json(lenguajeUsuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const { id_usuario, id_lenguaje } = req.body;
      const objLenguajeUsuario = new LenguajeUsuario();
      const lenguajeUsuario = await objLenguajeUsuario.update(
        id,
        id_usuario,
        id_lenguaje
      );
      res.status(201).json(lenguajeUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const object = req.body;
      const objLenguajeUsuario = new LenguajeUsuario();

      const lenguajeUsuario = await objLenguajeUsuario.patch(id, object);
      res.status(201).json(lenguajeUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteLenguajeUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const objLenguajeUsuario = new LenguajeUsuario();

      const lenguajeUsuario = await objLenguajeUsuario.delete(id);
      res.status(201).json(lenguajeUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default LenguajeUsuarioController;
