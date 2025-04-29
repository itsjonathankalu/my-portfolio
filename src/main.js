import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

// Create the app instance
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

// Mount the app
app.mount('#app')
