<template>
  <ButtonStyled color="primary" text="Facebook" :user="user">
    <template v-slot:before>
      <i class="fab fa-facebook-f"></i>
    </template>
    <template v-slot:after>
      <i class="fab fa-facebook"></i>
    </template>
  </ButtonStyled>
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

<style scoped></style>
