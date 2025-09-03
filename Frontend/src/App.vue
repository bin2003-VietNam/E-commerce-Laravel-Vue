<script setup>
import Layout from './layouts/Layout.vue';
import Home from '@/views/Home.vue'
import Products from './views/Products.vue';
import ProductDetail from './views/ProductDetail.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import Checkout from './views/Checkout.vue';

</script>

<template>
  <div class="w-screen min-h-screen bg-white">
    <Layout>
      <!-- <Home /> -->
      <!-- <ProductDetail/> -->
      <!-- <Products /> -->
      <!-- <ShoppingCart /> -->
      <Checkout />
    </Layout>
  </div>
</template>
