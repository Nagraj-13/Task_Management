
export const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Task API',
        version: '1.0.0',
        description: 'API documentation for managing tasks, including CRUD operations, task creation, updating, deletion, and pagination.',
      },
      servers: [
        {
          url: 'http://localhost:5000',
          description: 'Local Development Server',
        },
        {
          url: 'https://api.yourdomain.com',
          description: 'Production Server',
        },
      ],
    },
    apis: ['./routes/Task.Routes.js'], 
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Title of the task',
            },
            description: {
              type: 'string',
              description: 'Detailed description of the task',
            },
            status: {
              type: 'string',
              enum: ['pending', 'in-progress', 'completed'],
              description: 'Current status of the task',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation date of the task',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update date of the task',
            },
          },
        },
      },
    },
    security: [
      {
        apiKeyAuth: [],
      },
    ],
  };
  