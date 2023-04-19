<template>
  <DictionaryHeader />
  <SearchInput @save-input="userInput" :inputVal="searchVal" />
  <NoDefintionFound v-if="isError" />
  <template v-else>
    <svg v-if="isLoading" class="loader">
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
    <template v-else>
      <WordTitle :title="wordInfo.word" :transcription="wordInfo.phonetic" :audio="foundAudio" />
      <WordMeaning v-for="(meaning, i) in wordInfo.wordMeaning" :key="i" :type="meaning.partOfSpeech"
        :definitions="meaning.definitions" />
      <WordSynonyms :syn="wordInfo.synonyms" />
    </template>
  </template>
  <WordSource v-if="haveSource && !isError" />
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import DictionaryHeader from '../components/DictionaryHeader.vue'
import SearchInput from '../components/SearchInput.vue'
import WordMeaning from '../components/WordMeaning.vue'
import WordTitle from '../components/WordTitle.vue'
import NoDefintionFound from '../components/NoDefinitionFound.vue'
import WordSource from '../components/WordSource.vue'
import { useRoute, useRouter } from 'vue-router'
import WordSynonyms from '../components/WordSynonyms.vue'

const searchVal = ref()
const route = useRoute()
const router = useRouter()
const wordInfo = reactive({
  wordMeaning: [],
  word: '',
  phonetic: '',
  audio: null,
  synonyms: ''
})
const isLoading = ref(false)
const isError = ref(false)
const haveSource = ref(false)
const getWordInfo = async (word) => {
  if (word) {
    router.push({ query: { word } })
    isLoading.value = true
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${word}`)
      const data = await res.json()
      if (res.status === 404) {
        throw new Error(data.title)
      }
      isError.value = false
      wordInfo.phonetic = data[0].phonetic
      wordInfo.audio = data[0].phonetics
      wordInfo.wordMeaning = data[0].meanings
      wordInfo.word = data[0].word
      wordInfo.synonyms = data[0].meanings[0].synonyms
      haveSource.value = true
      isLoading.value = false
    } catch (err) {
      isLoading.value = false
      isError.value = true
    }
  }
}
const userInput = (val) => {
  isLoading.value = true
  getWordInfo(val)
}
const foundAudio = computed(() => {
  return wordInfo.audio?.filter((item) => item.audio !== '')
})

onMounted(() => {
  const query = route.query.word
  getWordInfo(query)
  haveSource.value = false
  searchVal.value = query
})
</script>

<style lang="css" scoped>
.loader {
  position: absolute;
  top: 300px;
  left: 38%;
  transform: translate(-50%, 50%);
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
    stroke-dashoffset: 440;
  }

  50% {
    stroke-dashoffset: 0;
  }

  50.1% {
    stroke-dashoffset: 880;
  }
}
</style>
