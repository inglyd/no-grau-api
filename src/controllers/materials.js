import Material from '../Models/materialsModel.js';
async function findAll(req, res) {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default { findAll };
