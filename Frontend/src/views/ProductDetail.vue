<script setup>
import { ref, computed, Transition } from 'vue'
import {
    ChevronDownIcon,
    ChevronUpIcon,
    MagnifyingGlassIcon as SearchIcon
} from '@heroicons/vue/24/outline'

// Reactive data
const activeId = ref(null)
const searchTerm = ref('')
const selectedBrands = ref([])

const items = [
    {
        id: 1,
        title: "Brand",
        content: [
            { name: 'Apple', count: 110 },
            { name: 'Samsung', count: 125 },
            { name: 'Xiaomi', count: 68 },
            { name: 'Poco', count: 44 },
            { name: 'OPPO', count: 36 },
            { name: 'Honor', count: 10 },
            { name: 'Motorola', count: 34 },
            { name: 'Nokia', count: 22 },
            { name: 'Realme', count: 35 },
        ]
    },
    {
        id: 2,
        title: "Price Range",
        content: [
            { name: 'Under $200', count: 85 },
            { name: '$200 - $500', count: 150 },
            { name: '$500 - $800', count: 92 },
            { name: '$800 - $1200', count: 47 },
            { name: 'Above $1200', count: 20 },
        ]
    },
    {
        id: 3,
        title: "Screen Size",
        content: [
            { name: '5.0" - 5.9"', count: 40 },
            { name: '6.0" - 6.4"', count: 120 },
            { name: '6.5" - 6.9"', count: 180 },
            { name: '7.0" and above', count: 35 },
        ]
    },
    {
        id: 4,
        title: "RAM",
        content: [
            { name: '2 GB', count: 12 },
            { name: '4 GB', count: 68 },
            { name: '6 GB', count: 105 },
            { name: '8 GB', count: 130 },
            { name: '12 GB', count: 75 },
            { name: '16 GB', count: 20 },
        ]
    },
    {
        id: 5,
        title: "Storage",
        content: [
            { name: '32 GB', count: 15 },
            { name: '64 GB', count: 85 },
            { name: '128 GB', count: 140 },
            { name: '256 GB', count: 115 },
            { name: '512 GB', count: 50 },
            { name: '1 TB', count: 12 },
        ]
    },
    {
        id: 6,
        title: "Battery Capacity",
        content: [
            { name: '3000 - 3999 mAh', count: 45 },
            { name: '4000 - 4999 mAh', count: 110 },
            { name: '5000 - 5999 mAh', count: 130 },
            { name: '6000 mAh and above', count: 25 },
        ]
    },
]


function toggle(id) {
     activeId.value = activeId.value === id ? null : id
}

</script>
<template>
    <div class="w-screen min-h-[1560px] flex flex-row gap-4 px-[160px] py-[24px]">
        <!-- Filter -->
        <div class="w-1/4 flex flex-col gap-10">
            <div v-for="item in items" :key="item.id">
                <div @click="toggle(item.id)" class="flex flex-row justify-between border-b-1 pb-3 mb-3 cursor-pointer">
                    <h3 class="text-2xl font-semibold text-gray-900">{{item.title}}</h3>
                    <div class="transform transition-transform duration-200" :class="{
                        'rotate-180': activeId === item.id,
                    }">
                        <ChevronDownIcon class="w-7 h-7 text-gray-600" />
                    </div>
                </div>
                <Transition 
                    enter-active-class="transition-all duration-300 ease-in-out"
                    enter-from-class="max-h-0 opacity-0" 
                    enter-to-class="max-h-96 opacity-100"
                    leave-active-class="transition-all duration-300 ease-in-out" 
                    leave-from-class="max-h-96 opacity-100"
                    leave-to-class="max-h-0 opacity-0">
                    <div 
                        v-show="activeId === item.id" 
                        class="w-full full">
                        <div 
                            v-for="row in item.content" 
                            :key="row">
                            <div class="flex flex-row gap-4 justify-start items-baseline ">
                                <input type="checkbox" :value="row.name" class="appearance-none w-5 h-5 border border-gray-400 rounded-sm checked:bg-black checked:border-black checked:text-white 
                                flex items-center justify-center cursor-pointer" />
                                <div class="flex flex-row justify-start gap-1 items-baseline">
                                    <label class="text-xl font-semibold" >{{ row.name }}</label>
                                    <span class="text-sm text-gray-500">{{ row.count }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- Product -->
        <div class="w-3/4 bg-amber-600">

        </div>
    </div>
</template>