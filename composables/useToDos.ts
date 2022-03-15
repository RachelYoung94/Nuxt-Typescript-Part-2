import { ref, computed } from '@vue/composition-api'
import { nanoid } from 'nanoid'
import { ToDo, TodoStatus } from '~/types/ToDo'

export const useTodos = () => {
  const allTodos = ref<ToDo[]>([
    { id: nanoid(), text: 'Do somethig', status: 'doing', updatedTimestamp: new Date().toISOString() },
    { id: nanoid(), text: 'Do somethig else', status: 'doing', updatedTimestamp: new Date().toISOString() },
    { id: nanoid(), text: 'Do another thing', status: 'doing', updatedTimestamp: new Date().toISOString() }
  ])

  const archivedTodos = computed(() => {
    return allTodos.value.filter((x) => x.status === 'archived')
  })

  const doneTodos = computed(() => {
    return allTodos.value.filter((x) => x.status === 'done')
  })

  const doingTodos = computed(() => {
    return allTodos.value.filter((x) => x.status === 'doing')
  })

  const addTodo = (text: string) => {
    const todo: ToDo = {
      id: nanoid(),
      status: 'doing',
      text,
      updatedTimestamp: new Date().toISOString()
    }

    allTodos.value.unshift(todo)
  }

  const updateTodoStatus = (id: string, status: TodoStatus) => {
    const theTodoIndex = allTodos.value.findIndex((x) => x.id === id)
    // handle not found
    if (theTodoIndex === -1) {
      return console.error(`Todo with id ${id} not found.`)
    }

    // make a new todo object out of the existing one
    const newTodo = { ...allTodos.value[theTodoIndex] }
    // set the new status
    newTodo.status = status
    // update the all todos array
    allTodos.value.splice(theTodoIndex, 1, newTodo)
  }

  const archiveTodo = (id: string) => {
    return updateTodoStatus(id, 'archived')
  }

  const markTodoAsDone = (id: string) => {
    return updateTodoStatus(id, 'done')
  }

  const markTodoAsDoing = (id: string) => {
    return updateTodoStatus(id, 'doing')
  }

  return {
    /**
     * All the todos
     */
    allTodos,
    /**
     * Computed prop of all the 'doing' status todos
     */
    doingTodos,
    /**
     * Computed prop of all the 'done' status todos
     */
    doneTodos,
    /**
     * Computed prop of all the 'archived' status todos
     */
    archivedTodos,
    /** Add a new todo */
    addTodo,
    markTodoAsDone,
    markTodoAsDoing,
    archiveTodo,
    updateTodoStatus
  }
}
