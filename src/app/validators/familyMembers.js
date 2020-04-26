module.exports = {
  post(req, res, next) {
    if (!req.body.owner_id) {
      return res.json({ erro: 'É necessário um proprietário do membro da família.' });
    }
    if (!req.body.name || typeof req.body.name !== 'string') {
      return res.json({ erro: 'É necessário o nome do membro da família.' });
    }
    if (!req.body.age) {
      return res.json({ erro: 'É necessário uma idade válida.' });
    }

    next();
  }
}
