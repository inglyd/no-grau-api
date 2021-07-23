import express from 'express';
import formats from '../controllers/formats.js';

const routesFormats = express.Router();

routesFormats.get('/formats',  /* #swagger.tags = ['Formats'], */ formats.findAll);

export { routesFormats as default };
