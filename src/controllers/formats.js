import Format from '../Models/formatsModel.js';

async function findAll(req, res) {
  const formats = await Format.findAll();
  res.json(formats);
}
export default { findAll };
