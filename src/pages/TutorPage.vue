<script setup lang="ts">
import Form from '../form/Form.vue';
import LinkHeaderWrapper from '../components/organisms/LinkHeaderWrapper.vue'
import {ref} from 'vue'

const emitter = defineEmits<{
    pageVisibility: [check: boolean]
}>()

const sendVisibility = (value) => {
    emitter('pageVisibility',value)
}

const showPage = ref(true)

const changeShowPage = (value) => {
    console.log(value)
    showPage.value = false
    sendVisibility(value)
}

</script>

<template>
    <div :class="['w-screen h-screen flex bg-white px-134px py-13 gap-20', !showPage? 'justify-center' : '']">
        <LinkHeaderWrapper :student="false"/>
        <Form @page-visibility="changeShowPage"/>
    </div>
</template>