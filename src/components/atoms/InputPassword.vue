<script setup lang="ts">

const handleIconClick = (node) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

</script>

<template>
    <FormKit label="Password" type="password"
        validation="required|length:8,24|contains_uppercase|matches/[a-zA-Z0-9]" prefix-icon="password"
        suffix-icon="eyeClosed" @suffix-icon-click="handleIconClick" :classes="{
            wrapper: 'flex flex-col items-start gap-2',
            outer: '$reset',
            inner: ' w-full rounded-lg',
            input: 'px-4',
            label: '$reset font-inter font-normal text-shadow-grey text-sm text-left',
            prefixIcon: 'text-black border-r-0 bg-white my-auto $remove:to-gray-200',
            suffixIcon: 'text-black w-auto'
        }" />
</template>