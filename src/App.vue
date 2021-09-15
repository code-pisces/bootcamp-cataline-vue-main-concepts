<template>
  <button @click="filterAZ">Filter A-Z</button>
  <button @click="filterZA">Filter Z-A</button>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'Contact'">Contact</li>
    <li @click="view = 'About'">About</li>
  </ul>
  <!--Para criar isso usei ul>li*3 - mind blowing-->

  <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    :appear="true"
    leave-active-class="animate__animated animate__fadeOut"
    mode="out-in"
  >
    <li v-for="user in users" :key="user">{{ user }}</li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import "animate.css"

export default defineComponent({
  data() {
    return {
      users: ["Yung", "João", "Carlos", "Caio", "Ricardo", "Zelda"]
    }
  },

  methods: {
    filterAZ() {
      this.users.sort()
    },

    filterZA() {
      this.users.sort().reverse()
    }
  }
})
</script>

<style scoped>
.v-move {
  transition: transform 0.2s;
}
</style>
