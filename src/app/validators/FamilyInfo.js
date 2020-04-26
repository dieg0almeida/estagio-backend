module.exports = {
    post(req, res, next){
        
        if(req.body.city_residence_time <= req.body.home_residence_time){      
            
            return res.json({erro: "O tempo que o entrevistado mora numa residência não pode ser maior do que o tempo em que o mesmo vive na cidade"});
        };

        next();
    }

}