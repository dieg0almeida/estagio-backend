const db = require('../../config/db');

module.exports = {
  all() {
    return db.promise().query('SELECT * FROM social_government_programs');
  },
  findById(social_government_programs_id) {
    return db.promise().query(`SELECT * FROM social_government_programs WHERE social_government_programs_id = ${social_government_programs_id}`);
  },
  create(social_government_programs) {
    const query = `INSERT INTO social_government_programs (
      owner_id,
      name,
      earn
      ) VALUES (?, ?, ?)`;

    const values = [
      social_government_programs.owner_id,
      social_government_programs.name,
      social_government_programs.earn,
    ];

    return db.promise().query(query, values);
  },
  findLastInsert() {
    return db.promise().query('SELECT * FROM social_government_programs ORDER BY social_government_programs_id DESC LIMIT 1');
  },
  update(social_government_programs, social_government_programs_id) {
    const query = `UPDATE social_government_programs SET
      owner_id = ?,
      name = ?,
      earn = ?
      WHERE social_government_programs_id = ?`;

    const values = [
      social_government_programs.owner_id,
      social_government_programs.name,
      social_government_programs.earn,
      social_government_programs_id,
    ];

    return db.promise().query(query, values);
  },
  destroy(social_government_programs_id) {
    return db.promise().query(`DELETE FROM social_government_programs WHERE social_government_programs_id = ${social_government_programs_id}`)
  },
}
