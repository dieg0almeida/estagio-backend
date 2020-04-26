require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes/index');
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('./src/app/views', {
    express: server
});

server.use(routes);

const port = process.env.PORT || 3000;

server.listen(port, function(){
    console.log('Server is running!');
})