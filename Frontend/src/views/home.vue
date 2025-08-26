<script setup>
import heartIcon from "@/assets/images/heart.png"
import cartIcon from "@/assets/images/cart.png"
import userIcon from "@/assets/images/user.png"

</script>

<template>
    <!-- heading -->
    <div class="w-screen h-20 bg-white p-5 flex flex-row justify-around items-center text-xl">
        <div class="flex flex-row justify-around items-center gap-10">
            <a href="/">Bin Logo</a>
            <form action="" method="POST"
                class="flex items-center border border-gray-300 rounded-md p-2 bg-gray-100 w-80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                <input 
                    type="text" 
                    placeholder="Search"
                    class="ml-2 bg-transparent outline-none flex-1 placeholder-gray-400" />
            </form>
        </div>
        <div class="flex flex-row justify-around items-center gap-10 font-bold">
            <a>Home</a>
            <a>About</a>
            <a>Contact Us</a>
        </div>
        <div class="flex flex-row justify-around items-center gap-7">
            <img :src="heartIcon" class="w-7 h-7" />
            <img :src="cartIcon"  class="w-7 h-7" />
            <img :src="userIcon"  class="w-7 h-7" />
        </div>

    </div>
</template>