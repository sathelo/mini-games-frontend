<template>
  <main class="game">
    <h1 class="game__title">Крестики Нолики</h1>

    <span class="game__status">{{ status }}</span>

    <div
      v-if="calculateWinner || board.every((cell) => cell != null)"
      class="game__actions"
    >
      <button class="game__revenge">Взять реванш</button>
      <button class="game__find-another-opponent">
        Найти другого соперника
      </button>
    </div>

    <div class="game__board">
      <div
        class="game__square"
        v-for="(cell, cellIndex) in board"
        :key="cellIndex"
        @click="chooseCell(cellIndex)"
      >
        {{ cell }}
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const board = ref(Array(9).fill(null));
const xIsNext = ref(true);

function chooseCell(index: number) {
  if (calculateWinner.value || board.value[index]) return;
  board.value[index] = xIsNext.value ? "X" : "O";
  xIsNext.value = !xIsNext.value;
}

const status = computed(() => {
  if (calculateWinner.value) return `Победитель ${calculateWinner.value}`;
  else if (board.value.every((cell) => cell != null)) return "Ничья";
  else {
    return `Ходит ${xIsNext.value ? "X" : "O"}`;
  }
});

const calculateWinner = computed(() => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    ) {
      return board.value[a];
    }
  }
  return null;
});
</script>

<style lang="scss" scoped>
.game {
  @include flex-properties(flex, center, center);
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  &__actions {
    @include flex-properties(flex);

    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
  }

  &__revenge,
  &__find-another-opponent {
    @include text-title;
  }

  &__board {
    display: grid;
    grid-template-columns: repeat(3, 6.25vw);
    grid-template-rows: repeat(3, 6.25vw);
  }

  &__square {
    @include text-title;
    @include flex-properties(flex, center, center);
    border: 1px solid var(--white);
    cursor: pointer;
  }
}
</style>
