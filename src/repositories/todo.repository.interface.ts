import type { Todo } from '@/types'

export interface TodoRepositoryInterface {
  getAllTodo: () => Promise<Todo[]>
  getTodoById: (id: number) => Promise<Todo | null>
  createTodo: (values: Pick<Todo, 'userId' | 'title' | 'completed'>) => Promise<Todo>
  updateTodo: (id: number, values: Pick<Todo, 'userId' | 'title' | 'completed'>) => Promise<Todo>
  deleteTodo: (id: number) => Promise<void>
}
