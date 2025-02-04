<template>
  <div class="p-[5px] text-[22px] font-bold pt-14">
    What would you like to order
  </div>
  <div class="p-2">
    <div class="px-[55px] py-2.5 border rounded-[10px] relative">
      <input type="text" class="w-full" placeholder="Search your items here" />
      <Icon
        name="lucide:search"
        class="w-[21px] h-[21px] absolute top-[11px] left-4"
      />
    </div>
  </div>
  <div
    class="flex justify-between gap-2.5 h-[51px] sticky z-10 top-[56px] bg-white"
  >
    <button class="bg-primary w-10 hidden sm:flex justify-center items-center">
      <Icon name="lucide:chevron-left" size="32" />
    </button>
    <div class="flex-1 overflow-scroll no-scrollbar shadow-2xl">
      <div class="flex flex-nowrap">
        <a
          :href="`#${category.split(' & ').join('_and_')}`"
          v-for="(category, index) in categories"
          :key="index"
          class="h-[46px] m-[5px] mb-0 font-bold capitalize relative group"
          :class="selectedCategory === category ? 'text-primary' : ''"
          @click="selectCategory(category)"
        >
          <div class="my-3 px-3 text-center tracking-normal text-nowrap">
            {{ category }}
          </div>
          <div
            :class="selectedCategory === category ? 'bg-primary' : ''"
            class="absolute bottom-0 inset-x-0 h-1"
          ></div>
        </a>
      </div>
    </div>
    <button class="bg-primary w-10 hidden sm:flex justify-center items-center">
      <Icon name="lucide:chevron-right" size="32" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ categories: string[] }>();

const selectedCategory = ref(props.categories[0]);

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};
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
