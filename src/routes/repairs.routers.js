//import of express
const express = require('express');

//controladores del usuario *Controllers
const repairsControllers = require('./../controller/repairs.controllers');

//validadores de comunicacion de app *Middleware
const validationMiddlewareR = require('./../middlewares/validation.middlewareR');

//constante router con las propiedades de express router
const router = express.Router();

//ruta para conseguir datos de la ruta y enviar
router
  .route('/')
  .get(repairsControllers.findRepair)
  .post(validationMiddlewareR.validateRepair, repairsControllers.createRepairs);

//ruta para buscar y actualixar datos de la ruta
router
  .route('/:id')
  .get(repairsControllers.findRepair)
  .patch(repairsControllers.updateRepair)
  .delete(repairsControllers.deleteRepairs);

module.exports = router;
