<script setup>
import heartIcon from "@/assets/images/heart.png"
import cartIcon from "@/assets/images/cart.png"
import userIcon from "@/assets/images/user.png"

import banner1 from "@/assets/images/banner1.jpg"
import banner2 from "@/assets/images/banner2.jpg"
import banner3 from "@/assets/images/banner3.jpg"
import iphone from "@/assets/images/iphone.jpg"

import phone from "@/assets/images/phone.png"
import watch from "@/assets/images/watch.png"
import camera from "@/assets/images/camera.png"
import headphone from "@/assets/images/headphone.png"
import monitor from "@/assets/images/monitor.png"
import gamepad from "@/assets/images/gamepad.png"

// slider - Banner
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

</script>

<template>
    <div>
        <!-- heading -->
        <div class="w-screen h-20 bg-transparent p-5 flex flex-row justify-around items-center text-xl">
            <div class="flex flex-row justify-around items-center gap-10">
                <a href="/">Bin Logo</a>
                <form action="" method="POST"
                    class="flex items-center border border-gray-300 rounded-md p-2 bg-gray-100 w-80">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                    <input type="text" placeholder="Search"
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
                <img :src="cartIcon" class="w-7 h-7" />
                <img :src="userIcon" class="w-7 h-7" />
            </div>
        </div>

        <!-- Banner -->
        <div class="w-screen max-h-[632px]">
            <Swiper :modules="[Autoplay, Pagination, Navigation]" :slides-per-view="1" :autoplay="{ delay: 3000 }" loop
                pagination navigation class="w-full h-[632px]">
                <SwiperSlide>
                    <img :src="banner1" class="w-full h-full object-cover object-center" />
                </SwiperSlide>
                <SwiperSlide>
                    <img :src="banner2" class="w-full h-full object-cover object-center" />
                </SwiperSlide>
                <SwiperSlide>
                    <img :src="banner3" class="w-full h-full object-cover object-center" />
                </SwiperSlide>
            </Swiper>
        </div>

        <!-- Category -->
        <div class="w-screen h-80 bg-transparent px-30 py-10 ">
            <div>
                <p class="text-2xl mb-10 font-bold">Browse By Category</p>
                <div class="flex flex-row gap-10 justify-center items-center">
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="phone" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="watch" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="camera" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="headphone" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="monitor" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                    <div class="w-40 h-40 bg-gray-200 rounded-4xl flex flex-col justify-center items-center gap-3">
                        <img :src="gamepad" class="w-15 h-15" />
                        <p class="text-xl ">Phones</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Product -->
        <div class="w-screen h-[1056px] bg-white px-30 py-10 text-black items-center overflow-auto">
            <div class="w-full h-full">
                <div class="flex flex-row items-start gap-4 mb-10">
                    <div class="w-auto inline-block  border-b-3 border-black font-bold text-xl">New Arrival</div>
                    <div class="w-auto inline-block  border-b-3 border-black font-bold text-xl">Best Seller</div>
                    <div class="w-auto inline-block  border-b-3 border-black font-bold text-xl">Featured Product</div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center ">
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <p class="text-center">Apple Iphone 14 Pro Max 128GB Deep Pink</p>
                            <p class="font-bold text-3xl">$900</p>
                        </div>
                        <div class="w-full h-auto flex justify-center items-center">
                            <button class="w-45 h-10 bg-black rounded-xl text-white">Buy Now</button>
                        </div>
                    </div>
                    <div class="max-w-60 h-100 bg-gray-200 rounded-xl flex flex-col gap-3 shadow-xl">
                        <div class="w-full flex justify-end mb-2 pr-6 pt-3">
                            <div class="w-7 h-7">
                                <img :src="heartIcon"/>
                            </div>
                        </div>
                        <div class="w-full h-40 mb-1">
                            <img :src="iphone" class="w-full h-full object-cover"/>
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

            </div>
        </div>
    </div>
</template>