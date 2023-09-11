<script setup lang="ts">

    type CardProps = {
        image: string,
        text: string,
        paragraph: string
        student: boolean
    }

    const {image, text, paragraph, student} = defineProps<CardProps>()

</script>

<template>

    <router-link :to="student? '/signup/student' : '/signup/tutor'" class=" w-360 p-6 flex flex-col justify-start items-start gap-4 shadow-light-grey md:w-460 md:h-460 md:items-center lg:items-start lg:w-360 lg:h-96">
        <img :src="image" class="w-50 h-50 object-cover" />
        <h3 class="font-nunito font-bold text-3xl text-dark-grey">{{ text }}</h3>
        <p class="font-nunito font-regular text-base text-dark-grey text-left">{{ paragraph }}</p>
    </router-link>

</template>