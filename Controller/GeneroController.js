import Genero from "../Models/Genero.js";

class GeneroController {
  static getGeneroByID = async (req, res) => {
    try {
      const { id } = req.params;
      const objGenero = new Genero();
      const genero = await objGenero.getByID(id);
      res.status(200).json(genero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createGenero = async (req, res) => {
    try {
      const { nombre } = req.body;
      const objGenero = new Genero();
      const genero = await objGenero.create(nombre);
      res.status(201).json(genero);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static updateGenero = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const objGenero = new Genero();
      const genero = await objGenero.update(id, nombre);
      res.status(201).json(genero);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static patchGenero = async (req, res) => {
    try {
      const { id } = req.params;
      const object = req.body;
      const objGenero = new Genero();

      const genero = await objGenero.patch(id, object);
      res.status(201).json(genero);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  static deleteGenero = async (req, res) => {
    try {
      const { id } = req.params;
      const objGenero = new Genero();

      const genero = await objGenero.delete(id);
      res.status(201).json(genero);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default GeneroController;
