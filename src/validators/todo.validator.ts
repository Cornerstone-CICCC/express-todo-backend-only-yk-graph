import { body, param } from 'express-validator'

export const todoBodyValidator = [
  body('userId').isInt({ min: 1 }).withMessage('required userId must be a positive integer'),
  body('title').notEmpty().withMessage('required title must not be empty').escape(),
  body('completed').isBoolean().withMessage('required completed must be true or false'),
]

export const todoIdValidator = [param('id').isInt({ min: 1 }).withMessage('required id must be a positive integer')]
