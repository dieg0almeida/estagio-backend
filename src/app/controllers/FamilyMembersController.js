const FamilyMembers = require('../models/FamilyMembers');
const seeder = require('../seeders/familyMembers');

module.exports = {
  async index(req, res) {
    const results = await FamilyMembers.all();
    return res.json({ familyMembers: results[0] });
  },
  async show(req, res) {
    const results = await FamilyMembers.findById(req.params.id);
    const familyMembers = results[0][0];
    return res.json({ familyMembers });
  },
  async post(req, res) {
    // await FamilyMembers.create(req.body);
    await FamilyMembers.create(seeder.generate());
    const results = await FamilyMembers.findLastInsert();
    const { family_members_id } = results[0][0];

    return res.redirect(`/family_members/${family_members_id}`);
  },
  async put(req, res) {
    await FamilyMembers.update(req.body, req.params.id);
    return res.json({ response: `Family members ${req.params.id} updated!` });
  },
  async delete(req, res) {
    await FamilyMembers.destroy(req.params.id);
    return res.json({ response: 'Family members deleted!' });
  },
}
