import Color from '../models/colorsModel.js';

async function findAll(req, res) {
  const colors = await Color.findAll();
  res.json(colors);
}

async function findById(req, res) {
  const id = req.params.id;
  const color = await Color.findByPk(id);
  if (color) {
    res.json(color);
  } else {
    res.status(404).json({ error: 'Falha na busca da cor.' });
  }
}

export default { findAll, findById };
