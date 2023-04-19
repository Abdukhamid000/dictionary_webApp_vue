<template>
  <div class="word-definition">
    <p class="word-definition__type">
      {{ type }}
      <span class="word-definition__line"></span>
    </p>
    <h4 class="word-definition__title">Meaning</h4>
    <div v-for="(def, i) in definitions" :key="i" class="word-definition__wrapper">
      <p class="word-definition__text"><span></span> {{ def.definition }}</p>
      <small class="word-definition__example">{{ def.example }}</small>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: String,
  definitions: Array
})
</script>

<style lang="scss">
.word-definition {
  margin-top: 39px;

  &__wrapper {
    margin-bottom: 13px;
  }

  &__title {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 26px;
    color: var(--white-400);
  }

  &__example {
    font-size: 18px;
    line-height: 24px;
    color: var(--white-400);
    padding-bottom: 13px;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  &__type {
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 24px;
    line-height: 29px;
    color: var(--black-200);

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 23px;
    }
  }

  &__line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--white-300);
  }

  &__text {
    font-size: 18px;
    line-height: 24px;
    color: var(--black-200);
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    column-gap: 20px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    span {
      display: block;
      width: 5px;
      height: 5px;
      background-color: var(--purple);
      border-radius: 50%;
    }
  }
}
</style>
