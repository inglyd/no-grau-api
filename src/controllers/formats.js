import Format from "../models/formatsModel.js";

async function findAll(req, res) {
  const formats = await Format.findAll();
  res.json(formats);
}

export default { findAll };