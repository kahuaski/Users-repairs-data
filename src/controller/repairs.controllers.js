// importar requerimientos del modelo usuario
const Repair = require('../models/repairs.model');

//busqueda de usuarios
exports.findRepair = async (req, res) => {
  const time = req.requestTime;

  const repair = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });

  return res.json({
    requestTime: time,
    results: repair.length,
    status: 'success',
    message: 'moto found',
    repair,
  });
};
exports.updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `moto with id: ${id} not found`,
      });
    }
    const resp = await Repair.update({
      status,
    });

    res.status(200).json({
      status: 'success',
      message: 'The moto has been updated',
      resp,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong!☠',
    });
  }
};
exports.createRepairs = async (req, res) => {
  try {
    const { Date, userid } = req.body;
    const repair = await Repair.create({
      Date,
      userid,
    });
    return res.status(201).json({
      message: 'The moto has been created!',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong! 🕸',
    });
  }
};
exports.findRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `The moto with id: ${id} n o found!`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'moto found',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
exports.deleteRepairs = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({
      where: {
        status: 'pending',
        id,
      },
    });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `moto whit id: ${id} not found!`,
      });
    }

    await repair.update({
      status: 'cancelled',
    });
    return res.status(200).json({
      status: 'success',
      message: 'The moto has been Deleted!',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
