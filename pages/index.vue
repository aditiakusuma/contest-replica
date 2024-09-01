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
const { data: products = {} }: { data: any } = await useAsyncData(
  "products",
  async () => {
    const res: any = await Promise.all(
      Array.from(Array(25).keys()).map((x) =>
        $fetch(
          `https://system.dilanatandoor.com.my/user_api/product/get_products?category_id=0&seller_id=1&apikey=AIzaSyA9KPeiF-fL5OQCXBoPX8hFkQVyqp8ipkA&search=&type=1&index=${x}`,
          {}
        )
      )
    );

    const allProducts = res
      .map((x: any) => JSON.parse(x))
      .map((x: any) => x.data)
      .flat();

    return Object.groupBy(allProducts, (item: any) => item.category_name);
  }
);
</script>
