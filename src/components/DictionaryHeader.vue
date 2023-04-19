<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="logo" />
    <div class="header__theme">
      <DropDown />
      <ThemeSwitcher />
      <img src="../assets/half-moon.svg" alt="moon" />
    </div>
  </div>
</template>

<script setup>
import DropDown from './DropDown.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__theme {
    display: flex;
    align-items: center;
  }
}
</style>
