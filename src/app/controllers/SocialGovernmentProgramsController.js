const SocialGovernmentPrograms = require('../models/SocialGovernmentPrograms');
const seeder = require('../seeders/socialGovernmentPrograms');

module.exports = {
  async index(req, res) {
    const results = await SocialGovernmentPrograms.all();
    return res.json({ socialGovernmentPrograms: results[0] });
  },
  async show(req, res) {
    const results = await SocialGovernmentPrograms.findById(req.params.id);
    const socialGovernmentPrograms = results[0][0];
    return res.json({ socialGovernmentPrograms });
  },
  async post(req, res) {
    // await SocialGovernmentPrograms.create(req.body);
    await SocialGovernmentPrograms.create(seeder.generate());
    const results = await SocialGovernmentPrograms.findLastInsert();
    const { social_government_programs_id } = results[0][0];
    
    return res.redirect(`/social_government_programs/${social_government_programs_id}`);
  },
  async put(req, res) {
    await SocialGovernmentPrograms.update(req.body, req.params.id);
    return res.json({ response: `Social government programs ${req.params.id} updated!` });
  },
  async delete(req, res) {
    await SocialGovernmentPrograms.destroy(req.params.id);
    return res.json({ response: 'Social government programs deleted!' });
  },
}
