const db = require('../../config/db');

module.exports = {
    all() {
        return db.promise().query('SELECT * FROM family_info');
    },
    findById(family_info_id) {
        return db.promise().query(`SELECT * FROM family_info WHERE family_info_id = ${family_info_id}`);
    },
    create(family_info) {
        const query = `INSERT INTO family_info 
        (
            owner_id,
            origin_city,
            state,
            city_residence_time,
            home_residence_time
            
        ) 
        VALUES 
        ( ?, ?, ?, ?, ?)`;

        const values = [
            family_info.owner_id ,
            family_info.origin_city ,
            family_info.state ,
            family_info.city_residence_time,
            family_info.home_residence_time
        ];

        return db.promise().query(query, values);
    },
    findLastInsert() {
        return db.promise().query('SELECT * FROM family_info ORDER BY family_info_id DESC LIMIT 1');
    },
    update(family_info) {
        const query = `UPDATE family_info SET
            owner_id = ?,
            origin_city = ?,
            state = ?,
            city_residence_time = ?,
            home_residence_time = ?,
            WHERE family_info_id = ?`;

        const values = [
            family_info.owner_id ,
            family_info.origin_city ,
            family_info.state ,
            family_info.city_residence_time,
            family_info.home_residence_time, 
            family_info_id
        ];

        return db.promise().query(query, values);
    },
    destroy(family_info_id){
        return db.promise().query(`DELETE FROM family_info WHERE family_info_id = ${family_info_id}`);
    }
}