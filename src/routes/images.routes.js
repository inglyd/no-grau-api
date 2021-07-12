import express from 'express';
import images from '../controllers/images.js';

const routesImage = express.Router();

routesImage.get('/images', images.findAll);

export { routesImage as default };
