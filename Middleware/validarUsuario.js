export const validarUsuario = (req, res, next) => {
  const {
    nombre,
    apellido,
    telefono,
    documento,
    usuario,
    contrasena,
    id_genero,
    id_ciudad,
  } = req.body;

  if (!nombre || nombre.trim() === "") {
    return res
      .status(400)
      .json({ message: "El nombre del usuario es obligatorio" });
  }
  if (!apellido || apellido.trim() === "") {
    return res
      .status(400)
      .json({ message: "El apellido del usuario es obligatorio" });
  }
  if (!telefono || telefono.trim() === "") {
    return res
      .status(400)
      .json({ message: "El telefono del usuario es obligatorio" });
  }
  if (!documento || documento.trim() === "") {
    return res.status(400).json({ message: "El documento es obligatorio" });
  }
  if (!usuario || usuario.trim() === "") {
    return res
      .status(400)
      .json({ message: "El apodo del usuario es obligatorio" });
  }
  if (!contrasena || contrasena.trim() === "") {
    return res
      .status(400)
      .json({ message: "La contrasena del usuario es obligatorio" });
  }
  if (!id_genero || id_genero.trim() === "") {
    return res
      .status(400)
      .json({ message: "El id de genero del usuario es obligatorio" });
  }
  if (!id_ciudad || id_ciudad.trim() === "") {
    return res
      .status(400)
      .json({ message: "El id de la ciudad del usuario es obligatorio" });
  }

  next();
};
