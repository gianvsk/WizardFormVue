<script setup lang="ts">

type FormStepbarProps = {
    step: number
}

const { step } = defineProps<FormStepbarProps>()

</script>

<template>
    <div class="w-full flex flex-col justify-between items-end gap-4">
        <h5 class="font-inter font-normal text-primary text-sm">Step {{ step.toString() }} <span class=" font-inter font-normal text-label-grey text-sm ">of 4</span></h5>
        <div class=" flex relative w-full">
            <div :class="['relative top-0 h-2.5 bg-primary rounded-2.5xl z-10',
                step === 1 ? 'w-1/4' :
                    step === 2 ? 'w-1/2' :
                        step === 3 ? 'w-3/4' : 'w-full']">
            </div>
            <div class=" absolute left-0 top-1 w-full h-1.5 bg-bar-grey"></div>
        </div>
    </div>
</template>