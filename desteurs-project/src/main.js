import { createApp } from "vue";
import myCV from "./views/MyCvView.vue";
import HomeView from "./views/HomeView.vue";
import HomeSpace from "./views/HomeSpaceView.vue";
import FormView from "./views/FormView.vue";

import vueScrollTo from "vue-scrollto";
import PageNotFound from "./components/PageNotFound";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.component("myCV", myCV);
app.component("HomeView", HomeView);
app.component("HomeSpace", HomeSpace);
app.component("FormView", FormView);
app.component("vueScrollTo", vueScrollTo);
app.component("PageNotFound", PageNotFound);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount("#app");
