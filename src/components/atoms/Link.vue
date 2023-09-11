<script setup lang="ts">

    type LinkProps = {
        to: string
        student: boolean
    }

    const {to} = defineProps<LinkProps>()

</script>

<template>
    <div class="flex gap-4 items-center">
        <router-link :to='to' class="font-nunito font-bold text-xl lg:text-3xl text-soft-grey">Sign up as as {{ student ? 'Tutor' : 'Student' }}</router-link>
        <router-link :to='to'><img src="/images/arrowRight.png"/></router-link>
    </div>
</template>