<template>
    <label class="switch">
        <input type="checkbox" @change="toggleTheme" checked="isToggleChecked" />
        <span class="switch__slider"></span>
    </label>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue'
const isDark = ref(false)
const isToggleChecked = ref(false)

const toggleTheme = (e) => {
    isDark.value = e.target.checked
}

onMounted(() => {
    if (localStorage.getItem('dark')) {
        document.body.classList.add(localStorage.getItem('dark'))
        if (localStorage.getItem('dark') === 'dark') isToggleChecked.value = true
    }
}),


    watch(isDark, (val) => {
        if (val) {
            document.body.classList.add('dark')
            localStorage.setItem('dark', 'dark')

        } else {
            console.log('work');
            document.body.classList.remove('dark')
            localStorage.setItem('dark', 'notDark')
            isToggleChecked.value = false
        }
    })

</script>

<style lang="css">
.dark {
    --white-100: #050505;
    --white-200: #1F1F1F;
    --black-200: #fff;
    --white-300: #3A3A3A;
}

.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
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
    -webkit-transition: .4s;
    transition: .4s;
}

.switch__slider:before {
    position: absolute;
    content: "";
    width: 14px;
    height: 14px;
    left: 4px;
    top: 3px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.switch__slider {
    background-color: var(--purple);
}

input:checked+.switch__slider:before {
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