<template>
  <div
    class="fixed z-10 bg-white bottom-0 inset-x-0 h-14 flex justify-center shadow-2xl"
  >
    <NuxtLink
      v-for="({ name, iconName, link }, index) in tabs"
      :key="index"
      :to="link"
      class="h-full max-w-40 w-1/5 flex flex-col justify-center items-center"
      :class="$route.path === link ? 'text-primary' : 'text-gray-400'"
    >
      <Icon :name="iconName" size="22" />
      <div class="text-xs font-medium">{{ name }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { iconName: "solar:home-angle-2-outline", name: "home", link: "/" },
  {
    iconName: "material-symbols:credit-score-outline-rounded",
    name: "credits",
    link: "/credits",
  },
  { iconName: "ri:shopping-cart-line", name: "cart", link: "/cart" },
  { iconName: "solar:checklist-linear", name: "orders", link: "/orders" },
  { iconName: "ion:person-outline", name: "Profile", link: "/profile" },
];
</script>
