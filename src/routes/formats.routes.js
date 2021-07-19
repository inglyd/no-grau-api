import express from 'express';
import formats from '../controllers/formats.js';

const routesFormats = express.Router();

routesFormats.get('/formats', formats.findAll);

routesFormats.get('/formats/:id', formats.findById);

export { routesFormats as default };
