import express from 'express';
import formats from '../controllers/formats.js';

const routesFormats = express.Router();

routesFormats.post('/formats', formats.findAll);

export { routesFormats as default };
