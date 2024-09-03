<template>
  <div class="fixed inset-0 flex">
    <div
      class="absolute left-0 inset-y-0 w-[300px] flex flex-col bg-white shadow-lg"
    >
      <div
        class="bg-primary p-5 flex w-full justify-between items-center text-white h-24"
      >
        <div class="">
          <p class="text-lg">Aditia</p>
          <p class="text-xs">aditiakusuma800@gmail.com</p>
        </div>
        <Icon name="lucide:chevron-right" size="24" />
      </div>
      <ul class="py-4">
        <li v-for="({ name, to, icon }, index) in mainMenus" :key="index">
          <NuxtLink
            :to="to"
            class="h-12 text-sm flex items-center py-2 gap-4 px-4"
          >
            <Icon :name="icon" size="25" class="text-gray-300" />
            <p>{{ name }}</p>
          </NuxtLink>
        </li>
      </ul>
      <hr />
      <ul class="py-4">
        <li class="px-4 py-2 text-xs">Helps & FAQs</li>
        <li class="px-4 py-2 text-xs">Terms & Conditions</li>
        <li class="px-4 py-2 text-xs">Refund Policy</li>
        <li class="px-4 py-2 text-xs">Contact Us</li>
      </ul>
      <div class="px-4">
        <NuxtLink to="/login">
          <ButtonApp>
            <template #icon-left>
              <Icon name="lucide:log-in" />
            </template>
            <div>Login</div>
          </ButtonApp>
        </NuxtLink>
        <p class="mt-4 text-xl font-medium">Version: 2.0</p>
      </div>
    </div>
    <div class="flex-1 bg-black/30" @click="$emit('clickedOutside')"></div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["clickedOutside"]);

const mainMenus = [
  {
    name: "Home",
    to: "/",
    icon: "lucide:house",
  },
  {
    name: "My Orders",
    to: "/orders",
    icon: "lucide:list-check",
  },
  {
    name: "Credits",
    to: "/credits",
    icon: "lucide:credit-card",
  },
  {
    name: "Cart",
    to: "/cart",
    icon: "lucide:shopping-cart",
  },
];
</script>
