<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="64"
      y="176"
      width="384"
      height="256"
      rx="28.87"
      ry="28.87"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <line
      x1="144"
      y1="80"
      x2="368"
      y2="80"
      style="stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <line
      x1="112"
      y1="128"
      x2="400"
      y2="128"
      style="stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconAlbumsOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
