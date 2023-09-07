import { createApp } from 'vue'
import './style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './pages/Homepage.vue'
import StudentPage from './pages/StudentPage.vue'
import TutorPage from './pages/TutorPage.vue'
import App from './App.vue'
import config from '../formkit-config'

const routes = [
    {path: '/', redirect: '/signup'},
    {path: '/signup', component: Homepage},
    {path: '/signup/student', component: StudentPage},
    {path: '/signup/tutor', component: TutorPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(plugin, defaultConfig(config)).use(router).mount('#app')
