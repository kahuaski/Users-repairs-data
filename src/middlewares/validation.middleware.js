//exporta validador de usuario
exports.validateUser = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name) {
    console.log(req.body);
    return res.status(400).json({
      message: 'the name is required',
    });
  }

  if (!email) {
    return res.status(400).json({
      message: 'the email is required',
    });
  }
  if (!password) {
    return res.status(400).json({
      message: 'the password is required',
    });
  }

  if (!role) {
    return res.status(400).json({
      message: 'the role is required',
    });
  }

  next();
};
