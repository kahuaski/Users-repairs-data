// importar requerimientos del modelo usuario

const User = require('./../models/users.model');
//busqueda de usuarios
exports.findAllUsers = async (req, res) => {
  const time = req.requestTime;

  const user = await User.findAll({
    where: {
      status: 'available',
    },
  });

  return res.json({
    requestTime: time,
    results: user.length,
    status: 'success',
    message: 'users found',
    user,
  });
};
exports.updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `user with id: ${id} not found`,
      });
    }
    const resp = await user.update({
      name,
      email,
    });

    res.status(200).json({
      status: 'sucess',
      message: 'The user has been updated',
      resp,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong!☠',
    });
  }
};
exports.createUsers = async (req, res) => {
  try {
    const { name, email, password, role, status } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
      status,
    });
    return res.status(201).json({
      message: 'The user has been created!',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'something went very wrong! 🕸',
    });
  }
};
exports.findUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `The user with id: ${id} no found!`,
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'User found',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!😮',
    });
  }
};
exports.deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        status: 'available',
        id,
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User whit id: ${id} not found!`,
      });
    }

    await user.update({
      status: 'not available',
    });
    return res.status(200).json({
      status: 'success',
      message: 'The user has been Deleted!',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
