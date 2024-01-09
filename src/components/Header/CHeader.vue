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

    <span class="header__online-users">Сейчас на сайте: {{ onlineUsers }}</span>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import MiniGamesLogo from "@/assets/images/logos/mini-games-logo.svg";

import { TMenuAction } from "@/components/Header/CHeader.types";

const menu: TMenuAction[] = [
  {
    name: "Главная",
    href: "/",
    target: "_self",
  },
];

const onlineUsers = ref(0);
const ws = new WebSocket("ws://localhost:8080");
ws.onmessage = function (event) {
  const data = JSON.parse(event.data);
  onlineUsers.value = data.onlineUsers;
};
</script>

<style lang="scss" scoped>
.header {
  @include flex-properties(flex, center, space-between);

  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }

  &__logo-ico {
    width: 100%;
    max-width: 6.6vw;
    height: auto;
    fill: var(--white);
  }
}
</style>
