<template>
  <div class="rounded-[10px] shadow-lg bg-white p-2 flex w-full gap-3">
    <img
      :src="imageUrl"
      width="75"
      height="75"
      alt=""
      class="bg-gray-500 rounded-[10px] w-[75px] h-[75px] object-cover"
    />
    <div class="flex-1 flex flex-col justify-between pr-4">
      <p class="text-sm">{{ name }}</p>
      <div class="flex justify-between items-center">
        <div class="font-medium">{{ price }}</div>
        <div class="inline-flex h-9 items-center gap-2">
          <div
            class="rounded-full border border-primary aspect-square w-[26px] flex justify-center items-center cursor-pointer"
            @click="$emit('remove')"
          >
            <Icon name="lucide:minus" />
          </div>
          <div>{{ totalProductInCart }}</div>
          <div
            class="rounded-full border bg-primary aspect-square w-[26px] flex justify-center items-center cursor-pointer"
            @click="$emit('add')"
          >
            <Icon name="lucide:plus" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  price: string;
  name: string;
  imageUrl: string;
}>();
const { cart } = useCart();

const totalProductInCart = computed(
  () => cart.value.filter((product: any) => props.id === product.id).length
);

defineEmits(["add", "remove"]);
</script>
