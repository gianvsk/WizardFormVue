<script setup lang="ts">

    type TextLinkProps = {
        text: string,
        link: string
    }

    const {text, link} = defineProps<TextLinkProps>()

</script>

<template>
    <div class="flex self-center justify-center">
        <h4 class=" font-inter font-normal text-base text-shadow-grey">{{ text }}</h4>
        <a><span class="font-inter font-semibold text-primary-link">{{ link }}</span></a>
    </div>
</template>