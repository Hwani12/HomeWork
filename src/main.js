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
    { name: 'board',path: '/board', component: BoardPage},
    { path: '/contact', component: ContactPage},
    
    { 
        name: 'Show', 
        path: '/board', 
        component: ShowPage,
        children:[
            { name: 'boardShow', path: 'show/:pageId?', component: ShowPage }
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$clientList = [
    {
        name: "이신영",
        age: "23세",
        address: "부산"
    },
    {
        name: "김치국",
        age: "28세",
        address: "진주"
    },
    {
        name: "송지후",
        age: "32세",
        address: "서울"
    },
    {
        name: "김춘삼",
        age: "54세",
        address: "수원"
    },
    {
        name: "손지수",
        age: "21세",
        address: "원주"
    },
    {
        name: "황유진",
        age: "30세",
        address: "대전"
    },
    {
        name: "남기철",
        age: "26세",
        address: "전주"
    },
    {
        name: "임성준",
        age: "42세",
        address: "창원"
    },
    {
        name: "신철민",
        age: "25세",
        address: "평택"
    },
    {
        name: "권영춘",
        age: "62세",
        address: "고성"
    },
    {
        name: "강민수",
        age: "33세",
        address: "인천"
    },
]