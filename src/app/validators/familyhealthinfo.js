module.exports = {
    post(req, res, next) {


        //Verificação dos campos para validação de causas de mortes e de pessoas idosas
        if (!req.body.has_death_in_last_two_years) {
            return res.json({ erro: "Valor Incorreto em Morte nos 2 últimos anos." })
        }
        if (!req.body.has_old_people) {
            return res.json({ erro: "Valor Incorreto em Existem pessoas idosas." })
        }

        //Validação dos campos de causas de mortes e numero de idosos

        if (req.body.has_death_in_last_two_years == true && req.body.deaths_two_years_cause == null) {
            return res.json({ erro: "Por favor insira um valor válido em causas de morte." })
        }

        if (req.body.has_old_people == true && req.body.old_people_count == null) {
            return res.json({ erro: "Por favor insira o numero de pessoas idosas." })
        }
        next();
    }
}