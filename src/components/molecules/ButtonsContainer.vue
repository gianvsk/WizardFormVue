<script setup lang="ts">
import FormButton from '../atoms/FormButton.vue';
import {ref} from 'vue'

const emitter = defineEmits<{
    addListEvent: []
}>()

const addList = () => {
    emitter('addListEvent')
}

</script>

<template>
    <div class="w-full flex justify-between items-center gap-4">
        <FormKit label="Upload" type="button" :classes="{
            label: 'hidden',
            outer: 'w-full $remove:mb-4',
            input: '$remove:py-2 $remove:px-3',
            inner: 'border-primary rounded-xl bg-white border-2',
            noFilesIcon: 'hidden $remove:w-4',
        }">
            <template #input>
                <button class="w-full flex justify-center px-1 py-3 gap-5" @click="addList">
                    <span class="font-inter font-normal text-base text-primary">Add Institution</span>
                    <img src="/images/Plus.svg" />
                </button>
            </template>
            <template #noFiles>
                
            </template>
        </FormKit>
        <FormButton v-text="'Save'" :type="'button'" :small="true"/>
    </div>
</template>