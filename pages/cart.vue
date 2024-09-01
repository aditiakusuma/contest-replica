<template>
  <NuxtLayout name="page" title="Cart" @back="() => console.log('back')">
    <template #icon-right>
            <Icon name="hugeicons:delete-02" size="32" class="cursor-pointer" />
    </template>
    <div class="px-4 py-20 w-full">
      <CartEmpty />
    </div>
  </NuxtLayout>
</template>
