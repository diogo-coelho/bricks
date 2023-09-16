<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <circle
      cx="256"
      cy="256"
      r="208"
      style="fill: none; stroke-linejoin: round; stroke-width: 32px"
      :style="{ stroke: color }"
    />
    <path
      d="M256,464C141.12,464,48,370.88,48,256S141.12,48,256,48Z"
      :style="{ fill: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconContrastOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
