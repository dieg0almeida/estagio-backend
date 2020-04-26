const express = require('express');
const routes = express.Router();

const FamilyHealthInfoController = require('../app/controllers/FamilyHealthInfoController');
const FamilyHealthInfoValidator = require('../app/validators/familyhealthinfo');

routes.get('/', FamilyHealthInfoController.index);
routes.get('/:id', FamilyHealthInfoController.show);
routes.post('/', /*FamilyHealthInfoValidator.post,*/ FamilyHealthInfoController.post);
routes.put('/:id', FamilyHealthInfoValidator.post, FamilyHealthInfoController.put);
routes.delete('/:id', FamilyHealthInfoController.delete);

module.exports = routes;
