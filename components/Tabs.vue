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
  { iconName: "lucide:house", name: "home", link: "/" },
  {
    iconName: "lucide:credit-card",
    name: "credits",
    link: "/credits",
  },
  { iconName: "lucide:shopping-cart", name: "cart", link: "/cart" },
  { iconName: "lucide:list-checks", name: "orders", link: "/orders" },
  { iconName: "lucide:user", name: "Profile", link: "/profile" },
];
</script>
