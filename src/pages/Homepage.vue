<script setup lang="ts">
import Card from '../components/molecules/Card.vue';
import Header from '../components/atoms/header.vue';
import Button from '../components/atoms/Button.vue';
</script>

<template>
    <div class="w-full flex flex-col items-center justify-start pb-10 p-3 bg-white lg:gap-30px lg:w-screen lg:px-36 lg:py-[74px] ">
        <Button class="self-start" :login="true"/>
        <div class="flex flex-col justify-start my-5 items-center gap-20 lg:m-0">
            <Header 
                :title="'Welcome to our Educational Website'" 
                :text1="'Select how you want to proceed with the platform. '"
                :text2="'Choose between Tutor and Student.'"
                :text-center="true"
                />
            <div class="flex flex-col lg:flex-row justify-between gap-20">
                <Card 
                    :image="'/images/person1.png'" 
                    :text="'Sign up as a Student'"
                    :paragraph="'Join our talent pool of over 10,000 student learning and growing their skills, with over 5,000 tutors ready to guide you.'"
                    :student="true" />
                <Card 
                    :image="'/images/person2.png'" 
                    :text="'Sign up as a Tutor'"
                    :paragraph="'Join our talent pool of over 10,000 student learning and growing their skills, with over 5,000 tutors ready to guide you.'"
                    :student="false" />
            </div>
        </div>
    </div>
</template>