import Product from '../models/productsModel.js';

async function findAll(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function findById(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Produto não existe.' });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function create(req, res) {
  try {
    const { name, description, imageUrl, formatId, materialId, colorId } =
      req.body;
    if (
      name === '' ||
      description === '' ||
      imageUrl === '' ||
      formatId === '' ||
      materialId === '' ||
      colorId === ''
    )
      return res.status(400).json({ message: 'Preencha todos os campos.' });
    else {
      const product = await Product.create({
        name,
        description,
        imageUrl,
        formatId,
        materialId,
        colorId,
      });
      return res.status(201).json(product);
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  } 
}

async function update(req, res) {
try {
  const { id } = req.params;
  const { name, description, imageUrl, formatId, matarialId, colorId } = req.body;
  const productId = await Product.findByPk(id);
  if (!productId || productId == null)
    throw new Error ('Produto não cadastrado.');

    const updateProduct = await Product.update(
     {
      name, description, imageUrl, formatId, matarialId, colorId
     },
     { where: { id }}
    );
    return res.status(200).json({ 
      message: 'Produto atualizado!'
    });
  } catch (err) {
    return res.status(400).json({ message: 'Produto não encontrado.' });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) res.status(404).json({ message: 'Produto não existe.' });
    product.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ message: 'Produto deletado com sucesso.' });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

export default { findAll, findById, create, update, remove };
