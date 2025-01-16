import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import TaskRouter from './routes/Task.Routes.js';
import { responseHandler } from './middleware/responseHandler.middleware.js';
import { swaggerOptions } from './config/swaggerOptions.js'; 

const app = express();


app.use(express.json());
app.use(responseHandler);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/v1', TaskRouter);

export { app };
