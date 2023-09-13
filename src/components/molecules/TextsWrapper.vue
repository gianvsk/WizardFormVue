<script setup lang="ts">
import InputTextLabel from '../atoms/InputTextLabel.vue';

type InputListProps = {
    idToGet : {instituteName: string, degree: string, graduationYear: string }
    indexToGet: number
}

const {idToGet, indexToGet} = defineProps<InputListProps>()

const {instituteName, degree, graduationYear} = idToGet

</script>

<template>
    <div v-if="indexToGet > 0" class="w-full h-px bg-slate-300"/>
    <FormKit type="group" :name="'institute' + indexToGet">
    <InputTextLabel :id="instituteName + indexToGet" :name="instituteName" label="Name of Institution" validation="required|matches:/^[A-Z]/"
        validation-visibility="blur" validation-message="This input is missing first letter as uppercase"
        placeholder="Name of Institution" :hidden-label="true"/>

    <InputTextLabel :id="degree + indexToGet" :name="degree" label="Degree" validation="required|matches:/^[A-Z]/" validation-visibility="blur"
        placeholder="Degree graduated with" :hidden-label="true"/>

    <InputTextLabel :id="graduationYear + indexToGet" :name="graduationYear" type="select" label="Year of graduation" validation="required"
        validation-visibility="blur" placeholder="" :options="['Ciao', 'Come', 'Stai']"/>
    </FormKit>
</template>