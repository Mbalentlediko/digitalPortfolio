import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/assets/css/style.css'

const app = createApp(App)
app.use(store)
store.dispatch("fetchSkills")
app.use(router)
app.mount('#app')

