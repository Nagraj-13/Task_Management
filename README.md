

# Task Management API

## Overview

This is a Task Management API built with **Node.js**, **Express**, and **MongoDB**. The API allows users to create, update, delete, and fetch tasks with support for pagination and searching. It also includes Swagger API documentation for easy reference.

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
  - [GET /api/v1/getAllTask](#get-apiv1getalltask)
  - [GET /api/v1/getTask/:id](#get-apiv1gettaskid)
  - [POST /api/v1/createTask](#post-apiv1createtask)
  - [PUT /api/v1/updateTask/:id](#put-apiv1updatetaskid)
  - [DELETE /api/v1/deleteTask/:id](#delete-apiv1deletetaskid)
- [Tech Stack](#tech-stack)
- [Testing](#testing)
- [License](#license)

---

## Installation

To get started with the Task Management API, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Nagraj-13/
   cd task-management-api
   ```

2. **Install dependencies**:

   Make sure you have `Node.js` installed, then run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

---

## Configuration

To set up the application, you need to configure a `.env` file in the root directory with the following values:

1. Create a `.env` file in the root of the project.
2. Add the following environment variables:

   ```env
   PORT=5000
   MONGO_URL=mongodb://your-mongo-url-here
   ```

   - Replace `<PORT>` with the port number on which the server will run (default is 5000).
   - Replace `<MONGO_URL>` with the connection URL for your MongoDB database. If you're using a local MongoDB instance, it might look like `mongodb://localhost:27017/your-database-name`. If you're using MongoDB Atlas or another hosted service, use the provided connection string.

---

## Running the Server

To run the server locally, follow these steps:

1. **Start the server**:

   ```bash
   npm run dev
   ```

   This will start the server using `nodemon` for automatic reloading of code changes.

2. **Access the API**:

   The server will start on the port specified in your `.env` file (default is `http://localhost:5000`). You can access the API and Swagger documentation at:

   - API: `http://localhost:5000/api/v1`
   - Swagger UI: `http://localhost:5000/api-docs`

---

## API Documentation

The API provides the following endpoints for managing tasks:

### GET /api/v1/getAllTask

Fetch all tasks with optional pagination and search functionality.

#### Query Parameters:
- `page`: Page number for pagination (optional).
- `limit`: Number of tasks per page (optional).
- `search`: Search term for filtering tasks by title (optional).
- `status`: Filter tasks by status (optional).

#### Response Example:
```json
{
  "tasks": [
    {
      "title": "Task 1",
      "description": "Description for Task 1",
      "status": "pending",
      "createdAt": "2023-12-01T00:00:00Z",
      "updatedAt": "2023-12-02T00:00:00Z"
    }
  ],
  "totalTasks": 1,
  "currentPage": 1,
  "totalPages": 1
}
```

---

### GET /api/v1/getTask/:id

Fetch a single task by ID.

#### URL Parameter:
- `id`: The ID of the task.

#### Response Example:
```json
{
  "task": {
    "title": "Task 1",
    "description": "Description for Task 1",
    "status": "pending",
    "createdAt": "2023-12-01T00:00:00Z",
    "updatedAt": "2023-12-02T00:00:00Z"
  }
}
```

---

### POST /api/v1/createTask

Create a new task.

#### Request Body:
```json
{
  "title": "Task 1",
  "description": "Description for Task 1",
  "status": "pending"
}
```

#### Response Example:
```json
{
  "message": "Task created successfully",
  "task": {
    "title": "Task 1",
    "description": "Description for Task 1",
    "status": "pending",
    "createdAt": "2023-12-01T00:00:00Z",
    "updatedAt": "2023-12-01T00:00:00Z"
  }
}
```

---

### PUT /api/v1/updateTask/:id

Update an existing task.

#### URL Parameter:
- `id`: The ID of the task.

#### Request Body:
```json
{
  "title": "Updated Task 1",
  "description": "Updated description",
  "status": "in-progress"
}
```

#### Response Example:
```json
{
  "message": "Task updated successfully",
  "task": {
    "title": "Updated Task 1",
    "description": "Updated description",
    "status": "in-progress",
    "createdAt": "2023-12-01T00:00:00Z",
    "updatedAt": "2023-12-02T00:00:00Z"
  }
}
```

---

### DELETE /api/v1/deleteTask/:id

Delete a task by ID.

#### URL Parameter:
- `id`: The ID of the task.

#### Response Example:
```json
{
  "message": "Task deleted successfully"
}
```

---

## Tech Stack

This project uses the following technologies:

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
 ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=flat&logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-blueviolet?style=for-the-badge)

---

## Testing

You can test the API using tools like Postman or Swagger UI:

- **Swagger UI**: Visit `http://localhost:5000/api-docs` to view the interactive Swagger documentation and test the API directly.

- **Postman**: You can also import the API endpoints into Postman by following these steps:

  1. Download the `Task Management.postman_collection.json` file.
  2. Open Postman and click on the **Import** button in the top-left corner.
  3. Select the **File** tab and choose the `Task Management.postman_collection.json` file.
  4. Click **Open** to import the collection.
  5. Once the collection is imported, you can test all the API endpoints (GET, POST, PUT, DELETE) directly in Postman.
  6. This Postman collection provides pre-configured requests for each endpoint in the Task Management API, making it easy to test CRUD operations.

Here is the content in markdown format, including the Mocha and Chai badges and the necessary sections:


## Setup for Testing with Mocha and Chai 
![Mocha](https://img.shields.io/badge/Mocha-8.4.0-blue)  
![Chai](https://img.shields.io/badge/Chai-4.3.4-orange)  
To install testing dependencies, run:

```bash
npm install --save-dev mocha chai chai-http  
```

## Running Tests  
To execute the tests, use the following command:

```bash
npm test  
```
The tests include CRUD operations for task management, ensuring that the API behaves as expected.


---


## License ![License](https://img.shields.io/badge/license-MIT-green)

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---
