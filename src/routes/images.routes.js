import express from 'express';
import images from '../controllers/images.js';

const routes = express.Router();

routes.get('/images', images.findAll);

export { routes as default };
