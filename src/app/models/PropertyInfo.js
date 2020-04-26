const db = require('../../config/db');

module.exports = {
  all() {
    return db.promise().query('SELECT * FROM property_info');
  },
  findById(property_info_id) {
    return db
      .promise()
      .query(
        `SELECT * FROM property_info WHERE property_info_id = ${property_info_id}`
      );
  },
  create(property) {
    const query = `INSERT INTO property_info 
        (
            owner_id, 
            construction, 
            finish,
            drinking_water,
            sewage,
            electric_power,
            trash_destiny,
            property_type, 
            lot_condition,
            lot_occupacy_number,
            has_another_property,
            has_iptu,
            iptu_holder,
            property_documentation
        ) 
        VALUES 
        (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      property.owner_id,
      property.construction,
      property.finish,
      property.drinking_water,
      property.sewage,
      property.electric_power,
      property.trash_destiny,
      property.property_type,
      property.lot_condition,
      property.lot_occupacy_number,
      property.has_another_property,
      property.has_iptu,
      property.iptu_holder,
      property.property_documentation
    ];

    return db.promise().query(query, values);
  },
  findLastInsert() {
    return db
      .promise()
      .query(
        'SELECT * FROM property_info ORDER BY property_info_id DESC LIMIT 1'
      );
  },
  update(property, property_info_id) {
    const query = `UPDATE property_info SET
            owner_id = ?, 
            construction = ?, 
            finish = ?,
            drinking_water = ?,
            sewage = ?,
            electric_power = ?,
            trash_destiny = ?,
            property_type = ?, 
            lot_condition = ?,
            lot_occupacy_number = ?,
            has_another_property = ?,
            has_iptu = ?,
            iptu_holder = ?,
            property_documentation = ?
            WHERE property_info_id = ?`;

    const values = [
      property.owner_id,
      property.construction,
      property.finish,
      property.drinking_water,
      property.sewage,
      property.electric_power,
      property.trash_destiny,
      property.property_type,
      property.lot_condition,
      property.lot_occupacy_number,
      property.has_another_property,
      property.has_iptu,
      property.iptu_holder,
      property.property_documentation,
      property_info_id
    ];

    return db.promise().query(query, values);
  },
  destroy(property_info_id) {
    return db
      .promise()
      .query(
        `DELETE FROM property_info WHERE property_info_id = ${property_info_id}`
      );
  }
};
