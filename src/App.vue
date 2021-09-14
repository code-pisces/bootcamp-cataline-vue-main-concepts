<template>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'Contact'">Contact</li>
    <li @click="view = 'About'">About</li>
  </ul>
  <!--Para criar isso usei ul>li*3 - mind blowing-->

  <transition
    enter-active-class="animate__animated animate__fadeIn"
    :appear="true"
    leave-active-class="animate__animated animate__fadeOut"
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Contact from "@/pages/Contact.vue"

import "animate.css"

export default defineComponent({
  components: {
    Home,
    About,
    Contact
  },
  data() {
    return {
      view: "Home"
    }
  }
})
</script>
