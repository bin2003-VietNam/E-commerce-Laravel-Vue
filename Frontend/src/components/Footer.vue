<script setup>
import twitter from "@/assets/images/twitter.png"

</script>
<template>
    <!-- Footer -->
    <div class="w-screen h-[504px] flex flex-row justify-around bg-black px-30 py-20 text-white">
        <div class="flex flex-col ">
            <a href="/" class="text-3xl mb-15">Bin Logo</a>
            <div class="flex-1 flex flex-col gap-2">
                <p>My name is Nguyen Van Bin and from Viet NamF</p>
                <p>This is my Laravel/Vue Ecommerce project</p>
            </div>
            <div class="flex flex-row justify-start gap-2">
                <a href="/"><img :src="twitter" class="w-10 h-10" /></a>
                <a href="/"><img :src="twitter" class="w-10 h-10" /></a>
                <a href="/"><img :src="twitter" class="w-10 h-10" /></a>
                <a href="/"><img :src="twitter" class="w-10 h-10" /></a>
            </div>
        </div>
        <div class="flex flex-col">
            <h1 class="text-3xl mb-15">Service</h1>
            <div class="flex flex-col text-sm">
                <a href="#">Bonus program</a><br>
                <a href="#">Gift cards</a><br>
                <a href="#">Credit and payment</a><br>
                <a href="#">Service contracts</a><br>
                <a href="#">Non-cash account</a><br>
                <a href="#">Payment</a>
            </div>
        </div>
        <div class="flex flex-col">
            <h1 class="text-3xl mb-15">Assistance the buyer</h1>
            <div class="flex flex-col text-sm">
                <a href="#">Find an order</a><br>
                <a href="#">Terms of delivery</a><br>
                <a href="#">Exchange and return of goods</a><br>
                <a href="#">Guarantee</a><br>
                <a href="#">Frequently asked questions</a><br>
                <a href="#">Terms of use of the site</a>
            </div>
        </div>
    </div>
</template>