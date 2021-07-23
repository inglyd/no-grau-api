import express from 'express';
import products from '../controllers/products.js';

const routesProducts = express.Router();

routesProducts.get(
    "/products",
    /* #swagger.tags = ['Products'], */ products.findAll
);
routesProducts.get('/products/:id', products.findById);
routesProducts.post(
    "/products",
    /*
    #swagger.tags = ['Products'],
    #swagger.parameters['post products object'] = {
            in: 'body',
            description: "New products values",
            schema: {
               
    "$name": "new product",
    "$description": "product",
    "$url_image": "productUrl.com",
    "$id_format": "cat-eye",
    "$id_material": "acrylic",
    "$id_color": "black",
            }
    } */ products.create
);

routesProducts.put(
    "/products/:id",
    /*
    #swagger.tags = ['Products'],
    #swagger.parameters['post products object'] = {
            in: 'body',
            description: "New products values",
            schema: {
               
     "$name": "update product",
    "$description": "update description",
    "$url_image": "update.com",
    "$id_format": "cat-eye",
    "$id_material": "metal",
    "$id_color": "black",
            }
    } */
    products.update
);

routesProducts.delete('/products/:id', /* #swagger.tags = ['Products'], */ products.remove);

export { routesProducts as default };

//