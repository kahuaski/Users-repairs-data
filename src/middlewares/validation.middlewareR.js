exports.validateRepair = (req, res, next) => {
  const { Date, userid } = req.body;

  if (!Date) {
    console.log(req.body);
    return res.status(400).json({
      message: 'the date is required',
    });
  }

  if (!userid) {
    return res.status(400).json({
      message: 'the info is required',
    });
  }

  next();
};
