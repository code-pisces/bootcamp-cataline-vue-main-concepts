<template>
  <button :class="['button-styled', color]" @click="$emit('passarinho', 'calopsita')">
    <slot name="before"/>
    <!--Serve para por um componete dentro como se fosse o children-->
    {{ text }}
    <slot name="after"/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

type color = "sucess" | "danger" | "primary"

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    color: {
      type: String,
      default: "primary",
      validator: (value: color) => {
        return ["sucess", "danger", "primary"].includes(value)
      }
    },
  }
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>
