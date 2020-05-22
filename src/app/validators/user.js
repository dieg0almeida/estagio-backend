module.exports = {

    post(req, res, next) {
        const { email, password, is_admin } = req.body;

        if (!email) {
            return res.json({ erro: "Email não pode ser vazio" });
        }
        if (!password) {
            return res.json({ erro: "Senha não pode ser vazia" });
        }
        if (!is_admin) {
            return res.json({ erro: "Selecione se o usuário é administrador ou não" });
        }
        if (is_admin != true || is_admin != false || is_admin != 0 || is_admin != 1) {
            return res.json({ erro: "Campo Admin é inválido" });
        }

        next();
    }




}