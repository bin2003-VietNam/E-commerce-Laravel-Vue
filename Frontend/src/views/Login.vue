<script setup>
import loginIcon from "@/assets/images/loginIcon.jpg"
import bgLoginIcon from "@/assets/images/bgLoginIcon.jpg"
import googleIcon from "@/assets/images/googleIcon.png"

import { EyeIcon } from "@heroicons/vue/24/outline";

function togglePassword(){

}

</script>
<template>
    <div class="w-screen h-screen flex flex-row">
        <div class="flex-1">
            <img :src="bgLoginIcon" class="w-full h-full object-cover"/>
        </div>
        <div class="w-[456px] h-full p-[48px]">
            <div class="flex flex-row justify-start items-center gap-5">
                <img :src="loginIcon" class="w-20 h-20 rounded-full" />
                <p class="text-2xl font-semibold">Login</p>
            </div>
            <form class="mt-10 flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                    <label class="font-light">Login</label>
                    <input type="text" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                        placeholder="Email or phone number" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-light">Password</label>
                    <div class="relative">
                        <input type="password" class="w-full h-10 bg-gray-200 p-5 rounded-lg"
                            placeholder="Enter password"/>
                    </div>
                </div>
                <div class="flex flex-row justify-end text-black ">
                    <a href="/" class="cursor-pointer">Forgot password?</a>
                </div>
                <button type="submit" class="bg-black text-white font-semibold cursor-pointer p-2 rounded-lg"> Sign in</button>
                <button type="submit" class="flex flex-row justify-center items-center gap-3 font-semibold cursor-pointer p-2 rounded-lg border-1 mt-10">
                    <span><img :src="googleIcon" class="w-5 h-5"/></span> Or sign in with google
                </button>
                <div class="flex flex-row justify-center items-center">
                    <p>Dont have account ? <a href="/register" class="cursor-pointer font-semibold">Sign up now</a></p>
                </div>
            </form>
        </div>
    </div>
</template>