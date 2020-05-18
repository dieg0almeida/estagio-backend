const db = require('../../config/db');
const { hash } = require('bcryptjs');

module.exports = {
    findById(user_id) {
        return db.promise().query(`SELECT * FROM users WHERE user_id = ${user_id}`);
    },

    async create(user) {
        const query = `INSERT INTO users
        (
            email,
            password,
            is_admin
        )
        VALUES
        (?, ?, ?)`;

        let password = await hash(user.password, 8);

        const values = [
            user.email,
            password,
            user.is_admin

        ];

        return db.promise().query(query, values);
    },
    findLastInsert() {
        return db.promise().query('SELECT * FROM users ORDER BY user_id DESC LIMIT 1');
    },
    update(user, user_id) {
        let password = hash(user.password, 8)
        const query = `UPDATE users SET
            email = ?,
            password = ?,
            is_admin = ?
            WHERE user_id = ?`;

        const values = [
            user.email,
            password,
            is_admin,
            user_id
        ];

        return db.promise().query(query, values);
    },
    destroy(user_id) {
        return db.promise().query(`DELETE FROM users WHERE user_id = ${user_id}`);
    },
    all(page) {
        const query = `SELECT * FROM users LIMIT 10 OFFSET ${(page - 1) * 10}`;
        return db.promise().query(query);
    }
}
