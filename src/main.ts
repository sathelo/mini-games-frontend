import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";

import "@/assets/styles/index.scss";

createApp(App).use(router).mount("#app");
