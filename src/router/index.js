import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddArticleView from '../views/AddArticleView.vue';
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddArticleView,
      props: false
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

export default router;
