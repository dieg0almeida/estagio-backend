const session = require('express-session');
const mysqlSession = require('connect-mysql2')(session);
const db = require('./db');

module.exports = session({
    store: new mysqlSession({
        pool: db
    }),
    secret: 'meu_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 84600 * 1000 }
});