const express = require('express');
const routes = express.Router();

const OwnerController = require('../app/controllers/OwnerController');
const OwnerValidator = require('../app/validators/owner');

routes.get('/', OwnerController.index);
routes.get('/:id', OwnerController.show);
routes.post('/', OwnerValidator.post, OwnerController.post);
routes.put('/:id', OwnerController.put);
routes.delete('/:id', OwnerController.delete);

module.exports = routes;