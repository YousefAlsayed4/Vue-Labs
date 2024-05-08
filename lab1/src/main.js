import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import home from "./components/home.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: "/", component: home },
 
  { path: "/:notFound(.*)*", component: home, meta: { notFound: true } },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
