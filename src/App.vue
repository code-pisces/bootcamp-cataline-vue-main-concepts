<template>
  <h1>Seus todos</h1>
  <ul>
    <li v-for="todo in doneTodos" :key="todo.text">
      {{ todo.text }}
    </li>
  </ul>

  <button @click="markAllLikeComplete">Marcar todos como concluídos</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

interface Todo {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    }
  },

  computed: {
    doneTodos(): Todo[] {
      const checkedToDos = this.todos.filter((value) => value.done === true)

      return checkedToDos
    }
  },
  watch: {
    todos(newValue: Todo[]) {
      const isFinished = newValue.some(({ done }) => !done)

      if (isFinished) {
        alert("Concluído")
      }
    }
  },
  created() {
    this.todos = [
      { text: "Estudar Typescript", done: true },
      { text: "Lavar os pratos", done: false },
      { text: "Aprender Nuxt.js", done: true }
    ]
  },
  methods: {
    markAllLikeComplete() {
      this.todos = this.todos.map(({ text }) => {
        return {
          text,
          done: true
        }
      })
    }
  }
})
</script>
