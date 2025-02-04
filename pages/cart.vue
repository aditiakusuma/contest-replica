<script setup lang="ts">
const cart = useCart();
</script>

<template>
  <NuxtLayout name="page" title="Cart" @back="$router.back()">
    <template #icon-right>
      <Icon name="lucide:trash-2" size="32" class="cursor-pointer" />
    </template>
    <div class="px-4 py-20 w-full">
      <div class="px-4 w-full">
        <div class="flex flex-col gap-y-4 max-w-lg mx-auto md:border md:p-8">
          <div class="flex text-sm">
            <div class="flex-1 px-1 py-5">
              <div
                class="bg-slate-100 rounded-2xl w-full pb-4 py-6 h-full text-center relative"
              >
                Delivery
                <img
                  src="~/assets/images/delivery.svg"
                  class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-11"
                  alt=""
                />
              </div>
            </div>
            <div class="flex-1 px-1 py-5">
              <div
                class="bg-primary rounded-2xl w-full pb-4 py-6 h-full text-center relative"
              >
                Self Pickup
                <img
                  src="~/assets/images/pickup.svg"
                  class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-11"
                  alt=""
                />
              </div>
            </div>
          </div>
          {{ cart }}
        </div>
      </div>
      <CartEmpty />
    </div>
  </NuxtLayout>
</template>
