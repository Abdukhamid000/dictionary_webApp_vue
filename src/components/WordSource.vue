<template>
  <div v-show="source.length !== 0">
    <p class="source">Source: <a href="source[0]">{{ source[0] }}</a></p>
  </div>
</template>

<script setup>
defineProps(['source'])
</script>

<style lang="scss">
.source {
  font-size: 14px;
  line-height: 17px;
  color: var(--white-400);

  a {
    margin-left: 20px;
    text-decoration-line: underline;
  }

}
</style>
