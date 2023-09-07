<script setup lang="ts">

    type InputTextLabelProps = {
        type?: string
        label?: string,
        placeholder: string
        options?: string[]
        required?: boolean
    }

    const {label, placeholder, type, options, required} = defineProps<InputTextLabelProps>()

</script>

<template>
    <FormKit
        :label="label" 
        :placeholder="placeholder"
        :type="type"
        :options="options"
        :validation="required? 'required' : ''"
        :classes="{
            wrapper: 'w-full flex flex-col justify-start gap-2',
            outer: 'w-full $remove:mb-4',
            inner: 'rounded-lg ',
            label: '$reset font-inter font-normal text-shadow-grey text-sm text-left',
            placeholder: 'font-inter font-normal text-base',
            selectIcon: 'text-black'
        }"
        />
        
</template>