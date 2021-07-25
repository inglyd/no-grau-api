import Color from '../Models/colorsModel.js';
async function findAll(req, res) {
  try {
    const colors = await Color.findAll();
    res.json(colors);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default { findAll };
