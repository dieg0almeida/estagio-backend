const express = require('express');
const routes = express.Router();

const AddFamilyInfoController = require('../app/controllers/AddFamilyInfoController');
const AddFamilyInfoValidator = require('../app/validators/AddFamilyinfo');

routes.get('', AddFamilyInfoController.index);
routes.get('/:id', AddFamilyInfoController.show);
routes.post('/',AddFamilyInfoValidator.post, AddFamilyInfoController.post);
routes.put('/:id', AddFamilyInfoController.put);
routes.delete('/:id', AddFamilyInfoController.delete);

module.exports = routes;