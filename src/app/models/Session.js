const db = require('../../config/db');
const { hash } = require('bcryptjs');

module.exports = {
    findByEmail(user_email) {
        return db.promise().query(`SELECT * FROM users WHERE email = '${user_email}'`);
    },
    async findByIdAndUpdate(user_id, data) {
        const user = await db.promise().query(`SELECT * FROM users WHERE user_id = ${user_id}`);
        if (!user) {
            return;
        } else {
            const query = `UPDATE users SET
                passwordresettoken = ?,
                passwordresetexpires = ?
                WHERE user_id = ?`;

            const values = [
                data.passwordResetToken,
                data.passwordResetExpires,
                user_id
            ];

            return db.promise().query(query, values);
        }

    },
    async update(user) {
        let password = await hash(user.password, 8)

        const query = `UPDATE users SET
                password = ?,
                passwordResetToken = ?,
                passwordResetExpires = ?
                WHERE user_id = ?`;

        const values = [
            password,
            null,
            null,
            user.user_id
        ];

        return db.promise().query(query, values);
    }
}