<script setup lang="ts">
import Stepbar from './Stepbar.vue';


type HeaderFromProps = {
    step: number
}

const { step } = defineProps<HeaderFromProps>()

</script>

<template>
    <div class="w-full flex flex-col gap-6">
        <slot/>
        <Stepbar :step="step" />
    </div>
</template>