const { validationResult } = require('express-validator'); //TODO:

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //TODO Continua hacia el controlador
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports = validateResults;