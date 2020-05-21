const jwt = require('jsonwebtoken');
const apiKey = require('../config/apiKey.json').apiKey

module.exports = {
    genToken: (data) => {
        return jwt.sign(
            {
                ... data,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
            },
            apiKey
        );
    },

    decodeToken: (token) => {
        return jwt.verify(token, apiKey);
    },

    authorize: (req, res, next) => {
        const token = req.headers['access-token'];

        if (!token) {
            res.status(401).json({ message: 'Restrict access.' });
        }
        else {
            jwt.verify(token, apiKey, (error, decoded) => {
                if (error) {
                    res.status(401).json({ message: 'Invalid token.' });
                }
                else {
                    next();
                }
            });
        }
    },
}
