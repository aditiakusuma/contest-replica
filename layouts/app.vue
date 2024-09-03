<template>
  <div>
    <Navbar class="z-10" @menu-open="toggleSidebar" />
    <Transition name="slide-fade">
      <Sidebar
        v-if="isSidebarOpen"
        class="z-20"
        @clicked-outside="toggleSidebar"
      />
    </Transition>
    <slot />
    <Tabs />
  </div>
</template>

<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useSidebar();
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>