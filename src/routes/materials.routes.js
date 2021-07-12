import express from 'express';
import materials from '../controllers/materials.js';

const routes = express.Router();

routes.get('/materials', materials.findAll);

export { routes as default };
