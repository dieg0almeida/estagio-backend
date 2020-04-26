const Owner = require('../models/Owner');

module.exports = {
    async index(req, res){
        const results = await Owner.all();

        return res.json({ owners: results[0] });
    },
    async show(req, res){
        const results = await Owner.findById(req.params.id);

        const owner = results[0][0];
        return res.json({ owner });
    },
    async post(req, res){
        await Owner.create(req.body);

        const results = await Owner.findLastInsert();

        const { owner_id } = results[0][0];
        return res.redirect(`/owners/${owner_id}`);
    },
    async put(req, res){
        await Owner.update(req.body, req.params.id);

        return res.json({response: `Owner ${req.params.id} updated!`});
    },
    async delete(req, res){
        await Owner.destroy(req.params.id);

        return res.json({response: "Owner deleted!"});
    }
}