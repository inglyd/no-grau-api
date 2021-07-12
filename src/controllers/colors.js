import Color from "../models/colorsModel.js";

async function findAll(req, res) {
  const colors = await Color.findAll();
  res.json(colors);
}

export default { findAll };


