<script setup>
import iphone from "@/assets/images/iphone.jpg"

defineProps({
    productList: {
        type: Array,
        default: () => []
    },
})


</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center ">
        <div v-for="product in productList" v-bind:key="product.id"
            class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3">
            <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                <div class="w-7 h-7">
                    <img :src="heartIcon" />
                </div>
            </div>
            <div class="w-full h-40 mb-1">
                <img :src="iphone" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col justify-center items-center ">
                <p class="text-center">{{ product.name }}</p>
                <p class="font-bold text-3xl">${{product.price}}</p>
            </div>
            <div class="w-full h-auto flex justify-center items-center">
                <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
            </div>
        </div>
    </div>
</template>