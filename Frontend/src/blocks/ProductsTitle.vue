<script setup>
import ProductGridList from "@/components/ProductGridList.vue"
import Title from "@/components/Title.vue"

defineProps({
    productsListSale: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
    <div class="w-full h-full">
        <Title :Title_1="productsListSale" :Variant="1" />
        <ProductGridList :product-list="productsListSale[0].products" />
    </div>
</template>