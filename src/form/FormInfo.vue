<script setup lang="ts">
import InputTextLabel from '../components/atoms/InputTextLabel.vue';
import Checkbox from '../components/atoms/Checkbox.vue';
import FormSeparator from '../components/atoms/FormSeparator.vue';
import IconText from '../components/atoms/IconText.vue';
import TextLink from '../components/atoms/TextLink.vue';
import FormButton from '../components/atoms/FormButton.vue';
import {checkValidInput} from '../utils/utils'
import {inject} from 'vue'

type FormChildProps = {
    isSubmit: boolean
}

const { isSubmit } = defineProps<FormChildProps>()

const inputs : string[] = inject<string[]>('inputsInfo')!

const emitter = defineEmits<{
    pageVisibility: []
    sendUserDetails: [user: any]
}>()

const sendStepWithVisibility = () => {
    checkValidInput(inputs) ? emitter('pageVisibility') : false
}

const handleIconClick = (node, e) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

const sendData = (e) => {
    emitter('sendUserDetails', e)
}

</script>

<template>
    <section class="flex flex-col gap-10 items-start">

        <FormKit 
            :type="isSubmit ? 'form' : 'group'" 
            id="contact-info" 
            @submit="!isSubmit ? sendData : sendStepWithVisibility()"
            :classes="{
            form: 'flex flex-col gap-10',
        }">

            <div class="w-full flex flex-col gap-6">
                <InputTextLabel 
                    :id="inputs[0]"
                    label="Fullname" 
                    placeholder="Fullname" 
                    validation="required|length:3|matches:/[a-zA-Z]/"
                    :hidden-label="true" />
                <InputTextLabel
                    :id="inputs[1]"
                    label="Email" 
                    placeholder="Your Email Address"
                    validation="required|*email|ends_with:.com,.org" 
                    :hidden-label="true" />

                <div class="flex flex-col gap-2 items-start">
                    <h5 class="font-inter font-normal text-xs text-shadow-grey">Phone Number</h5>
                    <div class="flex gap-1">
                        <FormKit 
                            :id="inputs[2]"
                            type="select" 
                            :classes="{
                            selectIcon: 'text-black',
                            outer: 'w-1/2 lg:w-3/4 xl:w-1/2 $remove:mb-4',
                            option: 'text-sm',
                            wrapper: 'w-full',
                            suffixIcon: 'w-full flex justify-around px-2 $remove:pr-8 $remove:pl-3',
                            inner: 'px-1',
                            input: 'pr-4 pl-2 $remove:pl-3 $remove:pr-8'
                            }" 
                            :options="[{ label: '+234', prefixIcon: '/images/flag.png' },
                                       { label: '+567', prefixIcon: '/images/flag.png' }]"
                            >
                            <template #prefixIcon>
                                <img class="lg:h-4 lg:w-6 xl:w-auto xl:h-auto" src="/images/flag.png" />
                            </template>
                        </FormKit>
                        <InputTextLabel
                            :id="inputs[3]"
                            label="Phone Number" 
                            placeholder="Number"
                            validation="required|starts_with:+39|length:13,13" 
                            value="+39 " 
                            :hidden-label="true" />
                    </div>
                </div>

                <FormKit 
                    :id="inputs[4]"
                    label="Password"
                    type="password"
                    validation="required" 
                    prefix-icon="password" 
                    suffix-icon="eyeClosed"
                    @suffix-icon-click="handleIconClick" :classes="{
                        wrapper: 'flex flex-col items-start gap-2',
                        outer: '$reset',
                        inner: ' w-full rounded-lg',
                        input: 'px-4',
                        label: '$reset font-inter font-normal text-shadow-grey text-sm text-left',
                        prefixIcon: 'text-black border-r-0 bg-white my-auto $remove:to-gray-200',
                        suffixIcon: 'text-black w-auto'
                    }" />
            </div>

            <Checkbox :id="inputs[5]"/>

            <FormButton 
                v-text="'Sign up'" 
                :type="isSubmit ? 'submit' : 'button'" 
                @click="isSubmit ? sendData : sendStepWithVisibility()"
                />
        </FormKit>

        <FormSeparator text="Or with" />

        <div class="w-full flex justify-center gap-6">
            <IconText brand="facebook" />
            <IconText brand="google" />
        </div>
        <TextLink text="Already have an account?" link="Log In" />
    </section>
</template>