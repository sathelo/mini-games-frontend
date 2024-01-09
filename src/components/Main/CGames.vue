<template>
  <section class="games">
    <article
      v-for="(game, gameIndex) in games"
      :key="gameIndex"
      class="games__game"
    >
      <a :href="game.href" :target="game.target" class="games__game-link">
        <img :src="game.img" alt="" class="games__game-img" />
        <h1 class="games__game-title">{{ game.name }}</h1>
      </a>
    </article>
  </section>
</template>

<script setup lang="ts">
import { TGame } from "@/components/Main/CGames.types";

interface IProps {
  games: TGame[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.games {
  @include flex-properties(flex);

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }

  &__game-link {
    @include flex-properties(flex, center);
    flex-direction: column;
  }

  &__game-img {
    width: 100%;
    max-width: 3.6rem;
    height: auto;
    user-select: none;
  }
}
</style>
