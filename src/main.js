import { createApp } from 'vue'
import { createRouter, createWebHistory}from 'vue-router'
import App from './App.vue'
import MainPage from './homework/MainPage.vue'
import AboutPage from './homework/AboutPage.vue'
import BoardPage from './homework/BoardPage.vue'
import ShowPage from './homework/ShowPage.vue'
import ContactPage from './homework/ContactPage.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage},
    { path: '/board', component: BoardPage},
    { path: '/board/show', component: ShowPage},
    { path: '/contact', component: ContactPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')