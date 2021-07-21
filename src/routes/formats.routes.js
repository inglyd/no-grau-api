import express from 'express';
import formats from '../controllers/formats.js';

const routesFormats = express.Router();

routesFormats.get('/formats', formats.findAll);

export { routesFormats as default };
