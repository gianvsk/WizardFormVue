<script setup lang="ts">
import Link from '../components/atoms/Link.vue';
import Header from '../components/atoms/header.vue';
import Form from '../form/Form.vue';

</script>

<template>
    <div class="w-screen h-screen flex bg-white px-134px py-86px gap-20">
        <div class="flex flex-col w-55% gap-20 ">
            <Link to="/homepage/tutor" :student="true"/>
            <div class="flex flex-col gap-8">
                <Header 
                    :title="'Welcome to our Educational Website'"
                    :text1="'By signing up, you will gain access to a wealth of resources, including engaging video lectures, interactive quizzes, and personalised feedback from expert instructors.'"
                    :text-center="false" 
                    />
                <img src="/images/person3.png" class="h-100 w-100"/>
            </div>
        </div>
        <Form/>
    </div>
</template>