<template>
    <div class="dropdown">
        <input type="checkbox" id="dropdown" @change="closeDropdown" />
        <label class="dropdown__face" for="dropdown">
            <div style="display: flex; align-items: center; gap: 16px">
                <div class="dropdown__text" data-dropdown-text>{{ font }}</div>
                <img src="../assets/arrow.svg" alt="" />
            </div>
            <!-- <div class="dropdown__arrow"></div> -->
        </label>
        <ul class="dropdown__items" @click="choseOption" data-dropdown-items>
            <li data-sans-serif>Sans Serif</li>
            <li data-serif>Serif</li>
            <li data-mono>Mono</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const font = ref('Sans Serif')
let eve = null

const closeDropdown = (e) => {
    eve = e
}

const choseOption = (e) => {
    if (e.target.tagName === "LI") {
        font.value = e.target.textContent
        eve.target.checked = false
    }
}

</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    // @include bodyM(18px, 24px, 700);
    font-size: 18px;
    line-height: 24px;
    font-weight: 700px;
    padding-right: 26px;
    margin-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-right: 1px solid #E9E9E9;

    &__text {
        color: var(--black-200);
    }

    &__face,
    &__items {
        border-radius: 25px;
        cursor: pointer;
    }

    &__face {
        display: block;
        position: relative;
    }

    &__items {
        margin: 0;
        padding: 24px;
        width: 183px;
        height: 152px;
        position: absolute;
        right: 0;
        top: 50%;
        visibility: hidden;
        z-index: -1;
        display: flex;
        flex-direction: column;
        background: var(--white-100);
        color: var(--black-300);
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        gap: 16px;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.93, 0.88, 0.1, 0.8);

        li:first-child {
            font-family: "Lora, serif";
        }

        li:nth-child(2) {
            font-family: "Lora, serif";
        }
    }


    &__arrow {
        border-bottom: 2px solid var(--purple);
        border-right: 2px solid var(--purple);
        position: absolute;
        top: 50%;
        right: 30px;
        width: 12px;
        height: 6px;
        transform: rotate(45deg) translateY(-50%);
        transform-origin: right;
    }

    input {
        display: none;

        &:checked~.dropdown__items {
            top: calc(100%);
            z-index: 99;
            visibility: visible;
            opacity: 1;
        }


    }
}
</style>