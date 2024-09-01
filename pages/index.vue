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
const categories = [
  {
    name: "Salads",
    menus: [
      {
        product_id: "1",
        category_name: "Salads",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906838664ad23628959eArabicSalad.png",
        name: "Arabic Salad",
        price: "13.00",
        average_rating: "0.0",
        description: "Delicious arabic salad",
      },
      {
        product_id: "2",
        category_name: "Salads",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906840664ad237656d78GreenSalad.png",
        name: "Green Salad",
        price: "10.00",
        average_rating: "0.0",
        description: "Green salad ",
      },
      {
        product_id: "3",
        category_name: "Biryani",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168913124564ae18ed1b294LambBiryani.png",
        name: "Lamb Biryani",
        price: "29.00",
        average_rating: "0.0",
        description: "Lamb Biryani",
      },
      {
        product_id: "4",
        category_name: "Soup",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906409164ad129b0552cLambSoup.png",
        name: "Lamb Soup",
        price: "20.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "5",
        category_name: "Soup",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906397364ad12255aa8aDaalSoup.png",
        name: "Daal Soup",
        price: "15.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "6",
        category_name: "Salads",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906426764ad134b1ee54YogurtCucumber.png",
        name: "Yogurt Cucumber",
        price: "8.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "7",
        category_name: "Salads",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906439264ad13c858d96GrilledChicken.png",
        name: "Grilled Chicken Salad",
        price: "15.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "8",
        category_name: "Biryani",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906466864ad14dcbbb8fLambShank.png",
        name: "Lamb Shank",
        price: "47.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "9",
        category_name: "Mandi",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906566464ad18c073c13LambMandi.png",
        name: "Lamb Mandi",
        price: "29.00",
        average_rating: "0.0",
        description: null,
      },
      {
        product_id: "10",
        category_name: "Kabsa",
        image_url:
          "https://system.dilanatandoor.com.my/uploads/sellers/products/168906572364ad18fb5854fLambKabsa.png",
        name: "Lamb Kabsa",
        price: "29.00",
        average_rating: "0.0",
        description: null,
      },
    ],
  },
];

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
