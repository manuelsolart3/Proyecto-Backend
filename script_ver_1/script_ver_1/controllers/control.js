import Usuarios from '../models/model.js';

export const getAllApdz = async (req, res) => {
  try {
    const Apdzs = await Usuarios.find();
    res.json(Apdzs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getApdz = async (req, res) => {
  try {
    const Apdz = await Usuarios.findOne({ _id: req.params.id });
    res.json(Apdz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createApdz = async (req, res) => {
  try {
    const nuevoUsuario = new Usuarios(req.body);
    await nuevoUsuario.save();
    res.json({ message: '¡Registro creado correctamente!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateApdz = async (req, res) => {
  try {
    await Usuarios.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: '¡Registro actualizado correctamente!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteApdz = async (req, res) => {
  try {
    await Usuarios.findByIdAndDelete(req.params.id);
    res.json({ message: '¡Registro eliminado correctamente!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
