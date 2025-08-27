<script setup>
import Heading from '@/components/Heading.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <div>
        <Heading />
        <slot />
        <Footer />
    </div>
</template>