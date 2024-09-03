<template>
  <button
    class="text-sm bg-primary rounded-md py-3 px-6 w-min flex justify-center items-center gap-2 shadow-md"
  >
    <slot name="icon-left"> </slot>
    <div>
      <slot />
    </div>
    <slot name="icon-right"> </slot>
  </button>
</template>
