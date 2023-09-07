<script setup lang="ts">
    
    type IconTextProps = {
        brand: 'facebook' | 'google'
    }

    const {brand} = defineProps<IconTextProps>()

</script>

<template>

    <a class="flex items-center justify-center px-11 py-4.5 rounded-10px border border-separator-grey gap-3">
        <img :src="brand === 'facebook' ? '/images/Facebook.svg' : '/images/Google.svg'" class="w-5 h-5"/>
        <span class="font-inter font-normal text-black text-sm">{{ brand === 'facebook' ? 'Facebook' : 'Google' }}</span>
    </a>

</template>