import Product from '../models/productsModel.js';

async function findAll(req, res) {
  const products = await Product.findAll();
  res.json(products);
}

async function findById(req, res) {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Produto não existe.' });
  }
}

export default { findAll, findById };
