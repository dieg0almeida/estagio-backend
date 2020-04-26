const db = require('../../config/db');

module.exports = {
  all() {
    return db.promise().query('SELECT * FROM family_members');
  },
  findById(family_members_id) {
    return db.promise().query(`SELECT * FROM family_members WHERE family_members_id = ${family_members_id}`);
  },
  create(family_members) {
    const query = `INSERT INTO family_members (
      owner_id,
      name,
      age,
      scholarity,
      occupacy,
      earning,
      relationship
    ) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      family_members.owner_id,
      family_members.name,
      family_members.age,
      family_members.scholarity,
      family_members.occupacy,
      family_members.earning,
      family_members.relationship,
    ];

    return db.promise().query(query, values);
  },
  findLastInsert() {
    return db.promise().query('SELECT * FROM family_members ORDER BY family_members_id DESC LIMIT 1');
  },
  update(family_members, family_members_id) {
    const query = `UPDATE family_members SET
      owner_id = ?,
      name = ?,
      age = ?,
      scholarity = ?,
      occupacy = ?,
      earning = ?,
      relationship = ?
      WHERE family_members_id = ?`

    const values = [
      family_members.owner_id,
      family_members.name,
      family_members.age,
      family_members.scholarity,
      family_members.occupacy,
      family_members.earning,
      family_members.relationship,
      family_members_id,
    ];

    return db.promise().query(query, values);
  },
  destroy(family_members_id) {
    return db.promise().query(`DELETE FROM family_members WHERE family_members_id = ${family_members_id}`);
  },
}
