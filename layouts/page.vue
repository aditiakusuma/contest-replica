<template>
  <div>
    <nav
      class="fixed top-0 inset-x-0 h-14 bg-white flex justify-between items-center"
    >
      <div class="w-[70px] flex justify-center h-12 items-center">
        <button
          class=" flex justify-center items-center rounded-xl w-[42px] h-[42px]"
          @click="$emit('back')"
        >
          <Icon name="ic:sharp-keyboard-backspace" size="24" />
        </button>
      </div>
      <div class="w-[70px] flex-1 flex justify-center h-12 items-center text-2xl font-bold">
        {{ props.title }}
      </div>
      <div class="w-[70px] flex justify-center h-12 items-center">
        <slot name="icon-right" />
      </div>
    </nav>
    <slot />
    <Tabs />
  </div>
</template>

<script setup lang="ts">
const props = useAttrs();

defineEmits(['back'])
</script>
