<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import FormButton from '../components/atoms/FormButton.vue';
import ButtonsContainer from '../components/molecules/ButtonsContainer.vue'
import {ref, inject} from 'vue'
import {checkValidInput} from '../utils/utils'
import InputFile from '../components/atoms/InputFile.vue';
import TextsWrapper from '../components/molecules/TextsWrapper.vue';
import TextDateWrapper from '../components/molecules/TextDateWrapper.vue';

const inputs : string[] = inject<string[]>('inputsEducation')!

const emitter = defineEmits<{
    pageVisibility: []
}>()

/* const addList = (node: any, value:any) => {
    node.input(value.value++)
} */

const institutes = ref<string[]>([''])
const experiences = ref<string[]>([''])
const educationInstitutionData = inject('educationInstituteData')
const educationExperienceData = inject('educationExperienceData')

const addEducation = (value : boolean) => {
    value ? institutes.value.push('') : experiences.value.push('')
}

const sendStepWithVisibility = () => {
    checkValidInput(inputs) ? emitter('pageVisibility') : false
}

</script>

<template>
    <section class="flex flex-col gap-10 items-start"
        >
        <FormKit name="education" type="group" id="contact-education" :classes="{
            form: 'flex flex-col gap-10',
        }">
            <div class="form-upload w-full flex flex-col items-start gap-10">

                <h5 class="font-inter font-normal text-base text-shadow-grey">Please upload your CV</h5>
                <InputFile :id="inputs[0]"/>
            </div>

            <div class="w-full flex flex-col gap-6 items-start">
                <FormKit v-model="educationInstitutionData" name="educationInstitute" type="group" class="form-education w-full flex flex-col items-start gap-6">
                    <span class="font-inter font-normal text-shadow-grey">Education</span>
                    <TextsWrapper 
                        v-for="(institute,index) in institutes"
                        :key="institute"
                        :id-to-get="{instituteName: inputs[1], degree: inputs[2], graduationYear: inputs[3]}"
                        :index-to-get="index"
                        />
                        <ButtonsContainer @add-list-event="addEducation(true)"></ButtonsContainer>
                    </FormKit>
            </div>

            <div class="w-full flex flex-col gap-6 items-start">
            <FormKit v-model="educationExperienceData" type="group" name="educationExperience"  class="w-full flex flex-col items-start gap-6">
                <span class="font-inter font-normal text-shadow-grey">Experience</span>
                <TextDateWrapper 
                    v-for="(experience, index) in experiences"
                    :key="experience"
                    :id-to-get="{institutionName: inputs[4], startingDate: inputs[5], endingDate: inputs[6], position: inputs[7]}"
                    :index-to-get="index"
                     />
                <ButtonsContainer @add-list-event="addEducation(false)"></ButtonsContainer>
            </FormKit>
        </div>

            <FormButton @click="sendStepWithVisibility()"/>
        </FormKit>
    </section>
</template>../utils/utils.ts