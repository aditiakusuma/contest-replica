<template>
  <nav
    class="fixed top-0 inset-x-0 h-14 bg-white flex justify-between items-center"
  >
    <div class="w-[70px] flex justify-center h-12 items-center">
      <button
        class="border-primary border text-primary flex justify-center items-center rounded-xl w-[42px] h-[42px]"
        @click="$emit('menuOpen')"
      >
        <Icon name="lucide:text" size="24" />
      </button>
    </div>
    <div class="w-[70px] flex-1 flex justify-center h-12 items-center">
      <img
        src="https://system.dilanatandoor.com.my/theme/assets/images/mylogo.png"
        height="45"
        width="173"
        alt=""
      />
    </div>
    <div class="w-[70px] flex justify-center h-12 items-center">
      <button
        class="border-primary border text-primary flex justify-center items-center rounded-xl w-[42px] h-[42px] relative"
      >
        <Icon name="lucide:shopping-cart" size="24" />
        <div class="absolute top-0 right-0 rounded-full bg-red-500 px-1 py-0.5 text-xs translate-x-1/2 font-bold" >{{ totalProductsInCart  }}</div>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { totalProductsInCart } = useCart()
defineEmits(["menuOpen"]);
</script>
