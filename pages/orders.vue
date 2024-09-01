<template>
  <NuxtLayout name="page" title="My Orders" @back="() => console.log('back')">
    <div class="px-4 py-20 w-full">
      <div class="flex flex-col gap-y-4 max-w-lg mx-auto md:border">
        <div class="flex font-bold text-sm text-center">
          <div class="relative flex-1">
            <button class="h-12 cursor-pointer text-primary relative">
              ACTIVE ORDERS (0)
            </button>
            <div class="absolute h-1 bottom-0 inset-x-0 bg-primary"></div>
          </div>
          <div class="relative flex-1">
            <button class="h-12 cursor-pointer relative">
              PAST ORDERS (0)
            </button>
          </div>
        </div>
        <OrdersEmpty />
      </div>
    </div>
  </NuxtLayout>
</template>
