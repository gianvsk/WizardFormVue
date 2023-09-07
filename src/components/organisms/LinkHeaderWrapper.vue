<script setup lang="ts">
import Link from '../atoms/Link.vue';
import Header from '../atoms/header.vue';

type LinkHeaderWrapperProps = {
    student: boolean
}

const {student} = defineProps<LinkHeaderWrapperProps>()

</script>

<template>
    <div class="flex flex-col justify-center w-55% gap-20 ">
        <Link :to="student ? '/signup/tutor' : '/signup/student'" :student="student" />
        <div class="flex flex-col gap-8">
            <Header 
                :title="'Welcome to our Educational Website'"
                :text1="'By signing up, you will gain access to a wealth of resources, including engaging video lectures, interactive quizzes, and personalised feedback from expert instructors.'"
                :text-center="false" 
                />
            <img src="/images/person3.png" class="h-100 w-100" />
        </div>
    </div>
</template>