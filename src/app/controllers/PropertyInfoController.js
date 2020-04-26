const Property = require('../models/PropertyInfo');

module.exports = {
  async index(req, res) {
    const results = await Property.all();

    return res.json({ propertyInfo: results[0] });
  },
  async show(req, res) {
    const results = await Property.findById(req.params.id);

    const propertyInfo = results[0][0];
    return res.json({ propertyInfo });
  },
  async post(req, res) {
    await Property.create(req.body);


    const results = await Property.findLastInsert();

    const { property_info_id } = results[0][0];
    return res.redirect(`/property/${property_info_id}`);
  },
  async put(req, res) {
    await Property.update(req.body, req.params.id);

    return res.json({
      response: `Property ${req.params.id} updated!`
    });
  },
  async delete(req, res) {
    await Property.destroy(req.params.id);

    return res.json({ response: 'Property deleted!' });
  }
};
