<script setup lang="ts">

</script>

<template>
    <div class="flex items-center">
        <FormKit 
        type="checkbox"
        validation="accepted" 
        :classes="{
            outer: '$remove:mb-4'
        }"/>
        <slot/>
    </div>

</template>