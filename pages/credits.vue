<template>
    <NuxtLayout name="page" title="Profile" @back="() => console.log('back')">
      <div class="px-4 py-20 w-full">
        <div class="flex flex-col gap-y-4 max-w-lg mx-auto md:border md:p-8">
          <div class="font-bold text-2xl" >My Credit</div>
          <div class="shadow-lg p-4">
            <p class="text-xs" >Available Balance</p>
            <div class="flex justify-between">
                <div class="text-2xl" >0.0</div>
                <button class="rounded text-xs bg-green-400 p-1 h-min">Add Balance</button>
            </div>
          </div>
          <div>Transaction History</div>
          <div class="border-b flex justify-between p-4">
                <p>Filter Date</p>
                <Icon name="lucide:calendar-days" class="text-primary" size="24" />
          </div>
          <CreditNoHistory />
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
  </script>
  