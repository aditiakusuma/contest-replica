<template>
  <SecondaryNavbar :categories="Object.keys(products)" />
  <div class="py-4">
    <div v-for="(items, name, index) in products" :key="index" class="mb-4">
      <div class="font-bold px-6">{{ name }}</div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-3 p-4"
      >
        <CardProduct
          v-for="({ name, price, image_url }, index) in items"
          :key="index"
          :image-url="image_url"
          :name="name"
          :price="price"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = useProducts()

definePageMeta({
  layout: 'app'
})
</script>
