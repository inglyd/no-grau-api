import express from 'express';
import products from '../controllers/products.js';

const routesProducts = express.Router();

routesProducts.get('/products', products.findAll);

routesProducts.get('/products/:id', products.findById);

export { routesProducts as default };
