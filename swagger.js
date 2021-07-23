const outputFile = './swagger_output.json';

import swaggerAutogen from 'swagger-autogen'

const endpointsFiles = [
  './src/routes/colors.routes.js',
  './src/routes/formats.routes.js',
  './src/routes/materials.routes.js',
  './src/routes/products.routes.js'
];

swaggerAutogen(outputFile, endpointsFiles);