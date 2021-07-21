import express from 'express';
import products from '../controllers/products.js';

const routesProducts = express.Router();

routesProducts.get('/products', products.findAll);
routesProducts.get('/products/:id', products.findById);
routesProducts.put('/products/:id', products.update);

export { routesProducts as default };
