<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="368"
      cy="256"
      r="128"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="16"
      y="128"
      width="480"
      height="256"
      rx="128"
      ry="128"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconToggleOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
