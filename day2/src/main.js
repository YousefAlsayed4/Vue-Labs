import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './Components/MainPage.vue'
import EditPost from './Components/EditPost.vue'
import AddPost from './Components/AddPost.vue'
import PostDetails from './Components/PostDetails.vue'
import CompPosts from '../src/Components/Composition/CompPosts.vue'

let routes= [
    { path: '/', component: MainPage },
    { path: '/edit/:id', component: EditPost },
    { path: '/add', component: AddPost },
    { path: '/post/:id', component: PostDetails },
    {path: '/composition', component: CompPosts}
]

let router = createRouter({
    history: createWebHistory(),
    routes
})



createApp(App).use(store).use(router).mount('#app')
