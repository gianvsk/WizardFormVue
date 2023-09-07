<script setup lang="ts">

type ButtonProps = {
    login: boolean
}

const { login } = defineProps<ButtonProps>()

</script>

<template>
    <div>
        <a class="flex items-center justify-between py-5 px-24px bg-medium-grey rounded-s text-xs text-dark-grey font-nunito font-bold hover:text-dark-grey">
            <img v-if="!login" src='/images/arrowLeft.png' />
            {{ login ? 'Log in to account' : 'Go back' }}
        </a>
    </div>
</template>