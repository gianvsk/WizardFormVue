<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import FormButton from '../components/atoms/FormButton.vue';

const emitter = defineEmits<{
    pageVisibility: []
}>()

const sendStepWithVisibility = () => {
    emitter('pageVisibility')
}

</script>

<template>
    <section class="flex flex-col gap-10 items-start">
        <FormKit name="skills" type="group" id="contact-education" :classes="{
            form: 'flex flex-col gap-10',
        }">
            <div class="form-upload flex flex-col items-start gap-10">

                <div class="flex flex-col gap-6">
                    <h5 class="font-inter font-normal text-base text-shadow-grey">Select up to 10 skills you are comfortable with.</h5>
                    <InputTextLabel name="skills-list" type="select" label="Skills" placeholder="Select" :options="['ciao', 'come', 'stai']" />
                </div>

            </div>

            <FormButton @click="sendStepWithVisibility()" />
        </FormKit>
    </section>
</template>