import Format from '../models/formatsModel.js';

async function findAll(req, res) {
  const formats = await Format.findAll();
  res.json(formats);
}

async function findById(req, res) {
  const id = req.params.id;
  const format = await Format.findByPk(id);
  if (format) {
    res.json(format);
  } else {
    res.status(404).json({ error: 'Falha na busca do formato.' });
  }
}

export default { findAll, findById };
