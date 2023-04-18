<template>
    <div>
        <DictionaryHeader />
        <SearchInput @save-input="userInput" />
        <WordTitle :title="wordInfo.word" :transcription="wordInfo.phonetic" />
        <h1 v-if="isLoading">Loading...</h1>
        <template v-else>
            <WordMeaning v-for="(meaning, i) in wordInfo.wordMeaning" :key="i" :type="meaning.partOfSpeech"
                :definitions="meaning.definitions" />
        </template>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
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

</script>

<style lang="scss" scoped></style>