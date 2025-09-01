<script setup>
import iphone from "@/assets/images/iphone.jpg"
import { ref } from "vue"
import { XMarkIcon } from "@heroicons/vue/24/outline"

const quantity = ref(1)

const increase = () => {
  quantity.value++
}

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const deleteItem = () =>{

}

</script>
<template>
    <div class="w-full min-h-[1000px] flex flex-row px-[160px] py-[112px] bg-gray-100">
        <div class="flex-1/2 flex flex-col justify-start items-start">
            <h1 class="text-3xl font-semibold mb-10">Shopping Cart</h1>
            <div class="flex flex-col justify-center items-center gap-10">
                <div class="w-full h-[138px] flex flex-row items-center justify-center gap-2 border-b-1 border-gray-500 pb-4">
                    <img :src="iphone" class="h-[90px] w-[90px]" />
                    <div class="flex flex-col w-[191px] h-auto">
                        <p class="text-lg wrap-normal mb-3">Apple iPhone 14 Pro Max 128Gb Deep Purple</p>
                        <p class="font-light">#25139526913984</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button @click="decrease" class="px-2 py-1 border-none text-2xl cursor-pointer">-</button>
                        <input type="text" v-model="quantity" class="w-12 text-center border border-gray-400 rounded-lg" />
                        <button @click="increase" class="px-2 py-1 border-none text-2xl cursor-pointer">+</button>
                    </div>
                    <p class="font-semibold text-2xl">$1399</p>
                    <XMarkIcon class="w-[24px] h-[24px] cursor-pointer" @click="deleteItem"/>
                </div>
            </div>
        </div>
        <div class="flex-1/2 flex flex-col gap-4 border border-gray-500 rounded-lg py-[56px] px-[64px]">
            <h1 class="text-2xl font-semibold">Order Summary</h1>
            <div class="flex flex-col gap-2">
                <p>Discount code / Promo code</p>
                <input type="text" class="w-full h-10 border-1 border-gray-500 rounded-lg px-2 py-6" placeholder="Code"/>
            </div>
        </div>

    </div>
</template>