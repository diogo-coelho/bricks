<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="416"
      y="96"
      width="64"
      height="320"
      rx="8"
      ry="8"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="288"
      y="176"
      width="64"
      height="240"
      rx="8"
      ry="8"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="160"
      y="240"
      width="64"
      height="176"
      rx="8"
      ry="8"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <rect
      x="32"
      y="304"
      width="64"
      height="112"
      rx="8"
      ry="8"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCellularOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
