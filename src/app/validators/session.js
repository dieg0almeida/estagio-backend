

module.exports = {
    post(req, res, next) {

        const { email, password } = req.body;

        if (!email) {
            return res.json({ erro: "Email não informado" });
        }
        if (!password) {
            return res.json({ erro: "Password não informada" });
        }

        next();
    }

}