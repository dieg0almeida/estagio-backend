const db = require('../../config/db');

module.exports = {
  all() {
    return db.promise().query('SELECT * FROM family_health_info');
  },
  findById(family_health_info_id) {
    return db
      .promise()
      .query(
        `SELECT * FROM family_health_info WHERE family_health_info_id = ${family_health_info_id}`
      );
  },
  create(family_health_info) {
    const query = `INSERT INTO family_health_info 
        (
            owner_id, 
            family_members_count, 
            sickness,
            has_death_in_last_two_years,
            deaths_two_years_cause,
            has_disabled_people_members,
            deficiencies,
            has_old_people,
            old_people_count,
            health_add_info
        ) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      family_health_info.owner_id,
      family_health_info.family_members_count,
      family_health_info.sickness,
      family_health_info.has_death_in_last_two_years,
      family_health_info.deaths_two_years_cause,
      family_health_info.has_disabled_people_members,
      family_health_info.deficiencies,
      family_health_info.has_old_people,
      family_health_info.old_people_count,
      family_health_info.health_add_info
    ];

    return db.promise().query(query, values);
  },
  findLastInsert() {
    return db
      .promise()
      .query(
        'SELECT * FROM family_health_info ORDER BY family_health_info_id DESC LIMIT 1'
      );
  },
  update(family_health_info, family_health_info_id) {
    const query = `UPDATE family_health_info SET
            owner_id = ?, 
            family_members_count = ?, 
            sickness = ?,
            has_death_in_last_two_years = ?,
            deaths_two_years_cause = ?,
            has_disabled_people_members = ?,
            deficiencies = ?,
            has_old_people = ?,
            old_people_count = ?,
            health_add_info = ?
            WHERE family_health_info_id = ?`;

    const values = [
      family_health_info.owner_id,
      family_health_info.family_members_count,
      family_health_info.sickness,
      family_health_info.has_death_in_last_two_years,
      family_health_info.deaths_two_years_cause,
      family_health_info.has_disabled_people_members,
      family_health_info.deficiencies,
      family_health_info.has_old_people,
      family_health_info.old_people_count,
      family_health_info.health_add_info,
      family_health_info_id
    ];

    return db.promise().query(query, values);
  },
  destroy(family_health_info_id) {
    return db
      .promise()
      .query(
        `DELETE FROM family_health_info WHERE family_health_info_id = ${family_health_info_id}`
      );
  }
};
