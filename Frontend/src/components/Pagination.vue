<template>
  <div class="flex flex-row gap-10 justify-center font-semibold text-2xl mt-10">
    <button :class="defaultClass" @click="">Previous</button>
    <button :class="defaultClass" @click="">Next</button>
  </div>
</template>

<script setup>

let defaultClass = "px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"

</script>
