import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/Home/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/index.vue"),
  },
  {
    path: "/to-do",
    name: "toDo",
    component: () => import("../views/ToDo/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
