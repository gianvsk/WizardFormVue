<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import Checkbox from '../components/atoms/Checkbox.vue';
import FormSeparator from '../components/atoms/FormSeparator.vue';
import IconText from '../components/atoms/IconText.vue';
import TextLink from '../components/atoms/TextLink.vue';
import HeaderFormSteps from '../components/molecules/HeaderFormSteps.vue';



type FormChildProps = {
    actualStep: string
    setStep: Function
}

const { actualStep, setStep } = defineProps<FormChildProps>()

const emitter = defineEmits<{
    pageVisibility: []
}>()

const sendStepWithVisibility = (value: number) => {
    setStep(value)
    emitter('pageVisibility')
}

</script>

<template>
    <section v-show="actualStep === 'contact-info'"
        class="flex flex-col w-460 bg-white py-[37px] px-[43px] rounded-20px border border-border-grey gap-10">
        <FormKit type="group" id="contact-info" :classes="{
            form: 'flex flex-col gap-10',
        }">

            <HeaderFormSteps title="Create an account" :step=1 />

            <div class="flex flex-col gap-6">
                <InputTextLabel
                    label="Fullname"
                    placeholder="Fullname" 
                    validation="required|length:3|matches:/[a-zA-Z]/"
                    :classes="{
                    wrapper: 'w-full flex flex-col justify-start gap-2',
                    outer: 'w-full $remove:mb-4',
                    inner: 'rounded-lg ',
                    label: '$reset hidden',
                    placeholder: 'font-inter font-normal text-base',
                    selectIcon: 'text-black'
                }" />
                <InputTextLabel
                    label="Email"
                    placeholder="Your Email Address" 
                    validation="required|*email|ends_with:.com,.org" 
                    :classes="{
                        wrapper: 'w-full flex flex-col justify-start gap-2',
                        outer: 'w-full $remove:mb-4',
                        inner: 'rounded-lg ',
                        label: '$reset hidden',
                        placeholder: 'font-inter font-normal text-base',
                        selectIcon: 'text-black'
                    }" />
                <InputTextLabel 
                    label="Phone Number" 
                    placeholder="Number"
                    validation="required|starts_with:+39|length:13,13"
                    validation-visibility="live"
                    value="+39 "
                    :classes="{
                            wrapper: 'w-full flex flex-col justify-start gap-2',
                            outer: 'w-full $remove:mb-4',
                            inner: 'rounded-lg ',
                            label: '$reset hidden',
                            placeholder: 'font-inter font-normal text-base',
                            selectIcon: 'text-black'
                    }" />
                <FormKit type="password" prefix-icon="password" suffix-icon="eyeClosed" label="Password" :classes="{
                    wrapper: 'flex flex-col items-start gap-2',
                    outer: '$reset',
                    inner: ' w-full rounded-lg',
                    input: 'px-4',
                    label: '$reset font-inter font-normal text-shadow-grey text-sm text-left',
                    prefixIcon: 'text-black border-r-0 bg-white my-auto $remove:to-gray-200',
                    suffixIcon: 'text-black w-auto'
                }" />
            </div>
            <Checkbox>
                <h5 class=" font-inter font-normal text-sm text-medium-black">
                    I hereby accept the
                    <span><a class="font-inter font-normal text-sm text-primary">T&C</a></span>
                    of Liquid
                </h5>
            </Checkbox>
            <FormKit type="button" class="next" @click="sendStepWithVisibility(2)" v-text="'Sign up'" :classes="{
                input: 'w-full justify-center p-4 rounded-xl font-inter font-normal text-xl text-white $remove:px-6 $remove:py-3',
            }" />
        </FormKit>
        <FormSeparator text="Or with" />
        <div class="flex gap-6">
            <IconText brand="facebook" />
            <IconText brand="google" />
        </div>
        <TextLink text="Already have an account?" link="Log In" />
    </section>
</template>