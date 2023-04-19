<template>
  <div class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo" />
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
.logo {
  cursor: pointer;
}

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
