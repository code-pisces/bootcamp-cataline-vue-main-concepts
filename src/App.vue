<template>
  <h1>{{ count }}</h1>
  <button @click="count++">incrementar</button>
  <button @click="destroyComponent">desmontar</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },

  beforeCreate() {
    console.log("Antes da criação")
  },

  created() {
    console.log("Depois da criação")
  },

  beforeMount() {
    console.log(this.$el)
  },

  mounted() {
    console.log(this.$el)
  },

  beforeUpdate() {
    // console.log("Antes da atualização")
  },

  updated() {
    if (this.count === 5) this.count = 6
  },

  beforeUnmount() {
    console.log("salvar a contagem no db")
  },

  unmounted() {
    alert("Obrigado por utilizar o contador!")
  },

  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount()
    }
  }
})
</script>
