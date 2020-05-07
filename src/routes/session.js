const express = require('express');
const routes = express.Router();

const SessionController = require('../app/controllers/SessionController.js');
const sessionValidator = require('../app/validators/session');

routes.post('/login', sessionValidator.post, SessionController.login);
routes.post('/logout', SessionController.logout);
/*
routes.post('/forgot-password', SessionController.forgot);
routes.post('/password-reset', SessionController.reset);
*/

module.exports = routes;