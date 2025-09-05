<script setup>
import Layout from './layouts/Layout.vue';
import Home from '@/views/Home.vue'
import Products from './views/Products.vue';
import ProductDetail from './views/ProductDetail.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import Checkout from './views/Checkout.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import { RouterView } from 'vue-router';



</script>

<template>
  <div class="w-screen min-h-screen bg-white">
    <RouterView />
  </div>
</template>
