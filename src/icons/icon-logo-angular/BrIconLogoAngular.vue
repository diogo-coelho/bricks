<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polygon
      points="213.57 256 298.42 256 255.99 166.64 213.57 256"
      :style="{ fill: color }"
    />
    <path
      d="M256,32,32,112,78.12,384,256,480l177.75-96L480,112Zm88,320-26.59-56H194.58L168,352H128L256,72,384,352Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconLogoAngular',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-800)`,
    },
  },
})
</script>
