<script setup lang="ts">
import Form from '../form/Form.vue';
import LinkHeaderWrapper from '../components/organisms/LinkHeaderWrapper.vue'
import {ref} from 'vue'
import Button from '../components/atoms/Button.vue';

const showPage = ref(true)

const changeShowPage = (value) => {
    console.log(value)
    showPage.value = value
}

</script>

<template>
    <div :class="['w-screen h-screen flex bg-white px-134px py-13', showPage ? 'gap-20' : '']">
        <LinkHeaderWrapper v-show="showPage" :student="true"/>
        <Form @page-visibility="changeShowPage"/>
    </div>
</template>