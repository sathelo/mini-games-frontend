import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layouts/default.vue";
import ErrorLayout from "@/layouts/error.vue";
import HomePage from "@/pages/index.vue";

import { ERoutes } from "@/router/routes.types";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: ERoutes.home,
        component: HomePage,
      },
      {
        path: "",
        name: ERoutes.ticTacToe,
        component: HomePage,
      },
      {
        path: "",
        name: ERoutes.seaBattle,
        component: HomePage,
      },
      {
        path: "",
        name: ERoutes.threeInARow,
        component: HomePage,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: ERoutes.notFound,
    component: ErrorLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
