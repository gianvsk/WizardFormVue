<script setup lang="ts">
import InputTextLabel from '../atoms/InputTextLabel.vue';
import {ref} from 'vue'

type InputListProps = {
    id1: string
    id2: string
    id3: string
    spacer?: boolean
}

const {id1, id2, id3} = defineProps<InputListProps>()

</script>

<template>
    <div v-if="spacer" class="w-full h-px bg-slate-300"/>>
    <InputTextLabel :id="id1" :name="id1" label="Name of Institution" validation="required|matches:/^[A-Z]/"
        validation-visibility="blur" validation-message="This input is missing first letter as uppercase"
        placeholder="Name of Institution" :hidden-label="true"/>

    <InputTextLabel :id="id2" :name="id2" label="Degree" validation="required|matches:/^[A-Z]/" validation-visibility="blur"
        placeholder="Degree graduated with" :hidden-label="true"/>

    <InputTextLabel :id="id3" :name="id3" type="select" label="Year of graduation" validation="required"
        validation-visibility="blur" placeholder="" :options="['Ciao', 'Come', 'Stai']"/>
</template>