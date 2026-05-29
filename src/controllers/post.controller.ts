import type { Request, Response } from 'express'

import type { TodoServiceInterface } from '@/services/todo.service.interface'
import type { Todo } from '@/types'

export class TodoController {
  constructor(private readonly todoService: TodoServiceInterface) {}

  getTodos = async (req: Request, res: Response) => {
    const todos = await this.todoService.getTodos()
    res.status(200).json(todos)
  }

  getTodo = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      const todo = await this.todoService.getTodoById(id)

      if (!todo) {
        res.status(404).json({ message: 'Todo not found' })
        return
      }

      res.status(200).json(todo)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const { userId, title, completed } = req.body as Todo
      const newTodo = await this.todoService.create({ userId, title, completed })
      res.status(201).json(newTodo)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      const { userId, title, completed } = req.body as Todo
      const updatedTodo = await this.todoService.update(id, { userId, title, completed })

      if (!updatedTodo) {
        res.status(404).json({ message: 'Todo not found' })
        return
      }

      res.status(200).json(updatedTodo)
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id)
      await this.todoService.delete(id)
      res.status(204).send()
    } catch (error: unknown) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
