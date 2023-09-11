<script setup lang="ts">
    
    type IconTextProps = {
        brand: 'facebook' | 'google'
    }

    const {brand} = defineProps<IconTextProps>()

</script>

<template>

    <a class="flex items-center justify-center px-6 py-3 rounded-10px border border-separator-grey gap-3 lg:px-11 lg:py-4.5">
        <img :src="brand === 'facebook' ? '/images/Facebook.svg' : '/images/Google.svg'" class="w-5 h-5"/>
        <span class="font-inter font-normal text-black text-sm">{{ brand === 'facebook' ? 'Facebook' : 'Google' }}</span>
    </a>

</template>