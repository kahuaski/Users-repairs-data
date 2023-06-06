//import of express
const express = require('express');

//controladores del usuario *Controllers
const usersControllers = require('./../controller/users.controllers');

//validadores de comunicacion de app *Middleware
const validationMiddleware = require('./../middlewares/validation.middleware');

//constante router con las propiedades de express router
const router = express.Router();

//ruta para conseguir datos de la ruta y enviar
router
  .route('/')
  .get(usersControllers.findAllUsers)

  .post(validationMiddleware.validateUser, usersControllers.createUsers);

//ruta para buscar y actualixar datos de la ruta
router
  .route('/:id')
  .get(usersControllers.findUsers)
  .patch(usersControllers.updateUsers)
  .delete(usersControllers.deleteUsers);

module.exports = router;
