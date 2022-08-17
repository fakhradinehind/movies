import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'


axios.defaults.baseURL = 'http://localhost:8000/api'
store.dispatch('attemp',localStorage.getItem('user-info'))
createApp(App).use(store).use(router).mount('#app')
