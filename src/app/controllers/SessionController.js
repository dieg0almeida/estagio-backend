const express = require('express');
const routes = express.Router();
const Session = require('../models/Session');
const { compare } = require('bcryptjs');

module.exports = {
    logout(req, res) {
        req.session.destroy()
        return res.redirect("/")
    },
    async login(req, res) {
        const results = await Session.findByEmail(req.body.email);
        let password = await compare(req.body.password, results[0][0].password);
        if (results[0].length === 0 || password == false) {
            return res.json({
                "success": false,
                "errors": [
                    "Invalid login credentials. Please try again."
                ]
            });
        } else {
            const { user_id, email } = results[0][0];
            req.session.user_id = user_id;
            res.status(200);
            res.json({ user_id, email, success: true });
        }
    }
}
