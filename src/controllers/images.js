import Image from '../models/imagesModel.js';

async function findAll(req, res) {
  const images = await Image.findAll();
  res.json(images);
}

export default { findAll };
