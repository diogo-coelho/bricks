<template>
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M136 208L256 104L376 208"
      fill="none"
      stroke-width="48"
      stroke-linecap="square"
      :style="{ stroke: color }"
    />
    <path
      d="M136 304L256 408L376 304"
      fill="none"
      stroke-width="48"
      stroke-linecap="square"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconChevronExpandSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
