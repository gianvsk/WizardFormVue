<script setup lang="ts">

    type InputTextLabelProps = {
        hiddenLabel?: boolean
    }

    const {hiddenLabel} = defineProps<InputTextLabelProps>()

</script>

<template>
    <FormKit
        :validation="'required'"
        :classes="{
            wrapper: 'w-full flex flex-col justify-start gap-2',
            outer: 'w-full $remove:mb-4',
            inner: 'rounded-lg ',
            label: hiddenLabel ? 'hidden' : '$reset font-inter font-normal text-shadow-grey text-sm text-left',
            placeholder: 'font-inter font-normal text-base',
            selectIcon: 'text-black',
            message: '$remove:text-sm text-3xl'
        }"
        />
        
</template>