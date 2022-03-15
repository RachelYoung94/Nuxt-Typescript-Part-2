<template>
  <div class="p-10 bg-gray-900 min-h-screen">
    <div class="text-8xl font-bold text-primary-400">
      <span>Hi</span>
      <span class="text-secondary-500">(yield)</span>
    </div>
    <div>
      <p class="mt-10 custom-title-in-assets-css">Nuxt 2 starter template 🥳</p>
    </div>
    <div class="mt-10">
      <ToDos />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
