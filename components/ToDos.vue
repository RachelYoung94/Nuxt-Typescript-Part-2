<template>
  <div class="">
    <div class="bg-primary-400 px-4 py-2 rounded-md">
      <div class="flex w-full my-4">
        <div class="flex-grow mr-4">
          <input
            v-model="newTodoText"
            class="text-2xl font-bold p-2 w-full rounded-md shadow-lg h-14"
            placeholder="Add new todo"
            @keyup.enter="addTheTodo()"
          />
        </div>
        <div class="flex-shrink">
          <HButton class="h-14 px-6 bg-secondary-500 hover:bg-secondary-400" @click="addTheTodo()">
            Add
          </HButton>
        </div>
      </div>
      <div
        v-for="todo in doingTodos"
        :key="todo.id"
        class="bg-secondary-500 my-4 rounded-md p-4 text-white font-bold text-2xl flex w-full items-center shadow-lg"
      >
        <div class="flex-grow">
          {{ todo.text }}
        </div>
        <div class="flex-shrink">
          <HButton @click="markTodoAsDone(todo.id)"> Mark as done! </HButton>
        </div>
      </div>
    </div>

    <!-- Done! -->
    <div class="bg-gray-300 px-4 py-2 rounded-md mt-10">
      <div class="flex text-3xl font-bold">Done things:</div>
      <div v-if="!doneTodos.length">Looks like you've done nothing...</div>
      <div
        v-for="todo in doneTodos"
        :key="todo.id"
        class="bg-gray-400 my-4 rounded-md p-4 text-white font-bold text-2xl flex w-full items-center shadow-lg"
      >
        <div class="flex-grow">
          {{ todo.text }}
        </div>
        <div class="flex-shrink">
          <HButton class="bg-gray-500 hover:bg-gray-600" @click="markTodoAsDoing(todo.id)"> Un-do! </HButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useTodos } from '~/composables/useToDos'
export default defineComponent({
  setup() {
    const { doingTodos, doneTodos, archivedTodos, markTodoAsDone, markTodoAsDoing, archiveTodo, addTodo } =
      useTodos()

    const newTodoText = ref('')

    const addTheTodo = () => {
      if (newTodoText.value) {
        addTodo(newTodoText.value)
        newTodoText.value = ''
      }
    }

    return {
      doingTodos,
      doneTodos,
      archivedTodos,
      markTodoAsDone,
      markTodoAsDoing,
      archiveTodo,
      newTodoText,
      addTheTodo
    }
  }
})
</script>

<style lang="scss" scoped></style>
