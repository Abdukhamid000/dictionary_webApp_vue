<template>
  <div class="error">
    <h2 class="error__title">
      <p class="error__imoji">😢</p>
      SORRY, WE COUD NOT FIND!
    </h2>
    <p class="error__msg">
      Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
      search again at later time or head to the web instead.
    </p>
  </div>
</template>

<script setup>
defineProps({
  errorMessage: String
})
</script>

<style lang="scss">
.error {
  margin-top: 132px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: var(--black-200);
  }

  &__imoji {
    margin-bottom: 54px;
    font-size: 64px;
  }

  &__msg {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--white-400);
    text-align: center;
    margin-top: 24px;
  }
}
</style>
