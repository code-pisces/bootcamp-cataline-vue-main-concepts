import { createApp } from "vue"
import App from "./App.vue"
import highlight from "@/directives/highlight"
import ButtonStyled from "@/components/ButtonStyled.vue"

import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.component('ButtonStyled', ButtonStyled)
app.directive("highlight", highlight)

app.mount("#app")
