<script setup>
import data from "@/data.json"
import banner1 from "@/assets/images/banner1.jpg"
import banner2 from "@/assets/images/banner2.jpg"
import banner3 from "@/assets/images/banner3.jpg"

import ProductGridList from "@/components/ProductGridList.vue"
import Title from "@/components/Title.vue"
import CategoryGrid from "@/components/CategoryGrid.vue"

// slider - Banner
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// data
let images = data.images
let products = data.products
let productsListSale = data.ProductListSale

</script>

<template>
    <div>
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
                <Title Title_2="Browse By Category" :Variant="2" />
                <CategoryGrid />
            </div>
        </div>

        <!-- Product -->
        <div class="w-screen h-[1056px] bg-white px-30 py-10 text-black items-center overflow-auto">
            <div class="w-full h-full">
                <Title :Title_1="productsListSale" :Variant="1" /> 
                <ProductGridList :product-list="products"/>
            </div>
        </div>
    </div>
</template>