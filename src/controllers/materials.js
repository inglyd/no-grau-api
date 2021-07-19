import Material from '../models/materialsModel.js';

async function findAll(req, res) {
  const materials = await Material.findAll();
  res.json(materials);
}

async function findById(req, res) {
  const id = req.params.id;
  const material = await Material.findByPk(id);
  if (material) {
    res.json(material);
  } else {
    res.status(404).json({ error: 'Falha na busca do material.' });
  }
}

export default { findAll, findById };
