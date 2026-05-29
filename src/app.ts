import express from 'express'
import cors from 'cors'

import { TodoRepository } from '@/repositories/todo.repository'
import { TodoService } from '@/services/todo.service'
import { TodoController } from '@/controllers/post.controller'
import { createTodoRouter } from '@/routes/todo.router'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const todoRepository = new TodoRepository()
const todoService = new TodoService(todoRepository)
const todoController = new TodoController(todoService)
const todoRouter = createTodoRouter(todoController)

app.use('/todos', todoRouter)

// health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
