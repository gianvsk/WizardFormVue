<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import HeaderForm from '../components/atoms/HeaderForm.vue';
import Stepbar from '../components/molecules/Stepbar.vue';

type FormChildProps = {
    actualStep: string
    setStep: Function
}

const { actualStep, setStep } = defineProps<FormChildProps>()

</script>

<template>
    <section v-show="actualStep === 'contact-education'"
        class="flex flex-col w-460 bg-white py-[37px] px-[43px] rounded-20px border border-border-grey gap-10">
        <FormKit type="group" id="contact-education" :classes="{
            form: 'flex flex-col gap-10',
        }">
            <div class="form-upload flex flex-col items-start gap-10">

                <HeaderForm title="Experience and Education"
                    text="Kindly provide us with information from your school and work experience." />
                <Stepbar :step=2 />
                <h5 class="font-inter font-normal text-base text-shadow-grey">Please upload your CV</h5>
                <FormKit 
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

            <div class="form-education flex flex-col items-start gap-6">
                <span class="font-inter font-normal text-shadow-grey">Education</span>
                <InputTextLabel placeholder="Name of Institution" />
                <InputTextLabel placeholder="Degree graduated with" />
                <InputTextLabel type="select" label="Year of graduation" placeholder="Select"
                    :options="['Ciao', 'Come', 'Stai']" />


            </div>

            <div class="flex flex-col items-start gap-6">
                <span class="font-inter font-normal text-shadow-grey">Experience</span>
                <InputTextLabel placeholder="Name of Institution" />
                <FormKit type="date" :classes="{
                    outer: 'w-full',
                    input: 'text-black ',
                }" >
                <template #suffix-icon>
                    Ciao
                </template>
                </FormKit>
                <FormKit type="date" :classes="{
                    outer: 'w-full',
                    input: 'text-black color-scheme:light',
                    suffixIcon: 'text-black'
                }" />
                <InputTextLabel placeholder="Position held" />
            </div>

            <FormKit type="button" class="next" @click="setStep(3)"
                v-text="actualStep === 'contact-info' ? 'Sign up' : 'Proceed'" :classes="{
                    input: 'w-full justify-center p-4 rounded-xl font-inter font-normal text-xl text-white $remove:px-6 $remove:py-3',
                }" />
        </FormKit>
    </section>
</template>