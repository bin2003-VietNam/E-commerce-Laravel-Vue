<script setup>
import { ref, computed, Transition } from 'vue'
import Pagination from '@/components/Pagination.vue'
import data from "@/data.json"
import iphone from "@/assets/images/iphone.jpg"
import {
    ChevronDownIcon,
    MagnifyingGlassIcon as SearchIcon
} from '@heroicons/vue/24/outline'

// Reactive data
const activeId = ref(null)

const items = data.items

function toggle(id) {
    activeId.value = activeId.value === id ? null : id
}

</script>
<template>
    <div class="w-screen min-h-[1500px] flex flex-row gap-4 px-[160px] py-[24px]">
        <!-- Filter -->
        <div class="w-1/4 flex flex-col gap-10">
            <div v-for="item in items" :key="item.id">
                <div @click="toggle(item.id)" class="flex flex-row justify-between border-b-1 pb-3 mb-3 cursor-pointer">
                    <h3 class="text-2xl font-semibold text-gray-900">{{ item.title }}</h3>
                    <div class="transform transition-transform duration-200" :class="{
                        'rotate-180': activeId === item.id,
                    }">
                        <ChevronDownIcon class="w-7 h-7 text-gray-600" />
                    </div>
                </div>
                <Transition enter-active-class="transition-all duration-300 ease-in-out"
                    enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100"
                    leave-active-class="transition-all duration-300 ease-in-out" leave-from-class="max-h-96 opacity-100"
                    leave-to-class="max-h-0 opacity-0">
                    <div v-show="activeId === item.id" class="w-full full">
                        <div v-for="row in item.content" :key="row">
                            <div class="flex flex-row gap-4 justify-start items-baseline ">
                                <input type="checkbox" :value="row.name" class="appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-black checked:border-black checked:text-white 
                                flex items-center justify-center cursor-pointer" />
                                <div class="flex flex-row justify-start gap-1 items-baseline">
                                    <label class="text-xl font-semibold">{{ row.name }}</label>
                                    <span class="text-sm text-gray-500">{{ row.count }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- Product -->
        <div class="w-3/4 flex flex-col">
            <div class="flex flex-row justify-between">
                <p class="text-xl text-gray-500">
                    Selected Product:<span class="text-2xl font-semibold text-black ml-2">85</span>
                </p>

                <select
                    class="w-70 border border-gray-300 rounded-lg px-3 py-2 transition-all duration-300 ease-in-out font-semibold">
                    <option value="rating_desc" selected>Rating: High → Low</option>
                    <option value="rating_asc">Rating: Low → High</option>
                    <option value="price_asc">Price: Low → High</option>
                    <option value="price_desc">Price: High → Low</option>
                </select>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3  gap-6 p-4 place-items-center ">
                <div
                    v-for="value in 9" v-bind:key="value" 
                    class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                    <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                        <div class="w-7 h-7">
                            <img :src="heartIcon" />
                        </div>
                    </div>
                    <div class="w-full h-40 mb-1">
                        <img :src="iphone" class="w-full h-full object-cover" />
                    </div>
                    <div class="flex flex-col justify-center items-center ">
                        <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                        <p class="font-bold text-3xl">$900</p>
                    </div>
                    <div class="w-full h-auto flex justify-center items-center">
                        <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>