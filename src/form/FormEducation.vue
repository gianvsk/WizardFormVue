<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import FormButton from '../components/atoms/FormButton.vue';
import ButtonsContainer from '../components/molecules/ButtonsContainer.vue'
import {ref, inject} from 'vue'
import {checkValidInput} from '../utils/utils'
import InputFile from '../components/atoms/InputFile.vue';
import InputList from '../components/molecules/InputList.vue';
const educationData = inject('educationData')
const experienceData = inject('experienceData')

const inputs : string[] = inject<string[]>('inputsEducation')!

const emitter = defineEmits<{
    pageVisibility: []
}>()

/* const addList = (node: any, value:any) => {
    node.input(value.value++)
} */

const items = ref([''])

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
                <FormKit v-model="educationData" name="educationInstitute" type="group" class="form-education w-full flex flex-col items-start gap-6">
                    <span class="font-inter font-normal text-shadow-grey">Education</span>
                    <InputList 
                        v-for="(item,index) in items"
                        :key="item"
                        :id1="inputs[1] + index"
                        :id2="inputs[2] + index"
                        :id3="inputs[3] + index"
                        :spacer="index > 1"
                        />
                        <ButtonsContainer @add-list-event="() => items.push('')"></ButtonsContainer>
                    </FormKit>
            </div>

            <div class="w-full flex flex-col gap-6 items-start">
            <FormKit name="educationExperience" type="group" v-model="experienceData" class="w-full flex flex-col items-start gap-6">
                <span class="font-inter font-normal text-shadow-grey">Experience</span>
                <InputTextLabel 
                    name="istitution-name"
                    :id="inputs[4]"
                    label="Name of Institution" 
                    validation="required|matches:/^[A-Z]/"
                    placeholder="Name of Institution" 
                    :hidden-label="true" 
                    />
                <FormKit 
                    name="starting-date"
                    :id="inputs[5]" 
                    type="date" 
                    validation="required|date_after:1923-12-31|date_before:2023-12-09"
                    validation-label="Starting date"
                    :classes="{
                    outer: 'w-full',
                    input: 'text-black ',
                    label: 'hidden'
                }" >
                </FormKit>
                <FormKit 
                    name="ending-date"
                    :id="inputs[6]" 
                    type="date" 
                    validation="required|date_after:1923-12-31|date_before:2023-12-09"
                    validation-label="Ending date"
                    :classes="{
                    outer: 'w-full',
                    input: 'text-black color-scheme:light',
                    suffixIcon: 'text-black'
                }" />
                <InputTextLabel 
                    name="position-held"
                    :id="inputs[7]" 
                    label="Position held" 
                    placeholder="Position held"
                    validation="required|string|matches:/^[A-Z]/" 
                    :hidden-label="true"/>
                <ButtonsContainer></ButtonsContainer>
            </FormKit>
        </div>

            <FormButton @click="sendStepWithVisibility()"/>
        </FormKit>
    </section>
</template>../utils/utils.ts