import MiModelo from "../models/MiModelo.js";

//OBTENER TODOS LOS REGISTROS
export const getAllapdz = async (req, res) => {
  try {
    const apdz = await MiModelo.findAll();
    res.json(apdz);
  } catch (error) {
    res.json({ message: error.message });
  }
};


//OBTENER DATOS DE UN SOLO REGISTRO
export const getApdz = async (req, res) => {
  try {
    const Apdz = await MiModelo.findAll({
      where: { id: req.params.id },
    });
    res.json(Apdz[0]);
  } catch (erorr) {
    res.json({ message: erorr.message });
  }
};


//CREAR REGISTRO
export const createApdz = async (req, res) => {
  try {
    await MiModelo.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (erorr) {
    res.json({ message: erorr.message });
  }
};


//ACTUALIZAR DATO
export const updateApdz = async (req, res) => {
  try {
    await MiModelo.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Perfil actualizado correctamente!",
    });
  } catch (erorr) {
    res.json({ message: erorr.message });
  }
};


//ELIMINAR DATO
export const deleteApdz = async (req, res) => {
  try {
    const deletedRows = await MiModelo.destroy({
      where: { id: req.params.id },
    });

    if (deletedRows > 0) {
      res.json({
        message: "¡Perfil Eliminado correctamente!",
      });
    } else {
      res.json({
        message: "No se encontró ningún perfil con ese ID.",
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
