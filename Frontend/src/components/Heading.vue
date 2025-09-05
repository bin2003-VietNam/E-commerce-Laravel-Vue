<script setup>
import cartIcon from "@/assets/images/cart.png"
import userIcon from "@/assets/images/user.png"
import heartIcon from "@/assets/images/heart.png"
import register from "@/assets/images/register.png"
import login from "@/assets/images/login.png"
import logout from "@/assets/images/logout.png"

import { RouterLink } from "vue-router"
import { ref } from "vue"

let isLogin = ref(false)

</script>

<template>
    <!-- heading -->
    <div class="w-screen h-20 bg-transparent p-5 flex flex-row justify-around items-center text-xl border-b-1">
        <div class="flex flex-row justify-around items-center gap-10">
            <RouterLink :to="{ name: 'home' }">Bin Logo</RouterLink>
            <form action="" method="POST"
                class="flex items-center border border-gray-300 rounded-md p-2 bg-gray-100 w-80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                <input type="text" placeholder="Search"
                    class="ml-2 bg-transparent outline-none flex-1 placeholder-gray-400" />
            </form>
        </div>
        <div class="flex flex-row justify-around items-center gap-10 font-bold">
            <RouterLink :to="{ name: 'home' }" class="cursor-pointer">Home</RouterLink>
            <RouterLink :to="{ name: 'category' }" class="cursor-pointer">Category</RouterLink>
            <a>Contact Us</a>
        </div>
        <div class="flex flex-row justify-around items-center gap-7">
            <img :src="heartIcon" class="w-7 h-7 cursor-pointer" />

            <RouterLink :to="{name: 'cart'}">
                <img :src="cartIcon" class="w-7 h-7 cursor-pointer" />
            </RouterLink>

            
            <div v-if="isLogin" class="flex flex-row gap-5">
                <img :src="userIcon" class="w-7 h-7 cursor-pointer" title="profile"/>
                <img :src="logout" class="w-7 h-7 cursor-pointer" title="logout"/>
            </div>
            <div v-else="!isLogin" class="flex flex-row gap-5">
                <RouterLink :to="{ name: 'login' }">
                    <img :src="login" class="w-7 h-7 cursor-pointer" title="login"/>
                </RouterLink>
                <RouterLink :to="{ name: 'register' }">
                    <img :src="register" class="w-7 h-7 cursor-pointer" title="register"/>
                </RouterLink>
            </div>
            
        </div>
    </div>
</template>