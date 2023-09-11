<script setup lang="ts">

type FormSubmitProps = {
    label: string
}

const {label} = defineProps<FormSubmitProps>()

</script>

<template>
    <FormKit type="submit" :label="label" :classes="{
        outer: 'w-full $remove:mb-4',
        input: 'w-full justify-center p-4 rounded-xl  $remove:px-6 $remove:py-3',
    }" >
    <template #text>
        <span class="font-inter font-normal text-xl text-white">{{ label }}</span>
    </template>
    </FormKit>
</template>