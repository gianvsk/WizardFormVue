<script setup lang="ts">
import InputTextLabel from '../atoms/InputTextLabel.vue';

type TextDateWrapperProps = {
    idToGet: {institutionName: string, startingDate: string, endingDate: string, position: string}
    indexToGet: number
}

const {idToGet, indexToGet} = defineProps<TextDateWrapperProps>()

const {institutionName, startingDate, endingDate, position} = idToGet

</script>

<template>
    <div v-if="indexToGet > 0" class="w-full h-px bg-slate-300"/>
    <FormKit type="group" name="institute"> 
        <InputTextLabel 
            name="istitution-name"
            :id="institutionName + indexToGet"
            label="Name of Institution" 
            validation="required|matches:/^[A-Z]/"
            placeholder="Name of Institution" 
            :hidden-label="true" 
            />
        <FormKit 
            name="starting-date"
            :id="startingDate + indexToGet" 
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
            :id="endingDate + indexToGet" 
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
            :id="position + indexToGet" 
            label="Position held" 
            placeholder="Position held"
            validation="required|string|matches:/^[A-Z]/" 
            :hidden-label="true"/>
    </FormKit>
</template>