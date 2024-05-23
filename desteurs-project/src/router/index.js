import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeSpaceView from "../views/HomeSpaceView.vue";
import FormView from "../views/FormView.vue";
import myCV from "../views/MyCvView.vue";
import ContactForm from "../components/ContactForm.vue";
import FooterEdge from "../components/FooterEdge.vue";
import PageNotFound from "../components/PageNotFound";
import { scrollToTop } from "@/utils/scroll";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/myCV",
      name: "myCV",
      component: myCV,
    },

    {
      path: "/HomeSpace",
      name: "HomeSpace",
      component: HomeSpaceView,
    },

    {
      path: "/FormView",
      name: "FormView",
      component: FormView,
    },
    {
      path: "/ContactForm",
      name: "ContactForm",
      component: ContactForm,
    },
    {
      path: "/FooterEdge",
      name: "FooterEdge",
      component: FooterEdge,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      scrollToTop;
    }
  },
});

export default router;
