import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'  //TODO zarządzanie stanem na wypadek restartu lub wyłączenia serwera

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
