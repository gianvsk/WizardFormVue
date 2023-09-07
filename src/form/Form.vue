<script setup lang="ts">
import { ref } from 'vue'
import FormInfo from './FormInfo.vue';
import FormEducation from './FormEducation.vue';
import FormSkills from './FormSkills.vue';
import FormBankDetails from './FormBankDetails.vue';
import Button from '../components/atoms/Button.vue';

const step = ref(1)
const actualStep = ref('contact-info')
const person = ref()

const emitter = defineEmits<{
    pageVisibility: [value: boolean]
}>()

const sendVisibility = () => {
    emitter('pageVisibility', actualStep.value === 'contact-info' ? true : false)
}

const sendData = (data) => {
    person.value = data
    console.log(person.value)
}

const setStep = (int: number) => {
    step.value = int
    console.log(person.value)
    switch (int) {
        case 1:
            actualStep.value = 'contact-info'
            break
        case 2:
            actualStep.value = 'contact-education'
            break
        case 3:
            actualStep.value = 'contact-skills'
            break
        case 4:
            actualStep.value = 'contact-bank-details'
            break
    }
}

const goBack = () => {
    step.value-=1
    switch (step.value) {
        case 1:
            actualStep.value = 'contact-info'
            console.log(actualStep.value)
            break
        case 2:
            actualStep.value = 'contact-education'
            break
        case 3:
            actualStep.value = 'contact-skills'
            break
        case 4:
            actualStep.value = 'contact-bank-details'
            break
    }
    sendVisibility()
}

</script>

<template>
    <Button v-show="step > 1 ? true : false" :login="false" @click="goBack"/>
    <FormKit type="form" :classes="{form: step > 1 ? 'mx-auto' : '' }" #default="{ value, state: { valid } }" :actions="false" @submit="sendData">
        <div class="form-body">
            <FormInfo :actual-step="actualStep" :set-step="setStep" @page-visibility="sendVisibility"/>
            <FormEducation :actual-step="actualStep" :set-step="setStep"/>
            <FormSkills :actual-step="actualStep" :set-step="setStep"/>
            <FormBankDetails :current-step="actualStep" :set-step="setStep"/>
        </div>
        <FormKit v-show="actualStep === 'contact-bank-details'" type="submit" label="Submit Application" 
            :disabled="!valid" />
    </FormKit>
</template>