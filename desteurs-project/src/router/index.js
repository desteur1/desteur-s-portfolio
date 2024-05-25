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
  ], //  i state my direction and behavior within my page here and call it in my router-link in app.vue. Note, this is for within the page. To scroll to the top of the page i gotta create a file call scroll.js in which i write my scrollToTop function
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
