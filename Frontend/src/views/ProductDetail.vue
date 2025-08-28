<script setup>
import iphone from "@/assets/images/iphone.jpg"
import data from "@/data.json"
import { ref } from "vue";

let dataProductDetail = ref(data.ProductDetail)


let selectedStorage = ref(null)

function log(itemStorage) {
    selectedStorage.value = itemStorage
    console.log(selectedStorage.value);
}

function handle_AddToWishList() {

}

function handle_AddToCart() {

}

</script>

<template>
    <div class="w-screen min-h-[1500px] flex flex-col gap-4 px-[160px] py-[24px] bg-gray-300">
        <!-- Main info -->
        <section class="w-full h-[896px] bg-white mb-5 flex flex-row items-start py-[112px]">
            <!-- Picture -->
            <div class="flex-2/5 flex flex-row items-center justify-center">
                <div>
                    <img :src="iphone" class="max-w-[100px] h-[111px] object-cover" />
                    <img :src="iphone" class="max-w-[100px] h-[111px] object-cover" />
                    <img :src="iphone" class="max-w-[100px] h-[111px] object-cover" />
                    <img :src="iphone" class="max-w-[100px] h-[111px] object-cover" />
                </div>
                <div>
                    <img :src="iphone" class="max-w-[413pxpx] h-[516px] object-cover" />
                </div>
            </div>
            <!-- Info -->
            <div class="flex-3/5 flex flex-col  gap-5">
                <!-- Title -->
                <h1 class="text-4xl font-bold">{{ dataProductDetail.title }}</h1>
                <!-- Price -->
                <p class="text-3xl font-semibold">
                    ${{ dataProductDetail.price }}<span
                        class="text-2xl font-medium ml-4 text-gray-400 line-through">${{ dataProductDetail.discount }}</span>
                </p>
                <!-- Color Option -->
                <div class="flex flex-row justify-start gap-3 items-center">
                    <p>Select Color: </p>
                    <button v-for="color in dataProductDetail.colors" :key="color"
                        class="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition duration-200"
                        :style="{ backgroundColor: color }"></button>
                </div>
                <!-- Storage Option -->
                <div class="w-full h-full flex flex-row flex-wrap justify-start gap-3">
                    <button v-for="itemStorage in dataProductDetail?.storages || []" :key="itemStorage"
                        class="w-[112px] h-[48px] border border-gray-600 text-gray-600 cursor-pointer rounded-lg"
                        :class="{
                            'border-2 border-black bg-black text-white font-semibold ': selectedStorage == itemStorage
                        }" @click="log(itemStorage)">
                        {{ itemStorage }}
                    </button>
                </div>
                <!-- Feature -->
                <div class="w-full h-full grid grid-cols-3 gap-3">
                    <div class="flex flex-row gap-4 items-center justify-start bg-gray-100 px-[8px] py-[16px] rounded-lg"
                        v-for="feature in dataProductDetail.features" :key="feature">
                        <div class="w-[25px] h-[25px]">
                            <img :src="feature.icon" />
                        </div>
                        <div>
                            <p>{{ feature.title }}</p>
                            <p>{{ feature.content }}</p>
                        </div>
                    </div>
                </div>
                <!-- Text -->
                <div class="w-full h-full">
                    <p class="text-gray-600">{{ dataProductDetail.text }}</p>
                </div>
                <!-- Button Add wishlist/cart -->
                <div class="flex flex-row gap-4">
                    <button class="w-1/2 h-[56px] font-semibold border-2 border-black rounded-lg cursor-pointer">Add to
                        Wishlist</button>
                    <button
                        class="w-1/2 h-[56px] font-semibold border-2 border-black rounded bg-black text-white rouned-lg cursor-pointer">Add
                        to Cart</button>
                </div>
                <!-- Hignlights -->
                <div class="w-full h-full flex flex-row gap-2">
                    <div class="flex-1/3 flex flex-row gap-3 items-center justify-center"
                        v-for="highlight in dataProductDetail.highlights"
                        :key="highlight"
                    >
                        <div class="w-[56px] h-[56px] bg-gray-300">
                            <img :src="highlight.icon" class="object-cover"/>
                        </div>
                        <div class="flex-2/3">
                            <p class="text-gray-600">{{highlight.title}}</p>
                            <P class="font-semibold">{{highlight.content}}</P>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detail -->
        <section class="w-full h-[896px] bg-amber-300 mb-5">

        </section>
        
        <!-- Review -->
        <section class="w-full h-[896px] bg-amber-300 mb-5">

        </section>
    </div>
</template>