import Material from '../models/materialsModel.js';

async function findAll(req, res) {
  const materials = await Material.findAll();
  res.json(materials);
}

export default { findAll };
