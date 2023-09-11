<script setup lang="ts">
import Form from '../form/Form.vue';
import HeaderFormSteps from '../components/molecules/HeaderFormSteps.vue';
import LinkHeaderWrapper from '../components/organisms/LinkHeaderWrapper.vue'
import FormInfo from '../form/FormInfo.vue'
import { ref, computed, provide } from 'vue'
import { submit } from '@formkit/icons';

const inputsInfo : string[] = ['fullname', 'email', 'nationality','phone', 'password', 'checkbox']

provide('inputsInfo', inputsInfo)

const actualStep = ref<string>('contact-info')
const person = ref()

const showHeroSection = computed(() => {
    return actualStep.value === 'contact-info' ? true : false
})

const sendData = (data) => {
    person.value = data
    console.log(person.value)
}

</script>

<template>
    <div :class="['w-screen flex flex-col p-8 pb-10 items-center justify-between lg:flex-row lg:items-start bg-white lg:px-24 lg:py-9 xl:px-134px xl:py-13',
        actualStep === 'contact-info' ? 'xl:items-start' : 'xl:items-start',
        actualStep === 'contact-skills' || actualStep === 'contact-bank-details' ? 'h-screen' : '']">
        <LinkHeaderWrapper v-show="showHeroSection" :student="true" />

        <FormKit 
            type="form" 
            :classes="{ form: 'w-full sm:w-460 lg:w-96 xl:w-460', button: 'hidden'}" 
            #default="{ value, state: { valid } }"
            @submit.prevent="sendData"
            :actions="false">

            <div class="form-body flex flex-col my-10 p-5 gap-5 rounded-20px bg-white border border-border-grey lg:w-460 lg:m-0 lg:py-[37px] lg:px-[43px]  lg:gap-10">
                <HeaderFormSteps :step=1>
                    <div class="flex flex-col text-left gap-4">
                        <h3 
                            class="font-inter font-normal text-medium-black text-2xl">
                            Create an account
                        </h3>
                    </div>
                </HeaderFormSteps>
                <FormInfo :is-submit="true" @send-user-details="sendData"/>
            </div>
        </FormKit>
    </div>
</template>