import express from 'express';
import routesFormats from './src/routes/formats.routes.js';
import routesColor from './src/routes/colors.routes.js';
import routesMaterials from './src/routes/materials.routes.js';
import routesProducts from './src/routes/products.routes.js';
import db from './src/database.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json';

const app = express();

app.use(express.json());
app.use(
    '/api-docs',
    (req, res, next) => {
      swaggerDocument.host = req.get('host');
      req.swaggerDoc = swaggerDocument;
      next();
    },
    swaggerUi.serve,
    swaggerUi.setup()
  );
app.use(routesFormats);
app.use(routesColor);
app.use(routesMaterials);
app.use(routesProducts);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(process.env.PORT || 3000, () => console.log('Servidor iniciado na porta 3000'));
