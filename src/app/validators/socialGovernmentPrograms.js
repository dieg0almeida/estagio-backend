module.exports = {
  post(req, res, next) {
    if (!req.body.owner_id) {
      return res.json({ erro: 'É necessário um proprietário do programa social do governo.' });
    }
    if (!req.body.name || typeof req.body.name !== 'string') {
      return res.json({ erro: 'É necessário um nome válido para o programa social do governo.' });
    }

    next();
  }
}
