<template>
  <button
    v-bind="$attrs"
    class="hover:bg-primary-400 bg-primary-500 p-2 rounded-md text-lg text-white"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
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
