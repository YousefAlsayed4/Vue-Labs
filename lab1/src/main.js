import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomeComponent from './components/User/HomeComponent.vue';
import AddPost from './components/movies/addMovie.vue';
import  MoviesComponent from './components/movies/MoviesComponent.vue';
import MoviesDetailsCompnent from './components/movies/MovieDetails.vue'



const routes=[
    {
     path:'/',
     component:HomeComponent
    },
    {
     path:'/addmovie',
     component:AddPost
    },
    {
     path:'/addmovie/:id',
     component:AddPost
    },
    {
        path:'/Movies',
        component:MoviesComponent
    },
    {
        path:'/Movies/:id',
        component:MoviesDetailsCompnent
    }
   
]

let router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
