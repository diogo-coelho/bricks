<template>
  <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <circle
      cx="256"
      cy="256"
      r="208"
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      :style="{ stroke: color }"
    />
    <line
      x1="108.92"
      y1="108.92"
      x2="403.08"
      y2="403.08"
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      :style="{ stroke: color }"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrIconBanOutline',
  props: {
    color: {
      type: String,
      default: () => `var(--br-color-neutral-500)`,
    },
  },
})
</script>
