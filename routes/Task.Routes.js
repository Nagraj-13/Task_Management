import express from 'express';
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  getTaskByIdController,
  updateTaskController,
} from '../controllers/Task.Controller.js';
import { validateRequest } from '../middleware/validator.middleware.js';
import { createTaskSchema } from '../utils/validatorSchema.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/getAllTask:
 *   get:
 *     summary: Retrieve all tasks with optional pagination and search.
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of tasks per page.
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search keyword to filter tasks by title.
 *     responses:
 *       200:
 *         description: Tasks fetched successfully.
 */
router.get('/getAllTask', getAllTasksController);

/**
 * @swagger
 * /api/v1/getTask/{id}:
 *   get:
 *     summary: Retrieve a task by its ID.
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to retrieve.
 *     responses:
 *       200:
 *         description: Task retrieved successfully.
 *       404:
 *         description: Task not found.
 */
router.get('/getTask/:id', getTaskByIdController);

/**
 * @swagger
 * /api/v1/createTask:
 *   post:
 *     summary: Create a new task.
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the task.
 *                 example: New Task
 *               description:
 *                 type: string
 *                 description: Description of the task.
 *                 example: This is a sample task description.
 *               status:
 *                 type: string
 *                 description: Status of the task (Pending, In progress, Completed).
 *                 example: Pending
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       400:
 *         description: Bad request.
 */
router.post('/createTask', validateRequest(createTaskSchema), createTaskController);

/**
 * @swagger
 * /api/v1/updateTask/{id}:
 *   put:
 *     summary: Update an existing task by ID.
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title of the task.
 *               description:
 *                 type: string
 *                 description: Updated description of the task.
 *               status:
 *                 type: string
 *                 description: Updated status of the task.
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       400:
 *         description: Bad request.
 */
router.put('/updateTask/:id', validateRequest(createTaskSchema), updateTaskController);

/**
 * @swagger
 * /api/v1/deleteTask/{id}:
 *   delete:
 *     summary: Delete a task by its ID.
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to delete.
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *       404:
 *         description: Task not found.
 */
router.delete('/deleteTask/:id', deleteTaskController);

export default router;
