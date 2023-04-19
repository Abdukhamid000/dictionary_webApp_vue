<template>
  <label class="switch">
    <input type="checkbox" v-model="isDark" />
    <span class="switch__slider"></span>
  </label>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue'
const isDark = ref(false)

onMounted(() => {
  if (localStorage.getItem('dark') === 'enabled') {
    document.body.classList.add('dark')
    isDark.value = true
  }
}),
  watch(isDark, (val) => {
    if (val) {
      document.body.classList.add('dark')
      localStorage.setItem('dark', 'enabled')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('dark', 'disabled')
    }
  })
</script>

<style lang="css">
.dark {
  --white-100: #050505;
  --white-200: #1f1f1f;
  --black-200: #fff;
  --white-300: #3a3a3a;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--white-400);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch__slider:before {
  position: absolute;
  content: '';
  width: 14px;
  height: 14px;
  left: 4px;
  top: 3px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .switch__slider {
  background-color: var(--purple);
}

input:checked + .switch__slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */

.switch__slider {
  border-radius: 10px;
}

.switch__slider:before {
  border-radius: 50%;
}
</style>
