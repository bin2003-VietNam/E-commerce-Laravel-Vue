<script setup>
import iphone from "@/assets/images/iphone.jpg"
import data from "@/data.json"
import { ref } from "vue";
import {
    ChevronDownIcon,
    StarIcon
} from '@heroicons/vue/24/outline'


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
    <div class="w-screen min-h-[1500px] flex flex-col gap-4 px-[160px] py-[24px]">
        <!-- Main info -->
        <section class="w-full h-[896px] mb-5 flex flex-row items-start py-[112px]">
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
                    ${{ dataProductDetail.price }}<span class="text-2xl font-medium ml-4 text-gray-400 line-through">${{
                        dataProductDetail.discount }}</span>
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
                        v-for="highlight in dataProductDetail.highlights" :key="highlight">
                        <div class="w-[56px] h-[56px] bg-gray-300">
                            <img :src="highlight.icon" class="object-cover" />
                        </div>
                        <div class="flex-2/3">
                            <p class="text-gray-600">{{ highlight.title }}</p>
                            <P class="font-semibold">{{ highlight.content }}</P>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detail -->
        <section class="w-full min-h-[896px]  mb-5 p-5">
            <h2 class="text-3xl font-semibold mb-10">Detail</h2>
            <p class="text-lg font-light">
                Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone
                is the display. Nothing surprising, because advanced technologies allow you to practically level the
                display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions.
                And how good that in such realities Apple everything is fine with displays. Both critics and mass
                consumers always praise the quality of the picture provided by the products of the Californian brand.
                And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
            </p>
            <!-- info 1 -->
            <div>
                <h2 class="text-3xl font-semibold mb-5 mt-10">Screen</h2>
                <div class="flex flex-row justify-between border-b-1 pb-2 text-xl">
                    <p>Additionally</p>
                    <div class="flex flex-col items-end-safe">
                        <p>Dynamic island</p>
                        <p>Always-On display</p>
                        <p>HDR display</p>
                        <p>True Tone</p>
                    </div>
                </div>
            </div>
            <!-- Button  -->
            <div class="flex flex-row w-full h-full justify-center items-center mt-10">
                <button
                    class="w-auto h-auto px-15 py-3 border-black border-2 rounded-lg font-semibold cursor-pointer">View
                    More
                    <ChevronDownIcon class="w-6 h-6 inline-block" />
                </button>
            </div>
        </section>

        <!-- Review -->
        <section class="w-full min-h-[896px] flex flex-col justify-start mb-5">
            <h2 class="mb-10 text-3xl font-semibold">Reviews</h2>
            <div class="flex flex-row gap-10 ">
                <div class="max-w-[184px] max-h-[192px] flex-1/5 flex flex-col justify-center items-center bg-gray-100 p-4 gap-3 rounded-3xl">
                    <p class="text-6xl font-semibold">4.8</p>
                    <p class="text-xl font-light">of 125 reviews</p>
                    <div class="flex items-center">
                        <svg class="ms-1 h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                </div>
                <div class="flex-4/5 ">
                    <div class="flex items-center gap-15 w-full">
                        <!-- Label -->
                        <span class="text-xl font-medium text-black w-40">Excellent</span>

                        <!-- Progress bar -->
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 rounded-full" style="width: 80%;"></div>
                        </div>

                        <!-- Value -->
                        <span class="text-xl text-gray-500">100</span>
                    </div>
                    <div class="flex items-center gap-15 w-full">
                        <!-- Label -->
                        <span class="text-xl font-medium text-black w-40">Good</span>

                        <!-- Progress bar -->
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 rounded-full" style="width: 11%;"></div>
                        </div>

                        <!-- Value -->
                        <span class="text-xl text-gray-500">100</span>
                    </div>
                    <div class="flex items-center gap-15 w-full">
                        <!-- Label -->
                        <span class="text-xl font-medium text-black w-40">Average</span>

                        <!-- Progress bar -->
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 rounded-full" style="width: 3%;"></div>
                        </div>

                        <!-- Value -->
                        <span class="text-xl text-gray-500">100</span>
                    </div>
                    <div class="flex items-center gap-15 w-full">
                        <!-- Label -->
                        <span class="text-xl font-medium text-black w-40">Below Average</span>

                        <!-- Progress bar -->
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 rounded-full" style="width: 8%;"></div>
                        </div>

                        <!-- Value -->
                        <span class="text-xl text-gray-500">100</span>
                    </div>
                    <div class="flex items-center gap-15 w-full">
                        <!-- Label -->
                        <span class="text-xl font-medium text-black w-40">poor</span>

                        <!-- Progress bar -->
                        <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-yellow-400 rounded-full" style="width: 1%;"></div>
                        </div>

                        <!-- Value -->
                        <span class="text-xl text-gray-500">100</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>