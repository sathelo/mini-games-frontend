<template>
  <header class="header">
    <a href="/" class="header__logo">
      <MiniGamesLogo class="header__logo-ico" />
    </a>

    <nav class="header__list">
      <ul class="header__actions">
        <li
          v-for="(action, actionIndex) in menu"
          :key="actionIndex"
          class="header__action"
        >
          <a :href="action.href" :target="action.target">
            {{ action.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import MiniGamesLogo from "@/assets/images/logos/mini-games-logo.svg";

import { TMenuAction } from "@/components/Header/CHeader.types";

const menu: TMenuAction[] = [
  {
    name: "Главная",
    href: "/",
    target: "_self",
  },
];
</script>

<style lang="scss" scoped>
.header {
  @include flex-properties(flex, center, space-between);

  &__logo-ico {
    width: 100%;
    max-width: 3.6rem;
    height: auto;
    fill: var(--white);
  }
}
</style>
