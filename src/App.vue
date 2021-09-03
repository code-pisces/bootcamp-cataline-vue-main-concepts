<template>
  <!--
  <a href="ainterno" @click.once.prevent="something">link interno</a>
  -->
  <input type="text" @keyup.k="something">
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  methods: {
    something() {
      console.log("Hello Cataline")
    }
  }
})
</script>
