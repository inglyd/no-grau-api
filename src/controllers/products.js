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
  if (!req.body.nome) {
    return res
      .status(400)
      .send({ message: 'Por favor, preencha os campos vazios' });
  }
  product
    .findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        formatId: req.body.formatId,
        materialId: req.body.materialId,
        colorId: req.body.colorId,
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
