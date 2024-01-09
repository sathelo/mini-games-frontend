<template>
  <section class="games">
    <article
      v-for="(game, gameIndex) in games"
      :key="gameIndex"
      class="games__game"
      @click="$router.push({ path: `${ERoutes.miniGames}/${game.routesName}` })"
    >
      <img :src="game.img" alt="" class="games__game-img" />
      <h1 class="games__game-title">{{ game.name }}</h1>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ERoutes } from "@/router/routes.types";
import { TGame } from "@/components/Main/CGames.types";

interface IProps {
  games: TGame[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.games {
  @include flex-properties(flex);
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 3.2rem;
  }

  &__game {
    @include flex-properties(flex, center);
    flex-direction: column;
    cursor: pointer;
  }

  &__game-img {
    width: 100%;
    max-width: 16vw;
    margin-bottom: 1rem;
    user-select: none;
  }
}
</style>
