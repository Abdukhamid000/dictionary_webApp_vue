<template>
    <div>
        <DictionaryHeader />
        <SearchInput @save-input="userInput" />

        <svg v-if="isLoading" class="loader">
            <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <template v-else>
            <WordTitle :title="wordInfo.word" :transcription="wordInfo.phonetic" :audio="foundAudio" />
            <WordMeaning v-for="(meaning, i) in wordInfo.wordMeaning" :key="i" :type="meaning.partOfSpeech"
                :definitions="meaning.definitions" />
        </template>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import DictionaryHeader from './DictionaryHeader.vue';
import SearchInput from './SearchInput.vue';
import WordMeaning from './WordMeaning.vue';
import WordTitle from './WordTitle.vue'

const wordInfo = reactive({
    wordMeaning: [],
    word: '',
    phonetic: '',
    audio: null,
})

const isLoading = ref(false)

const getWordInfo = async (word) => {
    isLoading.value = true
    try {
        const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${word}`);
        const data = await res.json()

        if (res.status === 404) {
            throw new Error(data.title)
        }

        console.log(data);
        wordInfo.phonetic = data[0].phonetic
        wordInfo.audio = data[0].phonetics
        wordInfo.wordMeaning = data[0].meanings
        wordInfo.word = data[0].word
        isLoading.value = false

    } catch (err) {
        isLoading.value = false
        console.log(err.message);
    }
}

const userInput = (val) => {
    isLoading.value = true
    getWordInfo(val).then(() => console.log(wordInfo.wordMeaning))
}

const foundAudio = computed(() => {

    return wordInfo.audio?.filter(item => item.audio !== '')
})

</script>

<style lang="css" scoped>
.loader {
    position: relative;
    width: 150px;
    hegiht: 150px;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke: #00a1ff;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    animation: animate 4s linear infinite;
}

@keyframes animate {

    0%,
    100% {
        stroke-dashoffset: 440
    }

    50% {
        stroke-dashoffset: 0
    }

    50.1% {
        stroke-dashoffset: 880
    }
}
</style>