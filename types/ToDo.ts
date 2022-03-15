export type TodoStatus = 'doing' | 'done' | 'archived'

export interface ToDo {
  /** The uid of the todo */
  id: string
  /** The text of the todo */
  text: string
  /** The status of the todo (to-do, done, etc) */
  status: TodoStatus
  /** The last time it was updated */
  updatedTimestamp: string
}
