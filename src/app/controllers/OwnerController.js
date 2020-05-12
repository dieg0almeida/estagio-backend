const Owner = require('../models/Owner');

module.exports = {
    async index(req, res){
        const results = await Owner.all();

        return res.json({ owners: results[0] });
    },
    async show(req, res){
        const results = await Owner.findById(req.params.id);
        const raw_info = results[0][0];
        const owner_info = {
            owner: {},
            add_family_info: {},
            family_health_info: {},
            family_info: {},
            owners_partners: {},
            property_info: {},
        };

        for (let name of Object.getOwnPropertyNames(raw_info)) {
            if (name.startsWith('owner_')) {
                owner_info.owner[name.replace('owner_', '')] = raw_info[name];
            }
            else if (name.startsWith('add_family_info_')) {
                owner_info.add_family_info[name.replace('add_family_info_', '')] = raw_info[name];
            }
            else if (name.startsWith('family_health_info_')) {
                owner_info.family_health_info[name.replace('family_health_info_', '')] = raw_info[name];
            }
            else if (name.startsWith('family_info_')) {
                owner_info.family_info[name.replace('family_info_', '')] = raw_info[name];
            }
            else if (name.startsWith('owners_partners_')) {
                owner_info.owners_partners[name.replace('owners_partners_', '')] = raw_info[name];
            }
            else if (name.startsWith('property_info_')) {
                owner_info.property_info[name.replace('property_info_', '')] = raw_info[name];
            }
        }

        return res.json({ owner_info });
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
