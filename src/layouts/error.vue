<template>
  <div class="not-found">
    <div class="not-found__info">
      <span class="not-found__status">404</span>
      <p class="not-found__message">Страница не найдена!</p>
    </div>

    <a href="/" target="_self" class="not-found__btn">Вернуться на главную</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.not-found {
  @include flex-properties(flex, center, center);
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;

  &__info {
    position: relative;
    margin-bottom: 4rem;
  }

  &__status {
    @include text-error-status;
    @include fade(var(--white), 0.1);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    user-select: none;
  }

  &__message {
    @include text-error;
    color: var(--white);
  }

  &__btn {
    @include text-error;
    background: var(--bg-white-dim);
    border-radius: 1rem;
    padding: 1.6rem;
  }
}
</style>
