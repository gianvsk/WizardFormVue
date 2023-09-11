<script setup lang="ts">

    type FormButtonProps = {
        small?: boolean
    }

    const {small} = defineProps<FormButtonProps>()

</script>

<template>
    <FormKit 
    type="button" 
    v-text="'Proceed'"  
    :classes="{
        outer: 'w-full $remove:mb-4',
        input: !small ? 'w-full justify-center p-4 rounded-xl font-inter font-normal text-xl text-white $remove:px-6 $remove:py-3' : 
                        'w-full justify-center px-1 py-3 rounded-xl font-inter font-normal text-xl text-white $remove:px-6 ',
    }" 
    />
</template>