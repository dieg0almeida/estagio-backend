module.exports = {
    post(req, res, next) {

        const { email, password } = req.body;

        if (!email) {
            return res.json({ erro: "Não é possível verificar email" });
        }
        if (!password) {
            return res.json({ erro: "Não é possível verificar senha" })
        }

        next();
    },
    forgot(req, res, next) {
        if (!req.body.email) {
            return res.json({ erro: "Não é possível verificar email" });
        }
        next();
    },
    reset(req, res, next) {
        const { email, token, password } = req.body;

        if (!email) {
            return res.json({ erro: "Não é possível verificar email" });
        }
        if (!password) {
            return res.json({ erro: "Não é possível verificar senha" })
        }
        if (!token) {
            return res.json({ erro: "Não é possível verificar token" });
        }
        next();
    }

}