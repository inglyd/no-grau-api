import express from 'express';
import formats from '../src/controllers/formats.js';

const routes = express.Router();

routes.get('/formats', formats.findAll);

export { routes as default };
