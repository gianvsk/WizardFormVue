<script setup lang="ts">



const setCheckbox = (value) => {

}

</script>

<template>
    <FormKit 
        type="checkbox" 
        label="checkbox" 
        validation="accepted" 
        :classes="{
        outer: '$remove:mb-4',
        label: 'hidden',
        wrapper: 'flex justify-between gap-5 lg:gap-0 lg:justify-start'
    }">
        <!--         <template #decorator>
            <button class="flex items-center justify-center w-5 h-5 border border-primary" @click="setCheckbox">
                <img src="/images/checkbox.svg"/>
            </button>
        </template> -->
        <template #label>
            <h5 class=" font-inter font-normal text-sm text-medium-black">
                I hereby accept the
                <span><a class="font-inter font-normal text-sm text-primary">T&C</a></span>
                of Liquid
            </h5>
        </template>
        <template #message>
            <div class="flex">
                <span>
                    <a class="font-inter font-normal text-xs text-red-500">Please accept Terms and Conditions</a>
                </span>
            </div>
        </template>

    </FormKit>
</template>