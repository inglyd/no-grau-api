import express from 'express';
import colors from '../controllers/colors.js';

const routesColor = express.Router();

routesColor.get('/colors', colors.findAll);

routesColor.get('/colors/:id', colors.findById);

export { routesColor as default };
