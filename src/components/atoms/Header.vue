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
    <div :class=" ['flex flex-col gap-4', textCenter? 'w-3/4 ' : 'w-full']">
        <h1 :class="['font-nunito font-bold text-6xl text-light-black', textCenter? 'text-center' : 'text-left w-full']" >{{ title }}</h1>
        <h4 :class="['font-nunito font-semibold text-lg text-dark-grey', textCenter? 'text-center' : 'text-left w-3/4']">{{ text1 }} <br/> {{ text2 }} </h4>
    </div>
</template>



<style scoped></style>