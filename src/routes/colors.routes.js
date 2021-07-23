import express from 'express';
import colors from '../controllers/colors.js';

const routesColor = express.Router();

routesColor.get('/colors', /* #swagger.tags = ['Colors'], */ colors.findAll);

export { routesColor as default };
