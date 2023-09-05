import { createApp } from 'vue'
import './style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './pages/Homepage.vue'
import StudentPage from './pages/StudentPage.vue'
import App from './App.vue'

const routes = [
    {path: '/', redirect: '/homepage'},
    {path: '/homepage', component: Homepage},
    {path: '/homepage/student', component: StudentPage},
    {path: '/homepage/tutor', component: Homepage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(plugin, defaultConfig).use(router).mount('#app')
