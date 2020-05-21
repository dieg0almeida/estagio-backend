

module.exports = {
    post(req, res, next) {

        const { email, password } = req.body;

        if (!email) {
            return res.json({ erro: "Can't get email" });
        }
        if (!password) {
            return res.json({ erro: "Can't get password" })
        }

        next();
    },
    forgot(req, res, next) {
        if (!req.body.email) {
            return res.json({ erro: "Can't get email" });
        }
        next();
    },
    reset(req, res, next) {
        const { email, token, password } = req.body;

        if (!email) {
            return res.json({ erro: "Can't get email" });
        }
        if (!password) {
            return res.json({ erro: "Can't get password" })
        }
        if (!token) {
            return res.json({ erro: "Can't get token" });
        }
    }

}