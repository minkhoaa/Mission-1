import swaggerJsDoc from 'swagger-jsdoc'
import type { Options } from 'swagger-jsdoc';
import { loadAllYAMLFromDir } from '../utils/loadYAMLs'

const components = loadAllYAMLFromDir('src/docs');
const server_url = process.env.SERVER_URL ?? 'http://localhost:3000'

export const swaggerOptions: Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ExpressJS Template',
      version: '1.0.0',
      description: 'API documentation',
    },
    externalDocs: {
      description: "api-document.json",
      url: "/api/docs/api-document.json"
    },
    servers: [
      {
        url: `${server_url}/api`,
      },
    ],
    ...components
  },
  apis: ['./src/routes/user.router.ts', './src/routes/todolist.router.ts', './src/routes/todoitem.router.ts', './src/routes/test.router.ts'],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions)
