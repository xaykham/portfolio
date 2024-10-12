import { createRouter, createWebHistory } from "vue-router";
import IndexDarkView from "../views/IndexDarkView.vue";
import IndexView from "../views/IndexView.vue";
import IntroView from "../views/IntroView.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: IndexView,
  },
  {
    path: "/dark",
    name: "IndexDarkView",
    component: IndexDarkView,
  },
  {
    path: "/intro",
    name: "IntroView",
    component: IntroView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
