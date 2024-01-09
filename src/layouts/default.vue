<template>
  <div class="base-layout container">
    <CHeader />
    <router-view />
    <CFooter />
  </div>
</template>

<script setup lang="ts">
import CFooter from "@/components/Footer/CFooter.vue";
import CHeader from "@/components/Header/CHeader.vue";
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem 3.6rem;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
}
</style>
