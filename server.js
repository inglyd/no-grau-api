import express from 'express';
import routes from './src/routes/colors.routes.js';
import db from './src/database.js';

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
