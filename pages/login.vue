<template>
  <div class="px-4 py-4 w-full">
    <div class="max-w-lg mx-auto md:shadow-2xl md:rounded-xl md:p-8">
      <div class="flex justify-between gap-4 mb-10">
        <div class="w-12 flex justify-center h-12 items-center self-start">
          <button
            class="flex justify-center items-center rounded-xl w-[42px] h-[42px]"
            @click="$emit('back')"
          >
            <Icon name="lucide:arrow-left" size="24" />
          </button>
        </div>
        <img
          src="https://system.dilanatandoor.com.my/theme/assets/images/largelogo.png"
          class="w-24 h-24 rounded-full object-cover"
          t=""
        />
        <div
          class="w-12 flex justify-center h-12 items-center self-start"
        ></div>
      </div>
      <div class="px-6 flex flex-col items-center">
        <div class="flex flex-col w-full mb-4">
          <label for="email" class="text-sm text-gray-400 mb-2">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="p-3 rounded-md border bg-white pl-4 w-full"
            placeholder="Your email"
          />
        </div>
        <div class="flex flex-col w-full">
          <label for="password" class="text-sm text-gray-400 mb-2"
            >Password</label
          >
          <div class="relative w-full">
            <input
              id="password"
              type="password"
              name="password"
              class="p-3 rounded-md border bg-white pl-4 pr-12 w-full"
              placeholder="Password"
            />
            <Icon
              name="ri:eye-fill"
              class="absolute bottom -1/2 right-0 translate-y-1/2 -translate-x-1/2 text-gray-400"
              size="24"
            />
          </div>
        </div>
        <div class="my-2.5 text-primary text-xs font-medium">
          Forgot Password?
        </div>
        <button class="text-sm bg-primary rounded-md w-36 h-10 font-semibold">
          LOGIN
        </button>
        <div class="my-2.5 text-xs font-medium text-gray-400">
          Don't have an account? <span class="text-primary ml-1">Sign Up</span>
        </div>
        <div class="flex w-full gap-2 items-center text-sm mb-1">
            <div class="h-[1px] flex-1 bg-slate-600"></div>
            <div>sign in with</div>
            <div class="h-[1px] flex-1 bg-slate-600"></div>
        </div>
        <button class="h-12 relative bg-blue-500 text-white w-full rounded-lg font-bold">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDu707trtA9s0IEPIKZ7ZjFEYUnGalwOQvw&s" class="w-10 h-10 absolute inset-y-1 left-1 rounded-md" alt="">
            Sign in With Google
        </button>
      </div>
    </div>
  </div>
</template>
