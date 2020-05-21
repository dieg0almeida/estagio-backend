const db = require('../../config/db');

module.exports = {
    all(page) {
        return db.promise().query(`SELECT * FROM add_family_info LIMIT 10 OFFSET ${(page - 1) * 10}`);
    },
    findById(add_family_info_id) {
        return db.promise().query(`SELECT * FROM add_family_info WHERE add_family_info_id = ${add_family_info_id}`);
    },
    create(add_family_info) {
        const query = `INSERT INTO add_family_info
        (
            owner_id,
            has_knowledge_community_members,
            has_associate_community_meeting,
            work_community_priorities,
            has_social_government_programs
        )
        VALUES
        (?, ?, ?, ?, ?)`;

        const values = [
            add_family_info.owner_id ,
            add_family_info.has_knowledge_community_members ,
            add_family_info.has_associate_community_meeting ,
            add_family_info.work_community_priorities,
            add_family_info.has_social_government_programs,
        ];

        return db.promise().query(query, values);
    },
    findLastInsert() {
        return db.promise().query('SELECT * FROM add_family_info ORDER BY add_family_info_id DESC LIMIT 1');
    },
    update(add_family_info) {
        const query = `UPDATE add_family_info SET
            owner_id = ?,
            has_knowledge_community_members = ?,
            has_associate_community_meeting = ?,
            work_community_priorities = ?,
            has_social_government_programs = ?,
            WHERE add_family_info_id = ?`;

        const values = [
            add_family_info.owner_id ,
            add_family_info.has_knowledge_community_members ,
            add_family_info.has_associate_community_meeting ,
            add_family_info.work_community_priorities,
            add_family_info.has_social_government_programs,
        ];

        return db.promise().query(query, values);
    },
    destroy(add_family_info_id){
        return db.promise().query(`DELETE FROM add_family_info WHERE add_family_info_id = ${add_family_info_id}`);
    }
}
