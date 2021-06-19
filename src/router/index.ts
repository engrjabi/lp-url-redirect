import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Vue from "vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/reservation/:id",
    name: "reservation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reservation.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calendar.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
