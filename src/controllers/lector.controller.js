import { lector } from "../models/lector.models.js";

export const crearLector = async (req, res) => {
  const { nombre } = req.body;
  try {
    const newLector = await lector.create({ nombre });
    res.send(newLector);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const lectorPredefinido = (req,res) => {
  const defaultLector = [
    {
      id: 1,
      nombre: "Juan Pablo",
    },
    {
      id: 2,
      nombre: "Pedro Pablo",
    },
  ];

    const muestra =  defaultLector.map((item) => item);
    res.json(muestra);

};
