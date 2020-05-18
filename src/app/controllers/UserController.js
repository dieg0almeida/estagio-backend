const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const results = await User.all(req.query.page);

        return res.json({ User: results[0] });
    },
    async show(req, res) {
        const results = await User.findById(req.params.id);

        const user = results[0][0];

        return res.json({ user });
    },
    async post(req, res) {

        await User.create(req.body);

        const results = await User.findLastInsert();

        const { user_id } = results[0][0];

        return res.redirect(`/user/${user_id}`);
    },
    async put(req, res) {
        await User.update(req.body, req.params.id);

        return res.json({
            response: `User ${req.params.id} updated!`
        });
    },
    async delete(req, res) {
        await User.destroy(req.params.id);

        return res.json({ response: 'User deleted!' });
    }
};
