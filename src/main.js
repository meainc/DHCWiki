import './assets/main.css'
import './assets/uikit.min.css'
import './assets/uikit.min.js'
import './assets/uikit-icons.min.js'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)


app.mount('#app')
