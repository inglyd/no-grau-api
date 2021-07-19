import express from 'express';
import formats from '../controllers/formats.js';

const routesFormats = express.Router();

routesFormats.get('/formats/:id', formats.show);
routesFormats.post("/formats", formats.create);
routesFormats.put("/formats/:id", formats.update);
routesFormat.delete("/formats/:id", formats.deleteFormat);

export { routesFormats as default };
