<script setup lang="ts">
import Stepbar from './Stepbar.vue';


type HeaderFromProps = {
    title: string
    text?: string
    step: 1 | 2 | 3 | 4
}

const { title, text, step } = defineProps<HeaderFromProps>()

</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col text-left gap-4">
            <h3 class="font-inter font-normal text-medium-black text-2xl">{{ title }}</h3>
            <h5 class="font-inter font-normal text-shadow-grey text text-base">{{ text }}</h5>
        </div>
        <Stepbar :step="step" />
    </div>
</template>