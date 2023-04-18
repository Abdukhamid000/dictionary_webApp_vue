<template>
  <div class="test">
    <h1 class="test__text">hello</h1>
    <DictionaryApp />
  </div>
</template>

<script setup>
import DictionaryApp from './components/DictionaryApp.vue';


</script>

<style lang="scss">
.test {
  &__text {
    color: red;
  }
}
</style>