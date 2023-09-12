<script setup lang="ts">
import { ref } from 'vue'
import FormInfo from './FormInfo.vue';
import FormEducation from './FormEducation.vue';
import FormSkills from './FormSkills.vue';
import FormBankDetails from './FormBankDetails.vue';
import FormSubmit from '../components/atoms/FormSubmit.vue';

type FormProps = {
    actualStep: string
}

const { actualStep } = defineProps<FormProps>()

const person = ref()

const emitter = defineEmits<{
    pageVisibility: []
    checkSubmit: []
}>()

const sendVisibility = () => {
    emitter('pageVisibility')
}

const checkSubmit = () => {
    emitter('checkSubmit')
}

const sendData = (data) => {
    person.value = data
    console.log(person.value)
}

</script>

<template>
    <FormKit type="form" name="form" class="w-full flex flex-col lg:gap-10" #default="{ value, state: { valid } }" :actions="false" @submit="sendData">
        <div>
            <FormInfo v-show="actualStep === 'contact-info'" :actual-step="actualStep" :is-submit="false" @page-visibility="sendVisibility"/>
            <FormEducation v-show="actualStep === 'contact-education'" :actual-step="actualStep" @page-visibility="sendVisibility"/>
            <FormSkills v-show="actualStep === 'contact-skills'" :actual-step="actualStep" @page-visibility="sendVisibility"/>
            <FormBankDetails v-show="actualStep === 'contact-details'" :current-step="actualStep" @check-submit=""/>
        </div>
            <FormSubmit v-show="actualStep === 'contact-bank-details'" label="Finish and Submit"/>
    </FormKit>
</template>