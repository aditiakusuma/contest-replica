<template>
  <NuxtLayout name="page" title="Profile" @back="() => console.log('back')">
    <div class="px-4 py-20 w-full">
      <div class="flex flex-col gap-y-4 max-w-lg mx-auto md:border md:p-8">
        <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 bg-primary rounded-md flex justify-center items-center text-2xl text-white"
          >
            A
          </div>
          <div>
            <p class="text-lg">Name</p>
            <p class="text-sm text-gray-400">email@email.com</p>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg py-2 px-4 space-y-2">
          <div class="flex items-center">
            <div class="flex-1 my-2 mr-2 font-bold">Personal Info</div>
            <Icon
              name="material-symbols:edit-square-outline"
              size="30"
              class="text-primary"
            />
          </div>
          <div class="flex items-center gap-4 py-2">
            <div
              class="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-2xl text-primary"
            >
              <Icon name="material-symbols:person-outline-rounded" size="20" />
            </div>
            <div>
              <p class="text-sm">Full Name</p>
              <p class="text-sm text-gray-400">Aditia Kusuma</p>
            </div>
          </div>
          <div class="flex items-center gap-4 py-2">
            <div
              class="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-2xl text-primary"
            >
              <Icon name="ion:mail-outline" size="20" />
            </div>
            <div>
              <p class="text-sm">Email</p>
              <p class="text-sm text-gray-400">aditiakusuma800@gmail.com</p>
            </div>
          </div>
          <div class="flex items-center gap-4 py-2">
            <div
              class="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center text-2xl text-primary"
            >
              <Icon name="ph:phone" size="20" />
            </div>
            <div>
              <p class="text-sm">Phone</p>
              <p class="text-sm text-gray-400">+6285713706206</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-2xl rounded-lg py-2 px-4 flex items-center">
          <div class="flex-1 my-2 mr-2 font-bold">My Address</div>
          <Icon name="lucide:circle-plus" size="30" class="text-primary" />
        </div>
        <div class="bg-white shadow-2xl rounded-lg py-2 px-4 flex items-center">
          <div class="flex-1 my-2 mr-2 font-bold">Change Password</div>
          <Icon
            name="material-symbols:edit-square-outline"
            size="30"
            class="text-primary"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>
