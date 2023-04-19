<template>
  <div class="searchField">
    <input
      class="searchField__input"
      :value="inputVal"
      @input="debounced($event)"
      placeholder="Search for any word…"
      type="text"
      data-input
    />
    <img src="../assets/search.svg" alt="sarch" />
  </div>
</template>

<script setup>
import debounce from '../helper/debounce.js'
const emit = defineEmits(['save-input'])

defineProps({
  inputVal: String
})

const debounced = debounce((e) => {
  const val = e.target.value
  // if (val.trim() !== '') {
  e.target.style.border = '1px solid #a445ed'
  emit('save-input', val)
  // } else {
  //     e.target.style.border = '1px solid #ff5252'
  // }
}, 1000)
</script>

<style lang="scss" scoped>
.searchField {
  position: relative;
  margin-top: 50px;

  &__input {
    &.error {
      border: 1px solid var(--red);
    }

    // @include headingS(20px, 24px, 700);
    font-size: 20px;
    width: 100%;
    padding: 20px 24px;
    background: var(--white-200);
    color: var(--black-200);
    border-radius: 16px;
    outline: none;
    border: none;
    border: 1px solid var(--white-100);

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__input:focus {
    border: 1px solid #a445ed;
  }

  img {
    top: 23px;
    right: 20px;
    position: absolute;
  }
}
</style>
