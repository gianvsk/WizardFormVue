<script setup lang="ts">

    type FormSeparatorProps = {
        text: string
    }

    const {text} = defineProps<FormSeparatorProps>()

</script>

<template>
    <div class="flex h-4.5 items-center justify-around gap-4">
        <div class="w-full h-px bg-separator-grey"></div>
        <span class="w-1/3 font-inter font-normal text-sm text-medium-black">{{ text }}</span>
        <div class="w-full h-px bg-separator-grey"></div>
    </div>

</template>