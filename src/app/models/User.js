const db = require('../../config/db');

module.exports = {
    signIn(user){
        const query = `SELECT * FROM users WHERE email like '${user.email}'`;
        return db.promise().query(query);
    }
}