import Lenguaje from "../Models/Lenguaje.js";

class LenguajeController {
  static getLenguajeByID = async (req, res) => {
    try {
      const { id } = req.params;
      const objLenguaje = new Lenguaje();
      const lenguaje = await objLenguaje.getByID(id);
      res.status(200).json(lenguaje);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createLenguaje = async (req, res) => {
    try {
      const { nombre } = req.body;
      const objLenguaje = new Lenguaje();
      const lenguaje = await objLenguaje.create(nombre);
      res.status(201).json(lenguaje);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateLenguaje = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const objLenguaje = new Lenguaje();
      const lenguaje = await objLenguaje.update(id, nombre);
      res.status(201).json(lenguaje);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchLenguaje = async (req, res) => {
    try {
      const { id } = req.params;
      const object = req.body;
      const objLenguaje = new Lenguaje();

      const lenguaje = await objLenguaje.patch(id, object);
      res.status(201).json(lenguaje);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteLenguaje = async (req, res) => {
    try {
      const { id } = req.params;
      const objLenguaje = new Lenguaje();

      const lenguaje = await objLenguaje.delete(id);
      res.status(201).json(lenguaje);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default LenguajeController;
