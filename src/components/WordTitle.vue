<template>
  <div class="word-info-header">
    <div class="title">
      <h1 class="title__text">{{ title }}</h1>
      <p class="title__transcription">{{ transcription }}</p>
    </div>
    <div class="voice" v-show="audio" @click="playAudio">
      <img src="../assets/play.svg" alt="play" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  transcription: String,
  audio: Array
})

const playAudio = () => {
  const playBtn = new Audio(props.audio[0].audio)
  playBtn.play()
}
</script>

<style lang="scss">
.word-info-header {
  margin-top: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.voice {
  width: 75px;
  height: 75px;
  // background-color: #2c153f;
  background-color: #E8D1FB;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    img {
      width: 13px;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.title {
  &__text {
    font-weight: 700;
    font-size: 64px;
    line-height: 82px;
    color: var(--black-200);

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 41px;
    }
  }

  &__transcription {
    margin-top: 5px;
    font-size: 24px;
    line-height: 29px;
    color: var(--purple);

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>
