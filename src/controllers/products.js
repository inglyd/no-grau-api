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
  const { name, description, imageUrl, formatId, materialId, colorId } =
    req.body;
  if (!name) {
    return res
      .status(400)
      .send({ message: 'Por favor, preencha os campos vazios' });
  }
  product
    .findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        imageUrl,
        formatId,
        materialId,
        colorId,
      },
      { new: true },
    )
    .then((product) => {
      if (!product) {
        res.status(404).send({ message: 'Produto não encontrado' });
      }
      res.status(200).send({ message: 'Produto atualizado!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjId') {
        return res
          .status(404)
          .send({ message: 'Erro ao encontrar o Id do produto' });
      }
    });
}

export default { findAll, findById, create, update };
