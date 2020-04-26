module.exports = {
    post(req, res, next){
        if(req.body.has_associate_community_meeting && !req.body.has_knowledge_community_members){
            return res.json({ erro: "O entrevistado não pode participar de reuniões da associação de moradores se não sabe da sua existência"});            
        }
        next()
    }
}