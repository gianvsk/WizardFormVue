<script setup>

</script>

<template>
    <FormKit label="Upload" type="file" validation="required" accept=".pdf,.doc,.docx,.xml,.md,.csv"
        :classes="{
            label: 'hidden',
            outer: 'w-full $remove:mb-4',
            input: '$remove:py-2 $remove:px-3',
            inner: 'border-primary rounded-xl bg-white border-2',
            noFilesIcon: 'hidden $remove:w-4',
        }">
        <template #noFiles>
            <div class="w-full flex justify-center p-4 gap-5">
                <span class="font-inter font-normal text-xl text-primary">Upload CV</span>
                <img src="/images/Plus.svg" />
            </div>
        </template>
    </FormKit>
</template>