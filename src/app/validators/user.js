module.exports = {

    post(req, res, next) {
        const { email, password, is_admin } = req.body;

        if (!email) {
            return res.json({ erro: "Email can't be blank" });
        }
        if (!password) {
            return res.json({ erro: "Password can't be blank" });
        }
        if (!is_admin) {
            return res.json({ erro: "Select if user is admin or not" });
        }
        if (is_admin != true || is_admin != false || is_admin != 0 || is_admin != 1) {
            return res.json({ erro: "Field Admin is invalid" });
        }

        next();
    }




}