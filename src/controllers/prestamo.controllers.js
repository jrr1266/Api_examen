import { lector } from "../models/lector.models.js";
import { libro } from "../models/libro.models.js";
import { prestamo } from "../models/prestamo.models.js";

export const createPrestamo = async (req, res) => {
  const { lectorId, libroId } = req.body;
  try {
    await libro.update({ prestado: true }, { where: { id: libroId } });
    const newPrestamo = await prestamo.create({
      lectorId,
      libroId,
    });
    res.json(newPrestamo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export const buscarPrestamo = async (req, res) => {
  try {
    const newPrestamo = await prestamo.findAll({
      include: [lector, libro],
    });
    res.json(newPrestamo);
  } catch (error) {
    res.status(500).json({ message: "no se ha pedidio ningun prestamo" });
  }
};

export const eliminarPrestamo = async (req, res) => {
  const { id, libroId, lectorId } = req.params;

  try {
    const prestamoEncontrado = await prestamo.findByPk(id);

    if (!prestamoEncontrado) {
      return res.status(404).json({ message: "No se encontró el préstamo" });
    }
    await libro.update(
      { prestado: false },
      {
        where: {
          id: libroId,
        },
      }
    );
    await prestamoEncontrado.destroy();
    await lector.destroy({
      where:{id:lectorId}
    })
    res.json({ message: "Se ha terminado el préstamo" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el préstamo" });
  }
};
