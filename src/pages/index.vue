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

const games = ref<TGame[]>([
  {
    name: "Крестики нолики",
    img: TicTacToeIco,
    target: "_self",
  },
  {
    name: "Морской бой",
    img: SeaBattleIco,
    target: "_self",
  },
  {
    name: "Три в ряд",
    img: ThreeInARowIco,
    target: "_self",
  },
]);
</script>

<style lang="scss" scoped></style>
