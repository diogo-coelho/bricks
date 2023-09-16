<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="240.44"
      y="0.03"
      width="31.11"
      height="511.95"
      transform="translate(-106.04 256) rotate(-45)"
      :style="{ fill: color }"
    />
    <polygon
      points="80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304"
      :style="{ fill: color }"
    />
    <polygon
      points="432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconFlashOffSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
