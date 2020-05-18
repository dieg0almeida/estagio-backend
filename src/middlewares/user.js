const User = require('../app/controllers/UserController');
const mUser = require('../app/models/User');
const db = require('../config/db');

module.exports = {
    async delete(req, res, next) {

        const user_id = req.session.user_id;
        const delete_id = req.params.id;

        const ver = await db.promise().query(`SELECT * FROM users WHERE user_id = ${user_id}`);

        const user = ver[0][0];

        if (user.is_admin == true) {
            if (user_id == delete_id) {
                return res.json({ erro: "Administrador não pode deletar a propria conta" });
            } else {
                next();
            }
        } else {
            return res.json({ erro: "Usuário não Autorizado" });
        }
    },
    async isAdmin(req, res, next) {

        const user_id = req.session.user_id;
        if (!user_id) {
            return res.json({ erro: "Por Favor Efetue o Login" });
        }

        const ver = await db.promise().query(`SELECT * FROM users WHERE user_id = ${user_id}`);

        const user = ver[0][0];

        if (user.is_admin == true) {
            next();
        } else {
            return res.json({ erro: "Você não tem permissão para acessar esta página" });
        }
    },
    async isConnected(req, res, next) {
        const user_id = req.session.user_id;
        if (!user_id) {
            return res.json({ erro: "Por Favor Efetue o Login" });
        }
        next();
    }
}
