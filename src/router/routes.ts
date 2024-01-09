import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from "@/layouts/default.vue";
import ErrorLayout from "@/layouts/error.vue";
import HomePage from "@/pages/index.vue";
import TicTacToePage from "@/pages/ticTacToe.vue";
import SeaBattlePage from "@/pages/seaBattle.vue";
import ThreeInARowPage from "@/pages/threeInARow.vue";

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
        path: "/mini-games",
        name: ERoutes.miniGames,
        children: [
          {
            path: "tic-tac-toe",
            name: ERoutes.ticTacToe,
            component: TicTacToePage,
          },
          {
            path: "sea-battle",
            name: ERoutes.seaBattle,
            component: SeaBattlePage,
          },
          {
            path: "three-in-a-row",
            name: ERoutes.threeInARow,
            component: ThreeInARowPage,
          },
        ],
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
