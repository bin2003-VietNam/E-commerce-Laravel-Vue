<script setup>
defineProps({
    Title_1: {
        type: Array,
        default: () => []
    },
    Title_2: {
        type: String,
        default: () => ""
    },
    Variant: {
        type: Number,
        default: 1,
        validator: (value) => [1, 2].includes(value)
    }

})

</script>

<template>
    <div v-if="Variant === 1" class="flex flex-row items-start gap-4 mb-10">
        <div v-for="Title in Title_1" :key="Title"
            class="w-auto inline-block  border-b-3 border-black font-bold text-xl">{{ Title.title }}</div>
    </div>

    <p v-else="Variant === 2" class="text-2xl mb-10 font-bold">{{ Title_2 }}</p>

</template>