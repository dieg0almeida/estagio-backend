const db = require('../../config/db');

module.exports = {
    findByEmail(user_email) {
        return db.promise().query(`SELECT * FROM users WHERE email = '${user_email}'`);
    }

}