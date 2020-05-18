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
                return res.json({ erro: "Admin can't delete you account" });
            } else {
                next();
            }
        } else {
            return res.json({ erro: "Operator not Autorized" });
        }
    },
    async isAdmin(req, res, next) {

        const user_id = req.session.user_id;
        if (!user_id) {
            return res.json({ erro: "Please Login" });
        }

        const ver = await db.promise().query(`SELECT * FROM users WHERE user_id = ${user_id}`);

        const user = ver[0][0];

        if (user.is_admin == true) {
            next();
        } else {
            return res.json({ erro: "You don't have permission!" });
        }
    }
}
