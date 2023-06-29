import { libro } from "../models/libro.models.js";

export const crearLibroController = async (req, res, next) => {
  const { titulo, isbn} = req.body;
  try {
    const newLibro = await libro.create({
      titulo: titulo,
      isbn: isbn
    });
    res.send(newLibro);
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const listaLibroController = async (req, res) => {
  try {
    const listLibro = await libro.findAll({ where: { prestado: false } });
    res.send(listLibro);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
export const listaEliminarLibroController = async (req, res) => {
  try {
    const listLibro = await libro.findByPk(req.params.id);
    if (!listLibro.prestado)
      return res.json({
        message: `se ha eliminado el libro ${listLibro.titulo} `,
      });
    else {
      return res
        .status(404)
        .json({
          mesagge: `el libro ${listLibro.titulo}  se encuentra prestado`,
        });
    }
  } catch (error) {
    res.status(404).json({ mesagge: "el libro se encuentra prestado" });
  }
};
