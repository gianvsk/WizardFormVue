<script setup lang="ts">

type HeaderProps = {
    title: string,
    text1: string,
    text2?: string,
    textCenter?: boolean
}

const {title, text1, text2, textCenter} = defineProps<HeaderProps>()

</script>

<template>
    <div :class=" ['flex flex-col items-start sm:items-center gap-4 lg:items-start', textCenter? 'w-3/4 ' : 'w-full']">
        <h1 :class="['font-nunito font-bold text-3xl text-light-black sm:text-center sm:text-4xl lg:text-5xl lg:text-left xl:text-6xl' , textCenter? 'text-center' : 'text-left w-full']" >{{ title }}</h1>
        <h4 :class="['font-nunito font-semibold text-sm sm:text-base lg:text-lg text-dark-grey sm:text-center lg:text-left', textCenter? 'text-center' : 'text-left w-3/4']">{{ text1 }} <br/> {{ text2 }} </h4>
    </div>
</template>



<style scoped></style>