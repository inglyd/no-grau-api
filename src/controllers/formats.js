import Format from '../Models/formatsModel.js';

async function findAll(req, res) {
  try {
    const formats = await Format.findAll();
    res.json (formats);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default { findAll };
