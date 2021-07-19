import express from 'express';
import materials from '../controllers/materials.js';

const routesMaterials = express.Router();

routesMaterials.get('/materials', materials.findAll);

routesMaterials.get('/materials/:id', materials.findById);

export { routesMaterials as default };
