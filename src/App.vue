<template>
  <ButtonStyled color="primary" @passarinho="action($event)" text="Facebook">

  </ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
    }
  },
  methods: {
    action(event: string) {
      console.log(event)
    }
  }
})
</script>

<style scoped></style>
