const User = require('../models/User');

module.exports = {
    async put(req, res) {

        const { user_id: id } = req.session;

        if (!id) return res.json({ response: `Session Not Exists` });

        await User.update(req.body, id);

        return res.json({
            response: `Profile ${id} updated!`
        });
    },
    async show(req, res) {
        const { user_id: id } = req.session;

        if (!id) return res.json({ response: `Session Not Exists` });

        const results = await User.findById(id);

        const user = results[0][0];
        return res.json({ user });
    }
}
