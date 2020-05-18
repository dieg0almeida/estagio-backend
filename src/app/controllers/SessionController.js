const express = require('express');
const routes = express.Router();
const Session = require('../models/Session');
const { compare } = require('bcryptjs');
const crypto = require('crypto');
const mailer = require('../../config/mailer');

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
    },
    async forgot(req, res) {
        const { email } = req.body;
        try {

            const results = await Session.findByEmail(email);
            const user = results[0][0];
            if (!user) return res.status(400).send({ error: 'User not found' });
            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours(now.getHours() + 1);

            await Session.findByIdAndUpdate(user.user_id, {
                passwordResetToken: token,
                passwordResetExpires: now,
            });


            const info = await mailer.transport.sendMail({
                to: email,
                from: 'estagioifba@hotmail.com',
                html: '<p>Click <a href="https://estagiobackend.herokuapp.com/reset-password/?token=' + token + '">here</a> to reset your password</p>',
            }, (err) => {
                if (err) {
                    return res.sendStatus(400).send({ error: 'Cannot send forgot password email' });
                } else {
                    res.sendStatus(200);
                }

            })

        } catch (err) {
            res.sendStatus(400).send({ error: 'Error on forgot password' });
        }

    },
    async reset(req, res) {

        const { email, token, password } = req.body;
        try {

            const results = await Session.findByEmail(email);
            const user = results[0][0];

            if (!user) return res.status(400).send({ error: 'User not found' });

            if (token !== user.passwordResetToken) {
                return res.status(400).send({ error: 'Token Invalid' });
            }

            const now = new Date();

            if (now > user.passwordResetExpires)
                return res.status(400).send({ error: 'Token Expired' });

            user.password = password;

            await Session.update(user);


            return res.status(200).send(200);

        } catch (err) {
            return res.status(400).send({ error: 'Error on Password reset, try again' });
        }

    },
}
