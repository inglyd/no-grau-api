import Format from "../models/formatsModel.js";
import Product from "../models/productsModel";

async function show(req, res) {
  try {
    const { id } = req.params;
    const formatExists = await Format.findByPk(id);
    if (!formatExists) throw new Error('Formato não cadastrado');
    const formatProducts = await Format.findAll({
      attributes: ['formato'],
      include: [
        {
          model: Product,
          where: { format: id },
          attributes: ['formato'],
        },
      ],
    });
    return res.status(200).json({ formatProducts });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
},


async function create (req, res) {
  try {
    const { formato } = req.body;
    const formatExists = await Format.findOne({ where: { formato } });
    if (formatExists)
      throw new Error('Formato já existe.');

    const format = await Format.create({ formato });
    return res.status(201).json(format);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  },

  async function update(req, res) {
    try {
      const { id } = req.params;
      const { formato } = req.body;
      const formatId = await Format.findByPk(id);
      if (!formatId || formatId == null)
        throw new Error('Formato não cadastrado');

      const updateProduct = await Format.update(
        {formato},
        { where: { id } }
      );

      return res.status(200).json({ 
        message: 'Formato atualizado.'
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
  async function deleteFormat (req, res) {
    try {
      const { id } = req.params;
      const format = await Format.findByPk(id);
      if (!format) throw new Error('Formato não cadastrado');
      format.destroy();
      format.save();
      return res.status(200).json({
        message: 'Formato deletado',
        format,
      });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}

export default { show, create, update, deleteFormat };
  
// list(get), show, create(post), update(put), delete(delete)  
