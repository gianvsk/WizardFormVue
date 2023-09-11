<script setup lang="ts">
import Link from '../atoms/Link.vue';
import Header from '../atoms/header.vue';

type LinkHeaderWrapperProps = {
    student: boolean
}

const {student} = defineProps<LinkHeaderWrapperProps>()

</script>

<template>
    <div class="w-full flex flex-col justify-center lg:w-55% gap-5 lg:items-start lg:gap-20 ">
        <Link :to="student ? '/signup/tutor' : '/signup/student'" :student="student" />
        <div class="flex flex-col items-center gap-6 lg:gap-8 xl:items-start">
            <Header 
                :title="'Welcome to our Educational Website'"
                :text1="'By signing up, you will gain access to a wealth of resources, including engaging video lectures, interactive quizzes, and personalised feedback from expert instructors.'"
                :text-center="false" 
                />
            <img src="/images/person3.png" class="h-100 w-100" />
        </div>
    </div>
</template>