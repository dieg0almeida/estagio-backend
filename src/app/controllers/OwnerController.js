const Owner = require('../models/Owner');

module.exports = {
    async index(req, res){
        const results = await Owner.all(req.query.page);

        return res.json({ owners: results[0] });
    },
    async show(req, res){
        const results = await Owner.findById(req.params.id);
        const tables_info = results[0][0][0];
        const owner_info = {
            owner: {},
            add_family_info: {},
            family_health_info: {},
            family_info: {},
            owners_partners: {},
            property_info: {},
            family_members: [],
            social_government_programs: [],
        };

        if (tables_info.owner_index == -1) {
            return res.json({ owner_info });
        }
        else {
            owner_info.owner = results[0][1][0];
        }

        if (tables_info.add_family_info_index > 1) {
            owner_info.add_family_info = results[0][2][0];
        }
        if (tables_info.family_health_info_index > 1) {
            owner_info.family_health_info = results[0][tables_info.family_health_info_index][0];
        }
        if (tables_info.family_info_index > 1) {
            owner_info.family_info = results[0][tables_info.family_info_index][0];
        }
        if (tables_info.owners_partners_index > 1) {
            owner_info.owners_partners = results[0][tables_info.owners_partners_index][0];
        }
        if (tables_info.property_info_index > 1) {
            owner_info.property_info = results[0][tables_info.property_info_index][0];
        }
        if (tables_info.family_members_index > 1) {
            owner_info.family_members = results[0][tables_info.family_members_index];
        }
        if (tables_info.social_government_programs_index > 1) {
            owner_info.social_government_programs = results[0][tables_info.social_government_programs_index];
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
