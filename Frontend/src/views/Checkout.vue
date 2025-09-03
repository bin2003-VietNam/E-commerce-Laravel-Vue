<script setup>
import {
    MapPinIcon,
    TruckIcon,
    CreditCardIcon,
    PencilIcon,
    XMarkIcon
} from "@heroicons/vue/24/outline"
import { ref } from "vue";

let activeStep = true

</script>
<template>
    <div class="w-full min-h-[1000px] flex flex-col px-[160px] bg-gray-100">
        <!-- Step -->
        <div class="flex flex-row justify-between items-center mt-20 mb-20">
            <div class="flex flex-row justify-start items-center gap-2 px-5 py-2 rounded-xl" :class="{
                'bg-gray-600 text-white': activeStep
            }">
                <MapPinIcon class="w-10 h-10" />
                <div class="flex flex-col">
                    <p class="text-lg font-semibold">Step 1</p>
                    <p class="text-2xl font-bold">Address</p>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center gap-2 px-5 py-2 rounded-xl">
                <TruckIcon class="w-10 h-10" />
                <div class="flex flex-col">
                    <p class="text-lg font-semibold">Step 2</p>
                    <p class="text-2xl font-bold">Shipping</p>
                </div>
            </div>
            <div class="flex flex-row justify-start items-center gap-2 px-5 py-2 rounded-xl">
                <CreditCardIcon class="w-10 h-10" />
                <div class="flex flex-col">
                    <p class="text-lg font-semibold">Step 3</p>
                    <p class="text-2xl font-bold">Payment</p>
                </div>
            </div>
        </div>

        <!-- Step section -->
        <div class="">
            <!-- Step 1 -->
            <div class="flex flex-col">
                <p class="text-2xl font-semibold">Select Address</p>
                <div class="">
                    <div class="flex flex-row gap-4 justify-between mt-5 bg-gray-200 font-medium rounded-lg py-3">
                        <div class="flex-6/7 flex flex-row px-6 py-2 gap-5">
                            <input type="radio" class="w-7 h-7" />
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-row gap-7 ">
                                    <p class="text-xl">211 Thomrige</p>
                                    <p class="text-sm bg-gray-700 text-white px-2 py-1 rounded-lg">Home</p>
                                </div>
                                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                <p>(209) 555-0104</p>
                            </div>
                        </div>
                        <div class="flex-1/7 flex flex-row gap-5 justify-center items-center">
                            <PencilIcon class="w-7 h-7" />
                            <XMarkIcon class="w-7 h-7" />
                        </div>
                    </div>
                    <div class="flex flex-row gap-4 justify-between mt-5 bg-gray-200 font-medium rounded-lg py-3">
                        <div class="flex-6/7 flex flex-row px-6 py-2 gap-5">
                            <input type="radio" class="w-7 h-7" />
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-row gap-7 ">
                                    <p class="text-xl">211 Thomrige</p>
                                    <p class="text-sm bg-gray-700 text-white px-2 py-1 rounded-lg">Home</p>
                                </div>
                                <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                                <p>(209) 555-0104</p>
                            </div>
                        </div>
                        <div class="flex-1/7 flex flex-row gap-5 justify-center items-center">
                            <PencilIcon class="w-7 h-7" />
                            <XMarkIcon class="w-7 h-7" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center w-full my-6">
                        <div class="flex-grow border-t border-dashed border-gray-400"></div>
                        <button class="mx-4 w-15 h-10 flex items-center justify-center rounded-full bg-black text-white text-2xl cursor-pointer">
                            +
                        </button>
                        <div class="flex-grow border-t border-dashed border-gray-400"></div>
                    </div>
                    <p class="text-center text-gray-600">Add New Address</p>
                </div>
                <div class="flex flex-row gap-5 justify-end mt-10">
                    <button class="w-[210px] h-[54px] bg-black text-white rounded-lg text-xl font-semibold cursor-pointer">Back</button>
                    <button class="w-[210px] h-[54px] bg-white text-black border-2 rounded-lg text-xl font-semibold cursor-pointer">Next</button>
                </div>
            </div>
            <!-- Step 2 -->
            <div></div>
            <!-- Step 3 -->
            <div></div>
        </div>
    </div>
</template>