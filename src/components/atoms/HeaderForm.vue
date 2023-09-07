<script setup lang="ts">

type HeaderFromProps = {
    title: string
    text?: string
}

const { title, text } = defineProps<HeaderFromProps>()

</script>

<template>
    <div class="flex flex-col text-left gap-4">
        <h3 class="font-inter font-normal text-medium-black text-2xl">{{ title }}</h3>
        <h5 class="font-inter font-normal text-shadow-grey text text-base">{{ text }}</h5>
    </div>
</template>