import express from 'express';
import colors from '../controllers/colors.js';

const routes = express.Router();

routes.get('/colors', colors.findAll);

export { routes as default };
