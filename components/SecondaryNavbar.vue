<template>
  <div class="p-[5px] text-[22px] font-bold pt-14">
    What would you like to order
  </div>
  <div class="p-2">
    <div class="px-[55px] py-2.5 border rounded-[10px] relative">
      <input type="text" class="w-full" placeholder="Search your items here" />
      <Icon
        name="ph:magnifying-glass-bold"
        class="w-[21px] h-[21px] absolute top-[11px] left-4"
      />
    </div>
  </div>
  <div class="flex justify-between gap-2.5 h-[51px] sticky z-10 top-[56px] bg-white">
    <button class="bg-primary w-10 hidden sm:flex justify-center items-center">
      <Icon name="material-symbols:chevron-left-rounded" size="32" />
    </button>
    <div class="flex-1 overflow-scroll no-scrollbar shadow-2xl">
      <div class="flex flex-nowrap">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="h-[46px] m-[5px] mb-0 font-bold capitalize relative first:text-primary group"
        >
          <div class="my-3 px-3 text-center tracking-normal text-nowrap ">
            {{ category }}
          </div>
          <div class="absolute bottom-0 inset-x-0 h-1 group-first:bg-primary"></div>
        </div>
      </div>
    </div>
    <button class="bg-primary w-10 hidden sm:flex justify-center items-center">
      <Icon name="material-symbols:chevron-right-rounded" size="32" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ categories: string[] }>();
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
