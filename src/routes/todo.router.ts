import { Router } from 'express'
import { TodoController } from '@/controllers/post.controller'

export const createTodoRouter = (todoController: TodoController): Router => {
  const router = Router()

  router.get('/', todoController.getTodos)
  router.get('/:id', todoController.getTodo)
  router.post('/', todoController.create)
  router.put('/:id', todoController.update)
  router.delete('/:id', todoController.delete)

  return router
}
