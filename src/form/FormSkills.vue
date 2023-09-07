<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import HeaderForm from '../components/atoms/HeaderForm.vue';
import Stepbar from '../components/molecules/Stepbar.vue';

type FormChildProps = {
    actualStep: string
    setStep: Function
}

const {actualStep, setStep} = defineProps<FormChildProps>()

</script>

<template>
    <section v-show="actualStep === 'contact-skills'"
        class="flex flex-col w-460 bg-white py-[37px] px-[43px] rounded-20px border border-border-grey gap-10">
        <FormKit type="group" id="contact-education" :classes="{
            form: 'flex flex-col gap-10',
        }">
            <div class="form-upload flex flex-col items-start gap-10">

                <HeaderForm title="Experience and Education"
                    text="Kindly provide us with information from your school and work experience." />
                <Stepbar :step=3 />
                <div class="flex flex-col gap-6">
                    <h5 class="font-inter font-normal text-base text-shadow-grey">Select up to 10 skills you are comfortable
                        with.</h5>
                    <InputTextLabel type="select" label="Skills" placeholder="Select" :options="['ciao', 'come', 'stai']" />
                </div>

            </div>

            <FormKit type="button" class="next" @click="setStep(4)"
                v-text="actualStep === 'contact-info' ? 'Sign up' : 'Proceed'" :classes="{
                    input: 'w-full justify-center p-4 rounded-xl font-inter font-normal text-xl text-white $remove:px-6 $remove:py-3',
                }" />
        </FormKit>
    </section>
</template>