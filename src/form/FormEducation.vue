<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import FormButton from '../components/atoms/FormButton.vue';
import ButtonsContainer from '../components/molecules/ButtonsContainer.vue'
import {inject} from 'vue'
import {checkValidInput} from '../utils/utils'
const educationData = inject('educationData')
const experienceData = inject('experienceData')

const inputs : string[] = inject<string[]>('inputsEducation')!

const emitter = defineEmits<{
    pageVisibility: []
}>()

const sendStepWithVisibility = () => {
    checkValidInput(inputs) ? emitter('pageVisibility') : false
}

const getEducationData = () => {
    console.log(educationData)
}

const getExperienceData = () => {
    console.log(experienceData)
}

</script>

<template>
    <section class="flex flex-col gap-10 items-start"
        >
        <FormKit type="group" id="contact-education" :classes="{
            form: 'flex flex-col gap-10',
        }">
            <div class="form-upload w-full flex flex-col items-start gap-10">

                <h5 class="font-inter font-normal text-base text-shadow-grey">Please upload your CV</h5>
                <FormKit 
                    :id="inputs[0]"
                    label="Upload"
                    type="file" 
                    accept=".pdf,.doc,.docx,.xml,.md,.csv" 
                    :classes="{
                        label:'hidden',
                        outer: 'w-full $remove:mb-4',
                        input: '$remove:py-2 $remove:px-3',
                        inner: 'border-primary rounded-xl bg-white border-2',
                        noFilesIcon: 'hidden $remove:w-4',
                    }" >
                    <template #noFiles>
                        <div class="w-full flex justify-center p-4 gap-5">
                            <span class="font-inter font-normal text-xl text-primary">Upload CV</span>
                            <img src="/images/Plus.svg"/>
                        </div>
                    </template>   
                </FormKit>

            </div>

            <div class="w-full flex flex-col gap-6 items-start">
                <FormKit v-model="educationData" type="group" class="form-education w-full flex flex-col items-start gap-6">
                    <span class="font-inter font-normal text-shadow-grey">Education</span>
                    <InputTextLabel :id="inputs[1]" label="Name of Institution" placeholder="Name of Institution" :hidden-label="true"/>
                    <InputTextLabel :id="inputs[2]" label="Degree" placeholder="Degree graduated with" :hidden-label="true" />
                    <InputTextLabel :id="inputs[3]" type="select" label="Year of graduation" placeholder="Select"
                        :options="['Ciao', 'Come', 'Stai']" />
                    <ButtonsContainer></ButtonsContainer>
                </FormKit>
            </div>

            <div class="w-full flex flex-col gap-6 items-start">
            <FormKit type="group" v-model="experienceData" class="w-full flex flex-col items-start gap-6">
                <span class="font-inter font-normal text-shadow-grey">Experience</span>
                <InputTextLabel 
                    :id="inputs[4]"
                    label="Name of Institution" 
                    placeholder="Name of Institution" 
                    :hidden-label="true" 
                    />
                <FormKit :id="inputs[5]" type="date" :classes="{
                    outer: 'w-full',
                    input: 'text-black ',
                    label: 'hidden'
                }" >
                <template #suffix-icon>
                    Ciao
                </template>
                </FormKit>
                <FormKit :id="inputs[6]" type="date" :classes="{
                    outer: 'w-full',
                    input: 'text-black color-scheme:light',
                    suffixIcon: 'text-black'
                }" />
                <InputTextLabel :id="inputs[7]" label="Position held" placeholder="Position held" :hidden-label="true"/>
                <ButtonsContainer :showData="getEducationData"></ButtonsContainer>
            </FormKit>
        </div>

            <FormButton @click="sendStepWithVisibility()"/>
        </FormKit>
    </section>
</template>../utils/utils.ts