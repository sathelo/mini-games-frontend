<template>
  <footer class="footer">
    <p class="footer__copyright">
      &copy;&nbsp;Mini Games {{ outputYearString }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const yearCreatedSite = ref(2024);
const currentYear = computed(() => new Date().getFullYear());
const outputYearString = computed(() =>
  yearCreatedSite.value !== currentYear.value
    ? `${yearCreatedSite.value} - ${currentYear.value}`
    : yearCreatedSite.value
);
</script>

<style lang="scss" scoped>
.footer {
  @include flex-properties(flex, center, center);
  width: 100%;
}
</style>
