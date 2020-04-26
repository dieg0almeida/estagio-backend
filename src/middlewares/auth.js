const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.json({
            "erro": [
                "Você precisa estar logado para continuar."
            ]
        });
    }

    jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
        if(err){
            return res.json({
                "erro": [
                    "Você precisa estar logado para continuar."
                ]
            });
        }

        req.userId = decoded.id;

        return next();
    })
}