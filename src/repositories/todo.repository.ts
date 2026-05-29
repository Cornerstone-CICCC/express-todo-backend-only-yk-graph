import data from '../../data/todos.json'

import type { TodoRepositoryInterface } from '@/repositories/todo.repository.interface'
import type { Todo } from '@/types'

export class TodoRepository implements TodoRepositoryInterface {
  getAllTodo = async (): Promise<Todo[]> => {
    return data
  }

  getTodoById = async (id: number): Promise<Todo | null> => {
    const todo = data.find((todo) => todo.id === id)
    return todo || null
  }

  createTodo = async (values: Pick<Todo, 'userId' | 'title' | 'completed'>): Promise<Todo> => {
    const newTodo: Todo = {
      id: data.length + 1,
      userId: values.userId,
      title: values.title,
      completed: values.completed,
    }
    data.push(newTodo)
    return newTodo
  }

  updateTodo = async (id: number, values: Pick<Todo, 'userId' | 'title' | 'completed'>): Promise<Todo> => {
    const todo = data.find((todo) => todo.id === id)

    if (!todo) {
      throw new Error('Todo not found')
    }

    const replacedTodo: Todo = { id, ...values }
    Object.assign(todo, replacedTodo)
    return replacedTodo
  }

  deleteTodo = async (id: number): Promise<void> => {
    const index = data.findIndex((todo) => todo.id === id)

    if (index === -1) {
      throw new Error('Todo not found')
    }

    data.splice(index, 1)
  }
}
