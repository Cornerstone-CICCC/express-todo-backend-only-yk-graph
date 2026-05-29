import { Router } from 'express'
import { TodoController } from '@/controllers/post.controller'
import { todoBodyValidator, todoIdValidator } from '@/validators/todo.validator'
import { validate } from '@/middlewares/validate.middleware'

export const createTodoRouter = (todoController: TodoController): Router => {
  const router = Router()

  router.get('/', todoController.getTodos)
  router.get('/:id', todoIdValidator, validate, todoController.getTodo)
  router.post('/', todoBodyValidator, validate, todoController.create)
  router.put('/:id', [...todoIdValidator, ...todoBodyValidator], validate, todoController.update)
  router.delete('/:id', todoIdValidator, validate, todoController.delete)

  return router
}
