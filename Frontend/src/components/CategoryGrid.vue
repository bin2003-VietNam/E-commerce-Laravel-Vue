<script setup>
import phone from "@/assets/images/phone.png"
import watch from "@/assets/images/watch.png"
import camera from "@/assets/images/camera.png"
import headphone from "@/assets/images/headphone.png"
import monitor from "@/assets/images/monitor.png"
import gamepad from "@/assets/images/gamepad.png"
import { RouterLink } from "vue-router"

</script>
<template>
    <div class="flex flex-row gap-10 justify-center items-center">
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="phone" class="w-15 h-15" />
                <p class="text-xl ">Phones</p>
            </RouterLink>
        </div>
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="watch" class="w-15 h-15" />
                <p class="text-xl ">Watches</p>
            </RouterLink>
        </div>
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="camera" class="w-15 h-15" />
                <p class="text-xl ">Cameras</p>
            </RouterLink>
        </div>
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="headphone" class="w-15 h-15" />
                <p class="text-xl ">Headphones</p>
            </RouterLink>
        </div>
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="monitor" class="w-15 h-15" />
                <p class="text-xl ">Monitors</p>
            </RouterLink>
        </div>
        <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center cursor-pointer">
            <RouterLink :to="{name:'category'}" class="flex flex-col justify-center items-center gap-3">
                <img :src="gamepad" class="w-15 h-15" />
                <p class="text-xl ">Gamings</p>
            </RouterLink>
        </div>
    </div>
</template>