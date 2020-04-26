const FamilyHealthInfo = require('../models/FamilyHealthInfo');
const seeder = require('../seeders/familyhealthinfo');

module.exports = {
  async index(req, res) {
    const results = await FamilyHealthInfo.all();

    return res.json({ familyHealthInfo: results[0] });
  },
  async show(req, res) {
    const results = await FamilyHealthInfo.findById(req.params.id);

    const familyHealthInfo = results[0][0];
    return res.json({ familyHealthInfo });
  },
  async post(req, res) {
    await FamilyHealthInfo.create(seeder.generate());
    //await FamilyHealthInfo.create(req.body);

    const results = await FamilyHealthInfo.findLastInsert();

    const { family_health_info_id } = results[0][0];
    return res.redirect(`/familyhealth/${family_health_info_id}`);
  },
  async put(req, res) {
    await FamilyHealthInfo.update(req.body, req.params.id);

    return res.json({
      response: `FamilyHealthInfo ${req.params.id} updated!`
    });
  },
  async delete(req, res) {
    await FamilyHealthInfo.destroy(req.params.id);

    return res.json({ response: 'FamilyHealthInfo deleted!' });
  }
};
