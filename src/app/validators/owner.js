module.exports = {
    post(req, res, next){
        if(req.body.name === null){
            return res.json({ erro: "O nome do proprietário não pode ser vazio!" });
        }

        next();
    }
}