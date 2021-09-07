<template>
  <ButtonStyled color="danger" text="Cadastro" :user="user" />
  <ButtonStyled :text="123" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ButtonStyled from "@/components/ButtonStyled.vue"

export default defineComponent({
  components: { ButtonStyled },
  data() {
    return {
      user: {
        id: 1,
        name: ""
      }
    }
  }
})
</script>

<style scoped>
</style>
