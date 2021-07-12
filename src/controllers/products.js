import Product from '../models/productsModel.js';

async function findAll(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

export default { findAll };
