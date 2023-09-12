<script setup lang="ts">
import Form from '../form/Form.vue';
import LinkHeaderWrapper from '../components/organisms/LinkHeaderWrapper.vue'
import HeaderFormSteps from '../components/molecules/HeaderFormSteps.vue';
import Button from '../components/atoms/Button.vue';
import { ref, computed, provide } from 'vue'
import {checkValidInput} from '../utils/utils'
import { getNode } from '@formkit/core'

const actualStep = ref<string>('contact-info')
const step = ref<number>(1)
const inputsInfo : string[] = ['fullname', 'email', 'nationality','phone', 'password', 'checkbox']
const inputsEducation: string[] = ['cv', 'education-istitution', 'degree', 'graduation-year', 
                                    'experience-istitution', 'start-date', 'end-date', 'position']
const inputsPayment: string[] = ['fullname-card-owner', 'bank-name', 'account-number']
const educationInstitution = ref(1)
const experienceInstitution = ref(1)

provide('inputsInfo', inputsInfo)
provide('inputsEducation', inputsEducation)
provide('inputsPayment', inputsPayment)
provide('educationInstitution', educationInstitution)
provide('experienceInstitution', experienceInstitution)

provide('checkValidInput', checkValidInput)

const nextFormPage = () => {
    step.value < 4 ? step.value = step.value + 1 : step.value
}

const previousFormPage = () => {
    step.value > 1 ? step.value = step.value - 1 : step.value
}

const showHeroSection = computed(() => {
    return actualStep.value === 'contact-info' ? true : false
})

const getTitleFormHeader = computed(() => {
    switch (step.value) {
        case 1:
            actualStep.value = 'contact-info'
            return {
                title: 'Create an account',
                text: ''
            }
        case 2:
            actualStep.value = 'contact-education'
            return {
                title: 'Experience and Education',
                text: 'Kindly provide us with information from yourschool and work experience.'
            }
        case 3:
            actualStep.value = 'contact-skills'
            return {
                title: 'Skills',
                text: 'Kindly select skills you are comfortable with'
            }
        case 4:
            actualStep.value = 'contact-bank-details'
            return {
                title: 'Payment',
                text: 'Kindly provide us with your bank details'
            }
    }
})

</script>

<template>
    <div :class="['w-screen h-full flex flex-col p-8 pb-10 items-center justify-between bg-white md:h-screen lg:items-center lg:flex-row lg:px-24 lg:py-9 xl:items-start xl:px-134px xl:py-13 2xl:justify-around 2xl:items-center',
        actualStep !== 'contact-info' && actualStep !== 'contact-education' ? 'lg:h-screen' : '',
        actualStep === 'contact-education' ? 'lg:h-full xl:h-full' : '']">

        <LinkHeaderWrapper v-show="showHeroSection" :student="false" />
        <Button v-show="step > 1 ? true : false" :login="false" @click="previousFormPage" />
        <div :class="step > 1 ? 'mx-auto w-full sm:w-460 lg:w-96 xl:w-460 lg:gap-10' : 'w-full sm:w-460 lg:w-96 xl:w-460 lg:gap-10'">
            <div class="flex flex-col mt-10 mb-40 p-5 gap-5 rounded-20px bg-white border border-border-grey lg:w-full lg:m-0 lg:py-[37px] lg:px-[43px] lg:gap-10">
                <HeaderFormSteps :step="step">
                    <div class="flex flex-col text-left gap-4">
                        <h3 
                            class="font-inter font-normal text-medium-black text-2xl">
                            {{ getTitleFormHeader!.title }}
                        </h3>
                        <h5 
                            v-if="step !== 1" 
                            class="font-inter font-normal text-shadow-grey text text-base">
                            {{ getTitleFormHeader!.text }}
                        </h5>
                    </div>
                </HeaderFormSteps>
                <Form @page-visibility="nextFormPage" :actual-step="actualStep" />
            </div>
        </div>
    </div>
</template>../utils/utils.ts