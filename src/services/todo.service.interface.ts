import type { Todo } from '@/types'

export interface TodoServiceInterface {
  getTodos(): Promise<Todo[]>
  getTodoById(id: number): Promise<Todo | null>
  create(values: Pick<Todo, 'userId' | 'title' | 'completed'>): Promise<Todo>
  update(id: number, values: Pick<Todo, 'userId' | 'title' | 'completed'>): Promise<Todo>
  delete(id: number): Promise<void>
}
