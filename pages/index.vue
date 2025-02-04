<template>
  <SecondaryNavbar :categories="Object.keys(products)" />
  <div class="py-4">
    <div v-for="(items, name, index) in products" :key="index" class="mb-4">
      <div :id="name" class="font-bold px-6" style="scroll-margin: 123px;">{{ name }}</div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-3 p-4"
      >
        <CardProduct
          v-for="{ name, price, image_url, product_id: id } in items"
          :key="id"
          :image-url="image_url"
          :name="name"
          :price="price"
          :id="Number(id)"
          @add="
            addProduct({
              id: Number(id),
              name,
              price,
              imageUrl: image_url,
            })
          "
          @remove="removeProduct(Number(id))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = useProducts();

const { addProduct, removeProduct } = useCart();

definePageMeta({
  layout: "app",
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
