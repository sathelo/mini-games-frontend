<template>
  <main class="main">
    <CGames class="main__games" :games="games" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CGames from "@/components/Main/CGames.vue";
import TicTacToeIco from "@/assets/images/icons/tic-tac-toe-ico.png";
import SeaBattleIco from "@/assets/images/icons/sea-battle-ico.png";
import ThreeInARowIco from "@/assets/images/icons/three-in-a-row-ico.png";

import { TGame } from "@/components/Main/CGames.types";
import { ERoutes } from "@/router/routes.types";

const games = ref<TGame[]>([
  {
    name: "Крестики нолики",
    img: TicTacToeIco,
    routesName: ERoutes.ticTacToe,
  },
  {
    name: "Морской бой",
    img: SeaBattleIco,
    routesName: ERoutes.seaBattle,
  },
  {
    name: "Три в ряд",
    img: ThreeInARowIco,
    routesName: ERoutes.threeInARow,
  },
]);
</script>

<style lang="scss" scoped></style>
