import type { TodoRepositoryInterface } from '@/repositories/todo.repository.interface'
import type { TodoServiceInterface } from '@/services/todo.service.interface'
import type { Todo } from '@/types'

export class TodoService implements TodoServiceInterface {
  constructor(private readonly todoRepository: TodoRepositoryInterface) {}

  getTodos = async () => {
    return this.todoRepository.getAllTodo()
  }

  getTodoById = async (id: number) => {
    return this.todoRepository.getTodoById(id)
  }

  create = async (values: Pick<Todo, 'userId' | 'title' | 'completed'>) => {
    return this.todoRepository.createTodo(values)
  }

  update = async (id: number, values: Pick<Todo, 'userId' | 'title' | 'completed'>) => {
    return this.todoRepository.updateTodo(id, values)
  }

  delete = async (id: number) => {
    return this.todoRepository.deleteTodo(id)
  }
}
