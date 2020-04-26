const express = require('express');
const routes = express.Router();

const PropertyInfoController = require('../app/controllers/PropertyInfoController');
const PropertyInfoValidator = require('../app/validators/propertyinfo');

routes.get('/', PropertyInfoController.index);
routes.get('/:id', PropertyInfoController.show);
routes.post('/', /* PropertyInfoValidator.post,*/ PropertyInfoController.post);
routes.put('/:id', PropertyInfoValidator.post, PropertyInfoController.put);
routes.delete('/:id', PropertyInfoController.delete);

module.exports = routes;