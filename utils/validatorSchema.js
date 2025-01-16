import Joi from 'joi'

export const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Title is required",
    "string.min": "Title should have a minimum length of 3",
    "string.max": "Title should not exceed 100 characters",
  }),
  description: Joi.string().max(500).optional().messages({
    "string.max": "Description should not exceed 500 characters",
  }),
  status: Joi.string()
    .valid("Pending", "In Progress", "Completed")
    .default("Pending")
    .messages({
      "any.only": "Status must be one of 'Pending', 'In Progress', or 'Completed'",
    }),
});