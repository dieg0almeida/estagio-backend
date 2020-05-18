const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController.js');
const ProfileController = require('../app/controllers/ProfileController.js');
const middleUser = require('../middlewares/user');
const validatorUser = require('../app/validators/user');


routes.get('/users', middleUser.isAdmin, UserController.index) //listagem de usuários
routes.post('/users', validatorUser.post, middleUser.isAdmin, UserController.post); //Cadastrar um usuário
routes.get('/users/:id', middleUser.isAdmin, UserController.show); //Mostra os dados de um usuário
routes.put('/users/:id', validatorUser.post, middleUser.isAdmin, UserController.put); // Editar um usuário
routes.delete('/users/:id', middleUser.delete, UserController.delete); // Deletar um usuário

routes.put('/profile', middleUser.isConnected, validatorUser.post, ProfileController.put);// Editar o usuário logado

module.exports = routes;