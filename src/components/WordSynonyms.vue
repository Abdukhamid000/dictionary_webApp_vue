<template>
    <div class="syn" v-show="syn.length">
        <span>Synonyms</span>
        <p v-for="(similiarWord, i) in syn" :key="i">{{ similiarWord }}</p>
    </div>
</template>

<script setup>

defineProps({
    syn: Array
})

</script>

<style lang="scss">
.syn {
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 16px;
    line-height: 20px;
    color: var(--purple);

    p {
        font-weight: 700;
    }

    span {
        font-size: 16px;
        line-height: 20px;
        color: var(--white-400);
    }
}
</style>