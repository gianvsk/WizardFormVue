<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';

type FormChildProps = {
    currentStep: string
}

const { currentStep } = defineProps<FormChildProps>()

</script>

<template>
    <section v-show="currentStep === 'contact-bank-details'" class="flex flex-col gap-10 items-start" >
        <FormKit name="bank-details" type="group" id="contact-education" :classes="{
            form: ' flex flex-col gap-10',
        }">
            <div class="w-full form-upload flex flex-col items-start gap-10">

                <div class="w-full flex flex-col gap-6 items-start">
                    <h5 class="font-inter font-normal text-base text-shadow-grey">Bank details</h5>
                    <InputTextLabel 
                        name="fullname-card-owner"
                        label="Full name"
                        placeholder="Your Full name as displayed in your bank"
                        />
                    <InputTextLabel 
                        name="bank-name"
                        label="Name of Bank"
                        placeholder="Name of Bank"
                    />
                    <InputTextLabel 
                        name="account-number"
                        label="Account Number"
                        placeholder="Account Number"
                    />
                </div>

            </div>

        </FormKit>
    </section>
</template>