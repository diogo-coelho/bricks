<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polygon
      points="48 170 48 366.92 240 480 240 284 48 170"
      :style="{ fill: color }"
    />
    <path
      d="M272,480,464,366.92V170L272,284ZM448,357.64h0Z"
      :style="{ fill: color }"
    />
    <polygon
      points="448 144 256 32 64 144 256 256 448 144"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconCubeSharp',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
